export interface GameType {
  photo: string;
  photoAlt: string;
  tagline: string;
  tags: string[];
  title: string;
}

export const gamesData: GameType[] = [
  {
    photo: "./game-photos/snake.png",
    photoAlt:
      "A white screen with the word Snake written across the top. The page shows a score of 8 and a game board with a purple border. Inside the board, a red line is moving towards a green dot.",
    tagline:
      "The classic phone game - eat the food without touching your tail!",
    tags: ["javascript", "canvas"],
    title: "Snake",
  },
];
