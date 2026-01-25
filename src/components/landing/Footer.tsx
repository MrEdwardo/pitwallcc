export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-outfit font-bold text-primary-foreground text-xs">P</span>
            </div>
            <span className="font-outfit font-medium text-sm">Pitwall</span>
          </div>

          <p className="text-sm text-muted-foreground">
            Built for iRacing endurance teams
          </p>
        </div>
      </div>
    </footer>
  );
}
