import type React from "react";
import { PlusCircle, ArrowLeft, User as UserIcon, User } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { useAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const { user, signOut, signInWithGoogleRedirect, userNickname } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            OP Team Database
          </Link>
        </div>

        <div className="flex flex-col items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white">
                  {user?.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || userNickname || "User Avatar"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <UserIcon className="h-5 w-5 text-white" />
                  )}
                </div>
                <span>{userNickname || user?.displayName || "Usuário"}</span>
              </button>

              {isUserMenuOpen && (
                <div
                  ref={userMenuRef}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                >
                  <Link
                    href="/create-team"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <PlusCircle className="mr-2 h-4 w-4 inline-block" />
                    Criar Novo Time
                  </Link>
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={signInWithGoogleRedirect} variant="secondary">
              <User className="mr-2 h-4 w-4" />
              Login com Google
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
