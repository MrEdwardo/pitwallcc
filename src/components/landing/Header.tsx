import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-outfit font-bold text-primary-foreground text-sm">P</span>
          </div>
          <span className="font-outfit font-semibold text-lg tracking-tight">Pitwall</span>
        </div>
        <Badge variant="secondary" className="font-mono text-xs">
          Coming Soon
        </Badge>
      </div>
    </header>
  );
}
