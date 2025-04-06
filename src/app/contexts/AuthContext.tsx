// AuthContext.tsx
"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { auth, db } from "@/app/config/firebase";
import {
  onAuthStateChanged,
  User,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  userNickname: string | null;
  setUserNickname: React.Dispatch<React.SetStateAction<string | null>>;
  updateNickname: (newNickname: string) => Promise<void>;
  accessLevel: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userNickname, setUserNickname] = useState<string | null>(null);
  const [accessLevel, setAccessLevel] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      setUser(authUser);
      setAccessLevel(0);
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          setUserNickname(docSnap.data()?.nickname || null);
          setAccessLevel(docSnap.data()?.accessLevel || 0);
        } else {
          setUserNickname(null);
          setAccessLevel(0);
          await setDoc(userDocRef, { nickname: null, accessLevel: 0 });
        }
      } else {
        setUserNickname(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true); // Define loading como true ANTES do popup
    const provider = new GoogleAuthProvider();
    try {
      await auth.signOut();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        router.push("/set-nickname");
      } else {
        setUserNickname(docSnap.data()?.nickname || null);
        setAccessLevel(docSnap.data()?.accessLevel || 0);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    } finally {
      setLoading(false); // Define loading como false APÓS a conclusão (sucesso ou falha)
    }
  };

  const signOutHandler = useCallback(async () => {
    setLoading(true); // Define loading como true ANTES do logout
    try {
      await firebaseSignOut(auth);
      setUserNickname(null);
      setAccessLevel(0);
      // Recarrega a página após o logout
      window.location.reload();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false); // Define loading como false APÓS a conclusão (sucesso ou falha)
    }
  }, []);

  const updateNickname = async (newNickname: string) => {
    if (!user?.uid) {
      console.error("User not authenticated.");
      return;
    }
    setLoading(true);
    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { nickname: newNickname }, { merge: true });
      setUserNickname(newNickname);
    } catch (error) {
      console.error("Error updating nickname:", error);
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signOut: signOutHandler,
    userNickname,
    setUserNickname,
    updateNickname,
    accessLevel,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Fundo semitransparente
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000, // Certifique-se de que esteja acima de outros elementos
          }}
        >
          {/* Adicione aqui seu indicador de carregamento (spinner, texto, etc.) */}
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-700"></div>
          {/* Você pode estilizar isso com Tailwind CSS ou CSS customizado */}
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
