import { Waves, Zap, Clock, Smile } from "lucide-react";
import { MoodType } from "@/types/post";
import { Button } from "@/components/ui/button";

interface MoodFilterProps {
  selectedMood: MoodType | null;
  onMoodChange: (mood: MoodType | null) => void;
}

const moods = [
  { type: "chill" as MoodType, icon: Waves, label: "Chill", gradient: "bg-gradient-chill" },
  { type: "energetic" as MoodType, icon: Zap, label: "Energetic", gradient: "bg-gradient-energetic" },
  { type: "nostalgic" as MoodType, icon: Clock, label: "Nostalgic", gradient: "bg-gradient-nostalgic" },
  { type: "happy" as MoodType, icon: Smile, label: "Happy", gradient: "bg-gradient-happy" },
];

export const MoodFilter = ({ selectedMood, onMoodChange }: MoodFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Button
        variant={selectedMood === null ? "default" : "outline"}
        onClick={() => onMoodChange(null)}
        className={selectedMood === null ? "bg-gradient-primary" : ""}
      >
        All Vibes
      </Button>
      {moods.map((mood) => {
        const Icon = mood.icon;
        const isActive = selectedMood === mood.type;
        return (
          <Button
            key={mood.type}
            variant={isActive ? "default" : "outline"}
            onClick={() => onMoodChange(mood.type)}
            className={isActive ? mood.gradient + " text-white border-0" : ""}
          >
            <Icon className="h-4 w-4 mr-2" />
            {mood.label}
          </Button>
        );
      })}
    </div>
  );
};
