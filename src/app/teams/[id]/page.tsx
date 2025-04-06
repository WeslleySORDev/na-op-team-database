"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Swords, Info, MapPin, Trash } from "lucide-react";
import type { Team } from "@/types/team";
import { CHARACTERS } from "@/data/characters";
import { formatDescription } from "@/utils/formatDescription";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Card, CardContent } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Tabs } from "@/app/components/ui/Tabs";

export default function TeamDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const teamId = params.id as string;

  const [team, setTeam] = useState<Team | null>(null);
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);

  // Carregar time do localStorage quando o componente montar
  useEffect(() => {
    const savedTeams = localStorage.getItem("naruto-teams");
    if (savedTeams) {
      const teams = JSON.parse(savedTeams);
      const foundTeam = teams.find((t: Team) => t.id === teamId);
      if (foundTeam) {
        // Garantir que times antigos tenham os novos campos
        const updatedTeam = {
          ...foundTeam,
          type: foundTeam.type || "quick", // Valor padrão para times antigos
          description: foundTeam.description || "", // Valor padrão para times antigos
          missions: foundTeam.missions || [], // Valor padrão para times antigos
        };
        setTeam(updatedTeam);
        setActiveCharacter(updatedTeam.characters[0]);
      } else {
        // Time não encontrado, redirecionar para a página inicial
        router.push("/");
      }
    } else {
      // Nenhum time salvo, redirecionar para a página inicial
      router.push("/");
    }
  }, [teamId, router]);

  const handleDeleteTeam = () => {
    if (confirm("Tem certeza que deseja excluir este time?")) {
      const savedTeams = localStorage.getItem("naruto-teams");
      if (savedTeams) {
        const teams = JSON.parse(savedTeams);
        const updatedTeams = teams.filter((t: Team) => t.id !== teamId);
        localStorage.setItem("naruto-teams", JSON.stringify(updatedTeams));
        router.push("/");
      }
    }
  };

  // Encontrar o personagem ativo
  const activeCharacterData = CHARACTERS.find(
    (char) => char.name === activeCharacter
  );

  if (!team) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  const headerRightContent = (
    <div className="flex items-center space-x-2">
      <Button
        className="cursor-pointer"
        variant="secondary"
        onClick={handleDeleteTeam}
      >
        <Trash className="mr-2 h-4 w-4" />
        Excluir Time
      </Button>
    </div>
  );

  const strategyTab = {
    id: "strategy",
    label: (
      <div className="flex items-center">
        <Swords className="mr-2 h-4 w-4" />
        Estratégia do Time
      </div>
    ),
    content: (
      <Card>
        <CardContent>
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Estratégia e Dicas
          </h3>

          {team.description ? (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 whitespace-pre-wrap">
              {team.description}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-gray-500 text-center">
              Nenhuma estratégia definida para este time.
            </div>
          )}

          {team.type === "quick" &&
            team.missions &&
            team.missions.length > 0 && (
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-blue-800">
                    Missões Recomendadas
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {team.missions.map((mission) => (
                    <span
                      key={mission}
                      className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {mission}
                    </span>
                  ))}
                </div>
              </div>
            )}

          <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h4 className="font-medium text-orange-800 mb-2">
              Composição do Time
            </h4>
            <ul className="space-y-2">
              {team.characters.map((charName, index) => {
                const character = CHARACTERS.find((c) => c.name === charName);
                return (
                  <li key={index} className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src={character?.url || "/placeholder.svg"}
                        alt={charName}
                        fill
                        className="object-cover"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <span className="text-gray-800">{charName}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </CardContent>
      </Card>
    ),
  };

  const charactersTab = {
    id: "characters",
    label: (
      <div className="flex items-center">
        <Info className="mr-2 h-4 w-4" />
        Detalhes dos Personagens
      </div>
    ),
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Personagens
              </h3>

              <div className="space-y-4">
                {team.characters.map((charName) => {
                  const character = CHARACTERS.find((c) => c.name === charName);
                  const isActive = activeCharacter === charName;

                  return (
                    <div
                      key={charName}
                      onClick={() => setActiveCharacter(charName)}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        isActive
                          ? "bg-orange-100 border border-orange-300"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src={character?.url || "/placeholder.svg"}
                          alt={charName}
                          fill
                          className="object-cover"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <span className="font-medium text-gray-800">
                        {charName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {activeCharacterData && (
            <Card>
              <CardContent className="p-0">
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={activeCharacterData.url || "/placeholder.svg"}
                    alt={activeCharacterData.name}
                    fill
                    className="object-cover object-top"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {activeCharacterData.name}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className="mb-6 text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: formatDescription(
                        activeCharacterData.descriptionBR || ""
                      ),
                    }}
                  ></p>

                  <div className="mt-4">
                    <div className="border-b border-gray-200">
                      <div className="flex">
                        <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-600 font-medium">
                          Habilidades
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="space-y-4">
                        {activeCharacterData.skills?.map((skill) => (
                          <div
                            key={skill.name}
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                          >
                            <div className="flex items-center mb-3">
                              <div className="relative w-10 h-10 rounded-md overflow-hidden mr-3 border border-gray-200">
                                <Image
                                  src={skill.url || "/placeholder.svg"}
                                  alt={skill.name}
                                  fill
                                  className="object-cover"
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-800">
                                  {skill.name}
                                </h4>
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                  {skill.cooldown > 0 && (
                                    <span>CD: {skill.cooldown}</span>
                                  )}
                                  {skill.classes
                                    .filter((c) => !c.startsWith("_"))
                                    .map((cls, i) => (
                                      <span
                                        key={i}
                                        className="bg-gray-200 px-1.5 py-0.5 rounded-sm"
                                      >
                                        {cls}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            </div>
                            <p
                              className="text-sm text-gray-700"
                              dangerouslySetInnerHTML={{
                                __html: formatDescription(skill.descriptionBR),
                              }}
                            ></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    ),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header showBackButton backUrl="/" rightContent={headerRightContent} />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <h2 className="text-3xl font-bold text-gray-800 mr-3">
              {team.name}
            </h2>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                team.type === "ladder"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {team.type === "ladder" ? "Ladder" : "Quick Game"}
            </span>
          </div>
          <div className="flex justify-center space-x-4 my-6">
            {team.characters.map((charName, index) => {
              const character = CHARACTERS.find((c) => c.name === charName);
              return (
                <div
                  key={index}
                  className="relative w-24 h-24 rounded-full overflow-hidden"
                >
                  <Image
                    src={character?.url || "/placeholder.svg"}
                    alt={charName}
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <Tabs tabs={[strategyTab, charactersTab]} defaultTab="strategy" />
      </main>

      <Footer />
    </div>
  );
}
