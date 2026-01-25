import { Badge } from "@/components/ui/badge";
import { Target, Trophy, Gauge, MapPin } from "lucide-react";

const achievements = [
  {
    icon: Target,
    title: "iRating Milestones",
    description: "Celebrate hitting 2000, 3000, 4000+ iRating",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Win Streaks",
    description: "Track overall wins and win ratio milestones",
    color: "accent",
  },
  {
    icon: Gauge,
    title: "Car Mastery",
    description: "Log miles in your favorite cars",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Track Expert",
    description: "Become an expert on legendary circuits",
    color: "accent",
  },
];

export function Achievements() {
  return (
    <section className="relative py-24 sm:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Badge showcase */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge key={achievement.title} achievement={achievement} index={index} />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4 font-mono text-xs border-accent/30 text-accent">
              Achievements
            </Badge>

            <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Gamify your racing journey
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Unlock badges as you progress through your iRacing career. Track
              milestones across iRating, wins, and track experience—all displayed
              in a beautiful badge collection.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Tap any badge to see detailed progress</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Compare achievements with teammates</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Earn rare badges for exceptional feats</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AchievementBadgeProps {
  achievement: (typeof achievements)[number];
  index: number;
}

function AchievementBadge({ achievement, index }: AchievementBadgeProps) {
  const Icon = achievement.icon;
  const isPrimary = achievement.color === "primary";

  return (
    <div
      className="group relative p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
          isPrimary ? "bg-primary/10" : "bg-accent/10"
        }`}
      >
        <Icon className={`w-7 h-7 ${isPrimary ? "text-primary" : "text-accent"}`} />
      </div>

      <h4 className="font-outfit font-semibold mb-1">{achievement.title}</h4>
      <p className="text-sm text-muted-foreground">{achievement.description}</p>
    </div>
  );
}
