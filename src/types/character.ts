export type Skill = {
  name: string;
  description: string;
  descriptionBR: string;
  energy: string[];
  classes: string[];
  cooldown: number;
  url: string;
};

export type Character = {
  name: string;
  url: string;
  description?: string;
  descriptionBR?: string;
  skills?: Skill[];
};
