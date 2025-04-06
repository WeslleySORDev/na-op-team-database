"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import type { Character } from "@/types/character";

type CharacterSelectorProps = {
  characters: Character[];
  selectedCharacters: string[];
  onSelect: (characterName: string) => void;
};

export function CharacterSelector({
  characters,
  selectedCharacters,
  onSelect,
}: CharacterSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {characters.map((character) => {
        const isSelected = selectedCharacters.includes(character.name);
        return (
          <div
            key={character.name}
            onClick={() => onSelect(character.name)}
            className="relative cursor-pointer rounded-lg overflow-hidden"
          >
            <div className="w-[75px] h-[75px] relative">
              <Image
                src={character.url || "/placeholder.svg"}
                alt={character.name}
                width={75}
                height={75}
                className="object-cover"
              />
            </div>
            {isSelected && (
              <>
                <div className="absolute top-1 right-1 bg-orange-500 rounded-full p-1 shadow-md z-10">
                  <Check className="h-3 w-3 text-white" />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
