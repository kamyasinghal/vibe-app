import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { Post } from "@/types/post";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
}

const moodColors = {
  chill: "bg-gradient-chill",
  energetic: "bg-gradient-energetic",
  nostalgic: "bg-gradient-nostalgic",
  happy: "bg-gradient-happy",
};

export const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={post.authorAvatar} alt={post.author} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{post.author}</p>
            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
          </div>
        </div>
        <Badge className={`${moodColors[post.mood]} text-white border-0`}>
          {post.mood}
        </Badge>
      </div>

      <div className="relative aspect-square overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLike}
              className="group"
            >
              <Heart
                className={`h-6 w-6 transition-all ${
                  isLiked
                    ? "fill-red-500 text-red-500 animate-like-bounce"
                    : "group-hover:scale-110"
                }`}
              />
            </Button>
            <Button variant="ghost" size="icon" className="group">
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="ghost" size="icon" className="group">
              <Share2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-sm">
            {likesCount.toLocaleString()} likes
          </p>
          <p className="text-sm">
            <span className="font-semibold">{post.author}</span>{" "}
            {post.caption}
          </p>
          <p className="text-sm text-muted-foreground">
            View all {post.comments} comments
          </p>
        </div>
      </div>
    </Card>
  );
};
