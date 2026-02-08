import { FileText, ListOrdered, Code2, Terminal } from "lucide-react";
import CodeBlock from "./CodeBlock";
import type { Program } from "../data/programs";

interface ProgramSectionProps {
  program: Program;
}

const ProgramSection = ({ program }: ProgramSectionProps) => {
  return (
    <article
      id={program.id}
      className="program-card scroll-mt-header animate-fade-up"
    >
      {/* Program Header */}
      <div className="program-header">
        <div className="program-number-badge">{program.number}</div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {program.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            Program {program.number} of 12
          </p>
        </div>
      </div>

      {/* Program Body */}
      <div className="program-body">
        {/* Problem Statement */}
        <div>
          <div className="section-label">
            <FileText size={14} />
            <span>Problem Statement</span>
          </div>
          <div className="content-box">
            <p className="text-foreground leading-relaxed">
              {program.problemStatement}
            </p>
          </div>
        </div>

        {/* Algorithm */}
        <div>
          <div className="section-label">
            <ListOrdered size={14} />
            <span>Algorithm</span>
          </div>
          <div className="content-box">
            <div className="space-y-1">
              {program.algorithm.map((step, index) => (
                <div key={index} className="algorithm-step">
                  <span className="step-number">{index + 1}</span>
                  <span className="text-sm text-foreground/90">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Source Code */}
        <div>
          <div className="section-label">
            <Code2 size={14} />
            <span>Source Code</span>
          </div>
          <CodeBlock code={program.code} programNumber={program.number} />
        </div>

        {/* Sample Input/Output */}
        {program.sampleIO && (
          <div>
            <div className="section-label">
              <Terminal size={14} />
              <span>Sample Output</span>
            </div>
            <div className="sample-io">
              <div className="grid md:grid-cols-2 gap-4">
                {program.sampleIO.input && (
                  <div>
                    <p className="io-label">Input</p>
                    <pre className="io-content whitespace-pre-wrap">
                      {program.sampleIO.input}
                    </pre>
                  </div>
                )}
                <div>
                  <p className="io-label">Output</p>
                  <pre className="io-content whitespace-pre-wrap">
                    {program.sampleIO.output}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProgramSection;