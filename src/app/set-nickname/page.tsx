"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/Button";

export default function SetNickNamePage() {
  const router = useRouter();
  const { updateNickname, user, loading } = useAuth();
  const [nickname, setNickname] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const handleSaveNickname = async (event: FormEvent) => {
    event.preventDefault();
    if (!nickname.trim()) {
      alert("Por favor, digite o seu nickname!");
      return;
    }

    setIsSaving(true);
    try {
      await updateNickname(nickname);
      router.push("/");
    } catch (error) {
      console.error("Erro ao salvar o time:", error);
      alert("Ocorreu um erro ao salvar o time.");
    } finally {
      setIsSaving(false);
    }
  };
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, loading, router]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex flex-col gap-2 flex-1 items-center justify-center px-4 py-12">
        <div className="w-fit">
          <h2 className="text-xl">
            Para melhor organização preciso que digite qual seu nickname no jogo
          </h2>
          <form onSubmit={handleSaveNickname} className="space-y-4">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              id="user-nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickname"
              required
              maxLength={48}
            />
            <Button
              type="submit"
              disabled={isSaving || !nickname.trim()}
              className="w-full"
            >
              {isSaving ? "Salvando..." : "Salvar"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
