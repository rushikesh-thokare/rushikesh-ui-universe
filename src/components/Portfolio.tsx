import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      year: "2024",
      category: "Frontend",
      image: "/lovable-uploads/38d013cc-9b1c-48a9-82ac-bdcf5ddeb92b.png",
      features: ["Responsive Design", "Dark Mode", "Smooth Animations", "SEO Optimized"],
      liveDemo: "https://rushikesh-portfolio.vercel.app",
      sourceCode: "https://github.com/rushikesh-thokare/portfolio"
    },
    {
      title: "E-Commerce UI Design",
      description: "Complete e-commerce website design created in Figma. Includes user journey mapping, wireframes, and high-fidelity prototypes with modern UI patterns.",
      tech: ["Figma", "Adobe Photoshop", "UI/UX Design", "Prototyping"],
      year: "2024",
      category: "UI Design",
      image: "/lovable-uploads/d05297ad-f47b-41f1-a174-3e592337a989.png",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      liveDemo: "https://figma.com/proto/ecommerce-design",
      sourceCode: null
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Built with modern web technologies and features intuitive drag-and-drop functionality.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      year: "2024",
      category: "Full Stack",
      image: "/lovable-uploads/e5fd332c-cb2b-4fbf-b2e2-5bc70433c1fd.png",
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Progress Tracking"],
      liveDemo: "https://taskmanager-demo.vercel.app",
      sourceCode: "https://github.com/rushikesh-thokare/task-manager"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest work in UI/UX design and frontend development. 
            Each project demonstrates different skills and technologies I've mastered.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveDemo && (
                    <Button 
                      size="sm" 
                      className="bg-primary/90 hover:bg-primary text-white"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  )}
                  {project.sourceCode && (
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-secondary/90 hover:bg-secondary"
                      onClick={() => window.open(project.sourceCode, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.liveDemo && (
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.sourceCode && (
                    <Button 
                      variant="outline"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.sourceCode, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            More exciting projects are coming soon! 🚀
          </p>
          <Button 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
            onClick={() => window.open('https://github.com/rushikesh-thokare', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;