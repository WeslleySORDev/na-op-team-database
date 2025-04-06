export type Team = {
  id: string;
  name: string;
  description?: string;
  type: "quick" | "ladder";
  missions?: string[];
  characters: string[];
  createdAt: number;
  uid: string;
};