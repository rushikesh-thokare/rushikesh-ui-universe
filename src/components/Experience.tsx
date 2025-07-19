const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-neon"></div>
          
          <div className="space-y-12">
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full shadow-neon"></div>
              
              <div className="ml-20">
                <div className="glass-card p-8 rounded-2xl hover-glow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Aspiring UI/UX Designer & Frontend Developer
                      </h3>
                      <p className="text-primary font-semibold">Dr. D.Y. Patil ACS College</p>
                    </div>
                    <div className="text-muted-foreground font-medium mt-2 md:mt-0">
                      2023 - Present
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Self-directed learning journey focusing on modern web development and UI/UX design. 
                    Developing proficiency in frontend technologies while pursuing my BCA degree.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Learning Areas:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>HTML5 & CSS3 fundamentals</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>JavaScript & React.js development</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Responsive design with Tailwind CSS</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>UI/UX design principles in Figma</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Backend development with Node.js</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Database management with MongoDB</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Version control with Git & GitHub</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span>Deployment with Vercel platform</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="relative">
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full shadow-neon"></div>
              
              <div className="ml-20">
                <div className="glass-card p-8 rounded-2xl hover-glow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        Bachelor of Computer Applications (BCA)
                      </h3>
                      <p className="text-primary font-semibold">
                        Dr. D.Y. Patil ACS College, Savitribai Phule Pune University
                      </p>
                    </div>
                    <div className="text-muted-foreground font-medium mt-2 md:mt-0">
                      2023 - 2026
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing comprehensive computer science education with focus on 
                    practical applications, software development, and emerging technologies. 
                    Maintaining strong academic performance while building industry-relevant skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;