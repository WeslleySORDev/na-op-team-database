"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import type { Team } from "@/types/team";
import { Card, CardContent, CardFooter } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";

type TeamCardProps = {
  team: Team;
  characterImages: Record<string, string>;
};

export function TeamCard({ team, characterImages }: TeamCardProps) {
  const [creatorNickname, setCreatorNickname] = useState<string | null>(null);
  const [loadingCreatorNickname, setLoadingCreatorNickname] = useState(true);

  useEffect(() => {
    if (team.uid) {
      const fetchCreatorNickname = async () => {
        setLoadingCreatorNickname(true);
        try {
          const userDocRef = doc(db, "users", team.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            setCreatorNickname(
              docSnap.data()?.nickname || "Usuário Desconhecido"
            );
          } else {
            setCreatorNickname("Usuário Desconhecido");
          }
        } catch (error) {
          console.error("Erro ao buscar nickname do criador:", error);
          setCreatorNickname("Erro ao Carregar");
        } finally {
          setLoadingCreatorNickname(false);
        }
      };

      fetchCreatorNickname();
    } else {
      setLoadingCreatorNickname(false);
      setCreatorNickname(null);
    }
  }, [team.uid]);

  function formatMillisecondsTimestampToDDMMYYYY(milliseconds: number) {
    const date = new Date(milliseconds);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold text-gray-800 flex-1">
              {team.name}
            </h3>
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
          <div className="flex flex-col gap-1">
            {team.uid && (
              <h4 className="text-sm font-bold">
                Criador:{" "}
                {loadingCreatorNickname ? "Carregando..." : creatorNickname}
              </h4>
            )}
            <h4 className="text-sm font-bold">
              Data de criação:{" "}
              {formatMillisecondsTimestampToDDMMYYYY(team.createdAt)}
            </h4>
          </div>
        </div>
        <div className="flex justify-center space-x-2 my-4">
          {team.characters.map((charName, index) => (
            <div
              key={index}
              className="relative w-20 h-20 rounded-full overflow-hidden"
            >
              <Image
                src={characterImages[charName] || "/placeholder.svg"}
                alt={charName}
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {team.missions && team.missions.length > 0 && (
          <div className="mt-3 mb-2">
            <p className="text-xs text-gray-500 mb-1">Missões:</p>
            <div className="flex flex-wrap gap-1">
              {team.missions.map((mission) => (
                <span
                  key={mission}
                  className="inline-block px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full"
                >
                  {mission}
                </span>
              ))}
            </div>
          </div>
        )}

        {team.description && (
          <p className="text-sm text-gray-600 mt-3 line-clamp-2">
            {team.description}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button href={`/teams/${team.id}`} variant="outline" className="w-full">
          <Eye className="mr-2 h-4 w-4" />
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}
