import { useState, useEffect } from "react";
import { Search, Hash } from "lucide-react";
import type { Program } from "../data/programs";

interface SidebarProps {
  programs: Program[];
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ programs, isOpen, onClose }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState<string>("");

  const filteredPrograms = programs.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLinkClick = (id: string) => {
    setActiveId(id);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = programs.map((p) => document.getElementById(p.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveId(programs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [programs]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay animate-fade-in"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`modern-sidebar transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Search */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
        </div>

        {/* Programs Index Header */}
        <div className="px-4 py-3 flex items-center gap-2">
          <Hash size={14} className="text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Programs Index
          </span>
        </div>

        {/* Program Links */}
        <nav className="overflow-y-auto flex-1 pb-20" style={{ maxHeight: "calc(100vh - 220px)" }}>
          {filteredPrograms.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className={`sidebar-link ${activeId === program.id ? "active" : ""}`}
              onClick={() => handleLinkClick(program.id)}
            >
              <span className="sidebar-link-number">{program.number}</span>
              <span className="truncate">{program.title}</span>
            </a>
          ))}

          {filteredPrograms.length === 0 && (
            <p className="px-4 py-8 text-sm text-muted-foreground text-center">
              No programs found
            </p>
          )}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border bg-gradient-to-t from-sidebar to-transparent">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{programs.length} Programs</span>
            <span className="gradient-text font-medium">v1.0</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;