"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { Swords, Info, MapPin, Trash } from "lucide-react";
import type { Team } from "@/types/team";
import type { Character } from "@/types/character"; // Importe o tipo Character
import { CHARACTERS } from "@/data/characters";
import { formatDescription } from "@/utils/formatDescription";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Card, CardContent } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Tabs } from "@/app/components/ui/Tabs";
import { useTeams } from "@/app/contexts/TeamsContext";
import { useAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";

// Constants
const DEFAULT_USER_NICKNAME = "Usuário Desconhecido";
const DELETE_CONFIRMATION_MESSAGE = "Tem certeza que deseja excluir este time?";
const DELETE_PERMISSION_DENIED_MESSAGE =
  "Você não tem permissão para excluir este time.";
const DELETE_ERROR_MESSAGE = "Ocorreu um erro ao excluir o time.";
const LOADING_TEAM_DETAILS_MESSAGE = "Carregando detalhes do time...";
const TEAM_NOT_FOUND_MESSAGE = "Time não encontrado.";
const BACK_TO_HOME_LINK_TEXT = "Voltar para a página inicial";
const STRATEGY_TAB_LABEL = (
  <div className="flex items-center">
    <Swords className="mr-2 h-4 w-4" />
    Estratégia do Time
  </div>
);
const CHARACTERS_TAB_LABEL = (
  <div className="flex items-center">
    <Info className="mr-2 h-4 w-4" />
    Detalhes dos Personagens
  </div>
);
const NO_STRATEGY_MESSAGE = "Nenhuma estratégia definida para este time.";
const RECOMMENDED_MISSIONS_TITLE = (
  <div className="flex items-center mb-2">
    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
    <h4 className="font-medium text-blue-800">Missões Recomendadas</h4>
  </div>
);
const TEAM_COMPOSITION_TITLE = (
  <h4 className="font-medium text-orange-800 mb-2">Composição do Time</h4>
);
const SKILLS_TAB_BUTTON_TEXT = "Habilidades";

// Helper Functions
const fetchCreatorNickname = async (
  uid: string | undefined,
  setCreatorNickname: (nickname: string | null) => void,
  setLoading: (loading: boolean) => void
) => {
  if (!uid) {
    setLoading(false);
    setCreatorNickname(null);
    return;
  }
  setLoading(true);
  try {
    const userDocRef = doc(db, "users", uid);
    const docSnap = await getDoc(userDocRef);
    setCreatorNickname(
      docSnap.exists()
        ? docSnap.data()?.nickname || DEFAULT_USER_NICKNAME
        : DEFAULT_USER_NICKNAME
    );
  } catch (error) {
    console.error("Erro ao buscar nickname do criador:", error);
    setCreatorNickname("Erro ao Carregar");
  } finally {
    setLoading(false);
  }
};

const TeamDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const teamId = params.id as string;
  const { teams, deleteTeam } = useTeams();
  const { user, accessLevel, loading: authLoading } = useAuth();
  const [team, setTeam] = useState<Team | null>(null);
  const [activeCharacterData, setActiveCharacterData] =
    useState<Character | null>(null); // Mudança aqui para Character | null
  const [isLoading, setIsLoading] = useState(true);
  const [canDelete, setCanDelete] = useState(false);
  const [creatorNickname, setCreatorNickname] = useState<string | null>(null);
  const [loadingCreatorNickname, setLoadingCreatorNickname] = useState(true);

  // Fetch team details on component mount
  useEffect(() => {
    const foundTeam = teams.find((t) => t.id === teamId);
    if (foundTeam) {
      setTeam(foundTeam);
      // Encontra o objeto Character correspondente ao primeiro nome
      setActiveCharacterData(
        CHARACTERS.find((c) => c.name === foundTeam.characters[0]) || null
      );
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push("/");
    }
  }, [teamId, teams, router]);

  // Determine if the user can delete the team
  useEffect(() => {
    setCanDelete(
      !!team && !!user && (team.uid === user.uid || accessLevel === 2)
    );
  }, [team, user, accessLevel]);

  // Fetch the nickname of the team creator
  useEffect(() => {
    fetchCreatorNickname(
      team?.uid,
      setCreatorNickname,
      setLoadingCreatorNickname
    );
  }, [team?.uid]);

  // Handle team deletion
  const handleDeleteTeam = useCallback(async () => {
    if (!team) return;

    if (!canDelete) {
      alert(DELETE_PERMISSION_DENIED_MESSAGE);
      return;
    }

    if (confirm(DELETE_CONFIRMATION_MESSAGE)) {
      setIsLoading(true);
      try {
        await deleteTeam(teamId);
        router.push("/");
      } catch (error) {
        console.error("Erro ao excluir o time:", error);
        alert(DELETE_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }
  }, [team, canDelete, deleteTeam, teamId, router]);

  // Tab configurations
  const strategyTab = {
    id: "strategy",
    label: STRATEGY_TAB_LABEL,
    content: (
      <Card>
        <CardContent>
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Estratégia e Dicas
          </h3>
          {team?.description ? (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 whitespace-pre-wrap">
              {team.description}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-gray-500 text-center">
              {NO_STRATEGY_MESSAGE}
            </div>
          )}

          {team?.type === "quick" &&
            team.missions &&
            team.missions.length > 0 && (
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                {RECOMMENDED_MISSIONS_TITLE}
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
            {TEAM_COMPOSITION_TITLE}
            <ul className="space-y-2">
              {team?.characters?.map((charName, index) => {
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
    label: CHARACTERS_TAB_LABEL,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Personagens
              </h3>
              <div className="space-y-4">
                {team?.characters?.map((charName) => {
                  const character = CHARACTERS.find((c) => c.name === charName);
                  const isActive = activeCharacterData?.name === charName; // Agora comparamos com a propriedade name do objeto

                  return (
                    <div
                      key={charName}
                      onClick={() => setActiveCharacterData(character || null)} // Salva o objeto Character
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
                          {SKILLS_TAB_BUTTON_TEXT}
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
      <Header />

      <main className="relative container mx-auto px-4 py-12">
        {canDelete ? (
          <Button
            className="cursor-pointer absolute top-12 right-12"
            variant="primary"
            onClick={handleDeleteTeam}
            disabled={isLoading}
          >
            <Trash className="mr-2 h-4 w-4" />
            Excluir Time
          </Button>
        ) : (
          <span className="absolute top-12 right-12 underline">
            Você só pode excluir um time que você criou
          </span>
        )}
        <div className="mb-6">
          <div className="flex items-start mb-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-gray-800 mr-3">
                {team?.name}
              </h2>
              {team?.uid && (
                <h4 className="text-sm font-bold">
                  Criador:{" "}
                  <span className="text-orange-500">
                    {loadingCreatorNickname ? "Carregando..." : creatorNickname}
                  </span>
                </h4>
              )}
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full mt-2 ${
                team?.type === "ladder"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {team?.type === "ladder" ? "Ladder" : "Quick Game"}
            </span>
          </div>
          <div className="flex justify-center space-x-4 my-6">
            {team?.characters?.map((charName, index) => {
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

        {isLoading ? (
          <div className="text-center py-10">
            {LOADING_TEAM_DETAILS_MESSAGE}
          </div>
        ) : team ? (
          <Tabs tabs={[strategyTab, charactersTab]} defaultTab="strategy" />
        ) : (
          <div className="text-center py-10">
            {TEAM_NOT_FOUND_MESSAGE}{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              {BACK_TO_HOME_LINK_TEXT}
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TeamDetailsPage;
