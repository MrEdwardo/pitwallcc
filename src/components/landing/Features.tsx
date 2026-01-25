import { Activity, Award, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Team Activity Feed",
    description:
      "See what your teammates are up to in real-time. Track practice sessions, race results, and team milestones all in one place.",
  },
  {
    icon: Award,
    title: "Achievement Badges",
    description:
      "Gamify your racing journey with unlockable achievements. Hit iRating milestones, rack up wins, and earn badges for track mastery.",
  },
  {
    icon: Users,
    title: "Team Integration",
    description:
      "Built for endurance racing teams. Connect with Garage61 to automatically sync sessions and telemetry data.",
  },
  {
    icon: Zap,
    title: "Race Highlights",
    description:
      "Never miss a teammate's podium finish. Get notified when someone in your team achieves something worth celebrating.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything your team needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A companion app designed specifically for iRacing endurance teams
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof features)[number];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="font-outfit font-semibold text-xl mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}
