export interface GameType {
  photo: string;
  photoAlt: string;
  tagline: string;
  tags: string[];
  title: string;
}

export const gamesData: GameType[] = [
  {
    photo: "./game-photos/snake",
    photoAlt: "",
    tagline:
      "The classic phone game - eat the food without touching your tail!",
    tags: ["vanilla", "html", "canvas"],
    title: "Snake",
  },
];
