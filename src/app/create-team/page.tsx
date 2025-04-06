"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";
import { CHARACTERS } from "@/data/characters";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Card, CardContent } from "@/app/components/ui/Card";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import { Button } from "@/app/components/ui/Button";
import { CharacterSelector } from "@/app/components/teams/CharacterSelector";
import { MissionSelector } from "@/app/components/teams/MissionSelector";
import { useTeams } from "@/app/contexts/TeamsContext";
import { useAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";

export default function CreateTeamPage() {
  const router = useRouter();
  const { addTeam } = useTeams();
  const { user, accessLevel, loading } = useAuth();
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [teamType, setTeamType] = useState<"quick" | "ladder">("quick");
  const [selectedMissions, setSelectedMissions] = useState<string[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    } else if (!loading && user && accessLevel < 1) {
      setShouldRedirect(true);
    }
  }, [user, accessLevel, loading, router]);

  if (shouldRedirect) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="flex flex-col gap-2 flex-1 items-center justify-center px-4 py-12">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Acesso Negado
          </h2>
          <p className="text-gray-600">
            Você não tem permissão para criar um novo time.
          </p>
          <Link href="/">Voltar para a página inicial</Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (!loading && user && accessLevel >= 1) {
    const handleCharacterSelect = (characterName: string) => {
      if (selectedCharacters.includes(characterName)) {
        setSelectedCharacters(
          selectedCharacters.filter((name) => name !== characterName)
        );
      } else if (selectedCharacters.length < 3) {
        setSelectedCharacters([...selectedCharacters, characterName]);
      }
    };

    const handleAddMission = (mission: string) => {
      if (!selectedMissions.includes(mission)) {
        setSelectedMissions([...selectedMissions, mission]);
      }
    };

    const handleRemoveMission = (mission: string) => {
      setSelectedMissions(selectedMissions.filter((m) => m !== mission));
    };

    const handleSaveTeam = async (event: FormEvent) => {
      event.preventDefault();
      if (!teamName.trim()) {
        alert("Por favor, dê um nome ao seu time!");
        return;
      }

      if (selectedCharacters.length !== 3) {
        alert("Selecione exatamente 3 personagens para o seu time!");
        return;
      }

      if (teamType === "quick" && selectedMissions.length === 0) {
        alert("Adicione pelo menos uma missão para o seu time!");
        return;
      }

      setIsSaving(true);
      try {
        await addTeam({
          name: teamName,
          description: teamDescription,
          type: teamType,
          missions: teamType === "quick" ? selectedMissions : [],
          characters: selectedCharacters,
        });
        router.push("/");
      } catch (error) {
        console.error("Erro ao salvar o time:", error);
        alert("Ocorreu um erro ao salvar o time.");
      } finally {
        setIsSaving(false);
      }
    };

    return (
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Criar Novo Time
            </h2>
            <p className="text-gray-600">
              Selecione 3 personagens para formar seu time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card className="sticky top-8">
                <CardContent>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Seu Time
                  </h3>

                  <form onSubmit={handleSaveTeam} className="space-y-4">
                    <Input
                      id="team-name"
                      label="Nome do Time*"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="Digite o nome do time"
                      required
                    />

                    <Textarea
                      id="team-description"
                      label="Estratégia do Time"
                      value={teamDescription}
                      onChange={(e) => setTeamDescription(e.target.value)}
                      placeholder="Descreva como usar este time, estratégias e dicas..."
                    />

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Tipo de Time*
                      </label>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => setTeamType("quick")}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            teamType === "quick"
                              ? "bg-orange-500 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          Quick Game
                        </button>
                        <button
                          type="button"
                          onClick={() => setTeamType("ladder")}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            teamType === "ladder"
                              ? "bg-orange-500 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          Ladder
                        </button>
                      </div>
                    </div>

                    {teamType === "quick" && (
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-gray-700">
                          Missões*
                        </label>
                        <MissionSelector
                          selectedMissions={selectedMissions}
                          onAddMission={handleAddMission}
                          onRemoveMission={handleRemoveMission}
                        />
                      </div>
                    )}

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Personagens Selecionados ({selectedCharacters.length}
                        /3)*
                      </p>

                      {selectedCharacters.length === 0 ? (
                        <div className="text-center py-4 text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                          <p>Nenhum personagem selecionado</p>
                        </div>
                      ) : (
                        <div className="flex justify-center space-x-2 py-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                          {selectedCharacters.map((charName) => {
                            const character = CHARACTERS.find(
                              (c) => c.name === charName
                            );
                            return (
                              <div key={charName} className="relative">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                  <Image
                                    src={character?.url || "/placeholder.svg"}
                                    alt={charName}
                                    width={64}
                                    height={64}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCharacterSelect(charName)
                                  }
                                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 z-10"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={
                        isSaving ||
                        selectedCharacters.length !== 3 ||
                        !teamName.trim() ||
                        (teamType === "quick" && selectedMissions.length === 0)
                      }
                      className="w-full"
                    >
                      {isSaving ? "Salvando..." : "Salvar Time"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <Card className="mb-6">
                <CardContent>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Selecione os 3 Personagens
                  </h3>
                  <div className="flex justify-center">
                    <CharacterSelector
                      characters={CHARACTERS}
                      selectedCharacters={selectedCharacters}
                      onSelect={handleCharacterSelect}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-12 text-center">
        <p>Carregando informações de autenticação...</p>
      </main>
      <Footer />
    </div>
  );
}
