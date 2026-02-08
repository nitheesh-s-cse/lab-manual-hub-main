import { useState } from "react";
import { BookOpen, Code2, Cpu, Zap } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProgramSection from "../components/ProgramSection";
import { programs } from "../data/programs";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />

      {/* Sidebar Navigation */}
      <Sidebar
        programs={programs}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main Content Area */}
      <main className="modern-content">
        {/* Hero Section */}
        <section className="relative px-4 md:px-8 py-16 md:py-24 overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
          
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-up">
              <Zap size={14} className="text-primary" />
              <span className="text-sm font-medium">Academic Year 2024-25</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up stagger-1">
              C Programming
              <span className="block gradient-text">Laboratory Manual</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up stagger-2">
              A comprehensive collection of {programs.length} practical programs 
              with algorithms, source code, and sample outputs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up stagger-3">
              <div className="glass-card rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">{programs.length}</p>
                <p className="text-xs text-muted-foreground">Programs</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <Code2 size={20} className="text-accent" />
                </div>
                <p className="text-2xl font-bold">C</p>
                <p className="text-xs text-muted-foreground">Language</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Cpu size={20} className="text-primary" />
                </div>
                <p className="text-2xl font-bold">I</p>
                <p className="text-xs text-muted-foreground">Semester</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="px-4 md:px-8 py-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Navigation
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {programs.slice(0, 6).map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-3 py-1.5 text-sm rounded-lg bg-secondary border border-border hover:border-primary hover:text-primary transition-all"
              >
                {program.number}. {program.title}
              </a>
            ))}
            {programs.length > 6 && (
              <span className="px-3 py-1.5 text-sm text-muted-foreground">
                +{programs.length - 6} more
              </span>
            )}
          </div>
        </section>

        {/* Program Sections */}
        <section className="py-8">
          {programs.map((program, index) => (
            <div key={program.id} style={{ animationDelay: `${index * 0.05}s` }}>
              <ProgramSection program={program} />
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="px-4 md:px-8 py-12 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <BookOpen size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Lab Manual</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              C Programming Laboratory • {programs.length} Practical Programs
            </p>
            <p className="text-xs text-muted-foreground">
              Click on any program in the sidebar for quick navigation. 
              Use the copy button to copy source code directly.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;