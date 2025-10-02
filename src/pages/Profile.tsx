import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mockPosts } from "@/data/posts";
import { Settings } from "lucide-react";

export const Profile = () => {
  const userPosts = mockPosts.filter((post) => post.author === "Kams");

  return (
    <div className="min-h-screen pb-8">
      <div className="container mx-auto max-w-4xl px-4 py-8 space-y-8">
        <Card className="p-8 shadow-card">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="h-32 w-32 border-4 border-primary shadow-glow">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kams" alt="Kams" />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h1 className="text-3xl font-bold">Kams</h1>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground">
                  Adventure seeker 🌍 | Nature lover 🌲 | Vibe curator ✨
                </p>
              </div>

              <div className="flex gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold">{userPosts.length}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">2.4K</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">892</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>

              <Button className="bg-gradient-primary">Edit Profile</Button>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">My Posts</h2>
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {userPosts.map((post) => (
              <div
                key={post.id}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
