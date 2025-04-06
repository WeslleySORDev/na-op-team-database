"use client";

import type React from "react";
import { useState } from "react";
import { X, Plus } from "lucide-react";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";

type MissionSelectorProps = {
  selectedMissions: string[];
  onAddMission: (mission: string) => void;
  onRemoveMission: (mission: string) => void;
};

export function MissionSelector({
  selectedMissions,
  onAddMission,
  onRemoveMission,
}: MissionSelectorProps) {
  const [newMission, setNewMission] = useState("");

  const handleAddMission = () => {
    if (newMission.trim()) {
      onAddMission(newMission.trim());
      setNewMission("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddMission();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Digite o nome da missão..."
          value={newMission}
          onChange={(e) => setNewMission(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
        />
        <Button
          onClick={handleAddMission}
          disabled={!newMission.trim()}
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Adicionar
        </Button>
      </div>

      {selectedMissions.length > 0 ? (
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Missões adicionadas:</p>
          <div className="flex flex-wrap gap-2">
            {selectedMissions.map((mission) => (
              <span
                key={mission}
                className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
              >
                {mission}
                <button
                  onClick={() => onRemoveMission(mission)}
                  className="ml-1 text-orange-600 hover:text-orange-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center text-gray-400">
          Nenhuma missão adicionada
        </div>
      )}
    </div>
  );
}
