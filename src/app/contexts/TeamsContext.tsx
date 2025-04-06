"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db, auth } from "@/app/config/firebase"; // Importe a instância de autenticação
import { Team } from "@/types/team";

interface TeamsContextType {
  teams: Team[];
  addTeam: (team: Omit<Team, "id" | "createdAt" | "uid">) => Promise<void>; // Remova "uid" de Omit
  updateTeam: (
    id: string,
    updatedTeam: Omit<Team, "id" | "createdAt">
  ) => Promise<void>;
  deleteTeam: (id: string) => Promise<void>;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export const TeamsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const teamsCollectionRef = collection(db, "teams");

  useEffect(() => {
    const unsubscribe = onSnapshot(teamsCollectionRef, (snapshot) => {
      const fetchedTeams: Team[] = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data()?.createdAt?.toDate().getTime() || Date.now(),
          } as Team)
      );
      setTeams(fetchedTeams);
    });
    return () => unsubscribe();
  }, []);

  const addTeam = async (teamData: Omit<Team, "id" | "createdAt" | "uid">) => {
    if (!auth.currentUser?.uid) {
      console.error("Usuário não autenticado ao tentar criar um time.");
      return;
    }
    const newTeamDocRef = doc(teamsCollectionRef);
    const newTeam: Team = {
      id: newTeamDocRef.id,
      ...teamData,
      createdAt: Date.now(),
      uid: auth.currentUser.uid, // Salva o UID do usuário logado
    };
    await setDoc(newTeamDocRef, {
      name: newTeam.name,
      description: newTeam.description,
      type: newTeam.type,
      missions: newTeam.missions,
      characters: newTeam.characters,
      createdAt: Timestamp.now(), // Use Timestamp para melhor compatibilidade com Firestore
      uid: newTeam.uid,
    });
  };

  const updateTeam = async (
    id: string,
    updatedTeamData: Omit<Team, "id" | "createdAt">
  ) => {
    const teamDocRef = doc(db, "teams", id);
    await setDoc(
      teamDocRef,
      {
        name: updatedTeamData.name,
        description: updatedTeamData.description,
        type: updatedTeamData.type,
        missions: updatedTeamData.missions,
        characters: updatedTeamData.characters,
      },
      { merge: true }
    );
  };

  const deleteTeam = async (id: string) => {
    const teamDocRef = doc(db, "teams", id);
    await deleteDoc(teamDocRef);
  };

  const value: TeamsContextType = {
    teams,
    addTeam,
    updateTeam,
    deleteTeam,
  };

  return (
    <TeamsContext.Provider value={value}>{children}</TeamsContext.Provider>
  );
};

export const useTeams = () => {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error("useTeams must be used within a TeamsProvider");
  }
  return context;
};