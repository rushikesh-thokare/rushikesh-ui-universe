import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 particles-container">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 futuristic-heading ${isVisible ? 'animate-in' : ''}`}>
            <span className="gradient-text-animated">About Me</span>
          </h2>
          <div className={`w-20 h-1 mx-auto rounded pulsing-underline ${isVisible ? 'animate-in' : ''}`}></div>
        </div>

        {/* Timeline Layout */}
        <div className="flex items-start gap-8">
          {/* Timeline Line */}
          <div className="hidden lg:flex flex-col items-center mt-8">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>
            <div className="timeline-dot"></div>
          </div>

          {/* Main Content Card */}
          <div className={`flex-1 timeline-card ${isVisible ? 'fade-slide-in' : ''}`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Aspiring UI/UX Designer & Frontend Developer
                </h3>
                <p className="text-primary font-semibold">Dr. D.Y. Patil ACS College</p>
              </div>
              <div className="text-muted-foreground text-sm">
                2023 - Present
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <span className="text-primary font-semibold glow-text">Rushikesh Thokare</span>, 
                currently pursuing a <span className="text-primary font-semibold glow-text">Bachelor of Computer Applications (BCA)</span> 
                at Dr. D.Y. Patil ACS College under Savitribai Phule Pune University. Based in 
                <span className="text-primary font-semibold glow-text"> Pune, Maharashtra</span>, 
                I am passionate about bridging the gap between design and development through modern web technologies.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Areas of Focus:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Modern Web Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">UI/UX Design Principles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Responsive Design Patterns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Frontend Frameworks & Libraries</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Design Tools & Prototyping</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">User Experience Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Creative Problem Solving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Emerging Tech Exploration</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Expected to graduate in <span className="text-primary font-semibold glow-text">2026</span>, 
                I believe that great user experiences come from the perfect harmony of intuitive design 
                and clean, efficient code. My journey in technology began with curiosity about how 
                beautiful websites are crafted, leading me to explore both creative and technical 
                aspects of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;