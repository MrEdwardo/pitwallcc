import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Badge variant="outline" className="mb-6 font-mono text-xs border-primary/30 text-primary">
          Coming Soon
        </Badge>

        <h2 className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Ready to elevate your team?
        </h2>

        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Pitwall is currently in development. Sign up to be notified when we
          launch on the App Store.
        </p>

        <Button
          size="lg"
          variant="outline"
          className="font-outfit font-medium gap-2"
          asChild
        >
          <a href="https://ed93.typeform.com/to/gtj3AjLe" target="_blank" rel="noopener noreferrer">
            <Bell className="w-4 h-4" />
            Join Waitlist
          </a>
        </Button>

        <p className="mt-4 text-sm text-muted-foreground">
          No spam, just a single email when we launch.
        </p>
      </div>
    </section>
  );
}
