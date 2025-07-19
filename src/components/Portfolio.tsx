import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "UI/UX Portfolio Design",
      description: "Modern portfolio design showcasing clean visual hierarchy and professional layout. Created using Figma's advanced features including auto-layout, components, and interactive prototyping.",
      tech: ["Figma", "UI/UX Design", "Prototyping", "Auto-layout"],
      year: "2025",
      category: "Design",
      image: "🎨",
      features: [
        "Clean visual hierarchy",
        "Responsive design components", 
        "Interactive prototyping",
        "Modern layout system"
      ]
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies. Features dark theme with neon accents, smooth animations, and glassmorphism effects.",
      tech: ["React.js", "Tailwind CSS", "TypeScript", "Vercel"],
      year: "2025",
      category: "Development",
      image: "💻",
      features: [
        "Responsive design",
        "Dark theme with neon accents",
        "Smooth scroll animations",
        "Glassmorphism effects"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating my skills in design and development
          </p>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover-glow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-primary font-semibold">{project.category}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="hover-glow">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="hover-glow">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More projects coming soon as I continue my learning journey!
          </p>
          <Button className="neon-glow bg-gradient-neon">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;