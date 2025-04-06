import { PlusCircle } from "lucide-react";
import type { Team } from "@/types/team";
import { TeamCard } from "@/app/components/teams/TeamCard";

type TeamListProps = {
  teams: Team[];
  emptyMessage: string;
  characterImages: Record<string, string>;
};

export function TeamList({
  teams,
  emptyMessage,
  characterImages,
}: TeamListProps) {
  if (teams.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center shadow-md border border-gray-100">
        <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
          <PlusCircle className="h-8 w-8 text-orange-500" />
        </div>
        <h3 className="text-xl font-medium mb-2 text-gray-800">
          Nenhum time encontrado
        </h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} characterImages={characterImages} />
      ))}
    </div>
  );
}
