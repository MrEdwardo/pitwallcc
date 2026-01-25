import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flag, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Racing stripe accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/60 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Badge
          variant="outline"
          className="mb-8 font-mono text-xs border-primary/30 text-primary animate-fade-in"
        >
          <Flag className="w-3 h-3 mr-1.5" />
          For iRacing Teams
        </Badge>

        <h1
          className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Your team's{" "}
          <span className="text-primary">racing hub</span>
          <br />
          in your pocket
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          Stay connected with your endurance racing team. Track sessions,
          celebrate achievements, and never miss a teammate's victory.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <Button size="lg" className="font-outfit font-medium px-8 gap-2" disabled>
            <Trophy className="w-4 h-4" />
            Coming to iOS
          </Button>
          <p className="text-sm text-muted-foreground">
            Powered by Garage61 telemetry
          </p>
        </div>

        {/* App preview mockup */}
        <div
          className="mt-16 sm:mt-20 animate-slide-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Phone frame */}
      <div className="relative bg-card rounded-[3rem] p-3 border border-border shadow-2xl shadow-primary/5 animate-float">
        {/* Screen */}
        <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {/* Status bar */}
          <div className="h-12 px-6 flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="font-mono">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 rounded-sm bg-muted-foreground/30" />
              <div className="w-4 h-2 rounded-sm bg-muted-foreground/30" />
              <div className="w-6 h-2 rounded-sm bg-muted-foreground/50" />
            </div>
          </div>

          {/* App content preview */}
          <div className="px-4 pb-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] text-muted-foreground">Welcome back</p>
                <p className="font-outfit font-semibold text-sm">Team Feed</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary" />
            </div>

            {/* Feed items */}
            <div className="space-y-3">
              <FeedItem
                type="win"
                title="P1 Finish!"
                subtitle="Alex • GT3 @ Spa"
                time="2h ago"
              />
              <FeedItem
                type="session"
                title="Practice Session"
                subtitle="Team • 24h Daytona Prep"
                time="4h ago"
              />
              <FeedItem
                type="achievement"
                title="Achievement Unlocked"
                subtitle="1000 Miles at Nordschleife"
                time="Yesterday"
              />
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-6 left-4 right-4">
              <div className="bg-secondary rounded-2xl p-3 flex justify-around">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 rounded bg-primary/20" />
                  <span className="text-[8px] text-primary font-medium">Feed</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 rounded bg-muted" />
                  <span className="text-[8px] text-muted-foreground">Badges</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-full" />
      </div>
    </div>
  );
}

interface FeedItemProps {
  type: "win" | "session" | "achievement";
  title: string;
  subtitle: string;
  time: string;
}

function FeedItem({ type, title, subtitle, time }: FeedItemProps) {
  const bgColor = type === "win"
    ? "bg-primary/10 border-primary/20"
    : type === "achievement"
    ? "bg-accent/10 border-accent/20"
    : "bg-secondary border-border";

  const iconColor = type === "win"
    ? "bg-primary"
    : type === "achievement"
    ? "bg-accent"
    : "bg-muted";

  return (
    <div className={`p-3 rounded-xl border ${bgColor}`}>
      <div className="flex items-start gap-2.5">
        <div className={`w-6 h-6 rounded-lg ${iconColor} flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          <p className="font-outfit font-medium text-[11px] truncate">{title}</p>
          <p className="text-[9px] text-muted-foreground truncate">{subtitle}</p>
        </div>
        <span className="text-[8px] text-muted-foreground flex-shrink-0">{time}</span>
      </div>
    </div>
  );
}
