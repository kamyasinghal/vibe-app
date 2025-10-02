import { mockPosts } from "@/data/posts";
import { Sparkles } from "lucide-react";

export const Explore = () => {
  return (
    <div className="min-h-screen pb-8">
      <div className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Explore</h1>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {mockPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer relative"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center space-y-1">
                  <p className="font-semibold">❤️ {post.likes}</p>
                  <p className="text-sm">💬 {post.comments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
