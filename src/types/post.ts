export type MoodType = "chill" | "energetic" | "nostalgic" | "happy";

export interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  author: string;
  authorAvatar: string;
  likes: number;
  comments: number;
  mood: MoodType;
  timestamp: string;
}
