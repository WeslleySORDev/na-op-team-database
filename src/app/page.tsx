"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import type { Team } from "@/types/team";
import { CHARACTERS } from "@/data/characters";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Tabs } from "@/app/components/ui/Tabs";
import { Input } from "@/app/components/ui/Input";
import { TeamList } from "@/app/components/teams/TeamList";

export default function HomePage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "quick" | "ladder">("all");
  const [missionFilter, setMissionFilter] = useState("");
  const [filteredMissions, setFilteredMissions] = useState<string[]>([]);

  // Carregar times do localStorage quando o componente montar
  useEffect(() => {
    const savedTeams = localStorage.getItem("naruto-teams");
    if (savedTeams) {
      const parsedTeams = JSON.parse(savedTeams);
      // Garantir que times antigos tenham o campo type e missions
      const updatedTeams = parsedTeams.map((team: any) => ({
        ...team,
        type: team.type || "quick", // Valor padrão para times antigos
        missions: team.missions || [], // Valor padrão para times antigos
      }));
      setTeams(updatedTeams);
    }
  }, []);

  // Função para encontrar a URL da imagem do personagem pelo nome
  const getCharacterImages = () => {
    const images: Record<string, string> = {};
    CHARACTERS.forEach((char) => {
      images[char.name] = char.url;
    });
    return images;
  };

  // Extrair todas as missões únicas dos times
  useEffect(() => {
    const allMissions = teams
      .filter(
        (team) =>
          team.type === "quick" && team.missions && team.missions.length > 0
      )
      .flatMap((team) => team.missions || []);

    const uniqueMissions = [...new Set(allMissions)];
    setFilteredMissions(uniqueMissions);
  }, [teams]);

  // Filtrar times com base na aba ativa e no filtro de missão
  const filteredTeams = teams.filter((team) => {
    // Filtro por tipo (aba)
    if (activeTab !== "all" && team.type !== activeTab) return false;

    // Filtro por missão (apenas para quick game)
    if (activeTab === "quick" && missionFilter && team.missions) {
      return team.missions.some((mission) =>
        mission.toLowerCase().includes(missionFilter.toLowerCase())
      );
    }

    return true;
  });

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as "all" | "quick" | "ladder");
    setMissionFilter("");
  };

  const tabs = [
    {
      id: "all",
      label: "Todos os Times",
      content: (
        <TeamList
          teams={filteredTeams}
          emptyMessage="Todos os Times"
          characterImages={getCharacterImages()}
        />
      ),
    },
    {
      id: "quick",
      label: "Quick Game",
      content: (
        <TeamList
          teams={filteredTeams}
          emptyMessage="Times para Quick Game"
          characterImages={getCharacterImages()}
        />
      ),
    },
    {
      id: "ladder",
      label: "Ladder",
      content: (
        <TeamList
          teams={filteredTeams}
          emptyMessage="Times para Ladder"
          characterImages={getCharacterImages()}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Times Criados
          </h2>
          <p className="text-gray-600">
            Visualize todos os times criados ou crie um novo time com seus
            personagens favoritos.
          </p>
        </div>

        <Tabs
          tabs={tabs}
          defaultTab="all"
          onChange={handleTabChange}
          className="mb-8"
        />

        {activeTab === "quick" && (
          <div className="mt-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Filtrar por missão..."
                value={missionFilter}
                onChange={(e) => setMissionFilter(e.target.value)}
                className="pl-10 pr-10"
              />
              {missionFilter && (
                <button
                  onClick={() => setMissionFilter("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
