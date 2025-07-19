const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React.js", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Material UI", icon: "📱" },
        { name: "GSAP", icon: "🎭" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Express.js", icon: "🚀" },
        { name: "REST APIs", icon: "🔗" }
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", icon: "🎨" },
        { name: "UI/UX Design", icon: "✨" },
        { name: "Prototyping", icon: "🔧" },
        { name: "Auto-layout", icon: "📐" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Vercel", icon: "▲" },
        { name: "Git", icon: "🔀" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover-glow">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-neon"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-muted-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;