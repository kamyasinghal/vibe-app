import { useState } from "react";
import { PostCard } from "@/components/PostCard";
import { MoodFilter } from "@/components/MoodFilter";
import { mockPosts } from "@/data/posts";
import { MoodType } from "@/types/post";

export const Feed = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const filteredPosts = selectedMood
    ? mockPosts.filter((post) => post.mood === selectedMood)
    : mockPosts;

  return (
    <div className="min-h-screen pb-8">
      <div className="container mx-auto max-w-2xl px-4 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Discover Vibes</h1>
          <p className="text-muted-foreground">
            Filter your feed by mood - a unique way to explore content
          </p>
        </div>

        <MoodFilter selectedMood={selectedMood} onMoodChange={setSelectedMood} />

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts match this vibe yet</p>
          </div>
        )}
      </div>
    </div>
  );
};
