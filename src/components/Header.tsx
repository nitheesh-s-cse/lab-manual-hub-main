import { Menu, X, BookOpen, Sparkles } from "lucide-react";

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header = ({ isSidebarOpen, onToggleSidebar }: HeaderProps) => {
  return (
    <header className="modern-header flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onToggleSidebar}
          className="menu-btn"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
            <BookOpen size={20} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              <span className="gradient-text">Lab Manual</span>
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              C Programming Laboratory
            </p>
          </div>
        </div>
      </div>

      {/* Right side info */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border">
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-medium">2024-25</span>
        </div>
        
        <div className="hidden lg:block text-right">
          <p className="text-xs font-medium">Semester I</p>
          <p className="text-xs text-muted-foreground">Practical Record</p>
        </div>
      </div>
    </header>
  );
};

export default Header;