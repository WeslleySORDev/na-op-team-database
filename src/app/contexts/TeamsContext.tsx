"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { Team } from "@/types/team";

interface TeamsContextType {
  teams: Team[];
  addTeam: (team: Omit<Team, "id" | "createdAt">) => Promise<void>;
  updateTeam: (
    id: string,
    updatedTeam: Omit<Team, "id" | "createdAt">
  ) => Promise<void>;
  deleteTeam: (id: string) => Promise<void>;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export const TeamsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const teamsCollectionRef = collection(db, "teams");

  useEffect(() => {
    const unsubscribe = onSnapshot(teamsCollectionRef, (snapshot) => {
      const fetchedTeams: Team[] = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data()?.createdAt?.toDate().getTime() || Date.now(),
          } as Team)
      );
      setTeams(fetchedTeams);
    });
    return () => unsubscribe();
  }, []);

  const addTeam = async (teamData: Omit<Team, "id" | "createdAt">) => {
    const newTeam: Team = {
      id: doc(teamsCollectionRef).id,
      ...teamData,
      createdAt: Date.now(),
    };
    await setDoc(doc(teamsCollectionRef, newTeam.id), {
      name: newTeam.name,
      description: newTeam.description,
      type: newTeam.type,
      missions: newTeam.missions,
      characters: newTeam.characters,
      createdAt: newTeam.createdAt ? new Date(newTeam.createdAt) : new Date(),
    });
  };

  const updateTeam = async (
    id: string,
    updatedTeamData: Omit<Team, "id" | "createdAt">
  ) => {
    const teamDocRef = doc(db, "teams", id);
    await setDoc(
      teamDocRef,
      {
        name: updatedTeamData.name,
        description: updatedTeamData.description,
        type: updatedTeamData.type,
        missions: updatedTeamData.missions,
        characters: updatedTeamData.characters,
      },
      { merge: true }
    );
  };

  const deleteTeam = async (id: string) => {
    const teamDocRef = doc(db, "teams", id);
    await deleteDoc(teamDocRef);
  };

  const value: TeamsContextType = {
    teams,
    addTeam,
    updateTeam,
    deleteTeam,
  };

  return (
    <TeamsContext.Provider value={value}>{children}</TeamsContext.Provider>
  );
};

export const useTeams = () => {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error("useTeams must be used within a TeamsProvider");
  }
  return context;
};
