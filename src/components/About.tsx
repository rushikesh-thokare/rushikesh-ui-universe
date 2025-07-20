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

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 futuristic-heading ${isVisible ? 'animate-in' : ''}`}>
            <span className="gradient-text-animated">About Me</span>
          </h2>
          <div className={`w-20 h-1 mx-auto rounded pulsing-underline ${isVisible ? 'animate-in' : ''}`}></div>
        </div>

        <div className={`futuristic-glass-card p-8 rounded-2xl parallax-content ${isVisible ? 'fade-slide-in' : ''}`}>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p className={`text-reveal ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              I'm <span className="text-primary font-semibold glow-text">Rushikesh Thokare</span>, 
              an aspiring UI/UX designer and frontend developer currently pursuing a 
              <span className="text-primary font-semibold glow-text"> Bachelor of Computer Applications (BCA)</span> 
              at Dr. D.Y. Patil ACS College under Savitribai Phule Pune University.
            </p>
            
            <p className={`text-reveal ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              Based in <span className="text-primary font-semibold glow-text">Pune, Maharashtra</span>, 
              I am actively honing my skills in modern web technologies and design tools, 
              with a focus on creating visually appealing and responsive digital solutions. 
              My journey in technology began with a curiosity about how beautiful websites 
              are crafted, which led me to explore both the creative and technical aspects 
              of web development.
            </p>
            
            <p className={`text-reveal ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
              Expected to graduate in <span className="text-primary font-semibold glow-text">2026</span>, 
              I am passionate about bridging the gap between design and development. 
              I believe that great user experiences come from the perfect harmony of 
              intuitive design and clean, efficient code.
            </p>
            
            <p className={`text-reveal ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
              When I'm not coding or designing, I enjoy exploring new design trends, 
              learning about emerging technologies, and working on personal projects 
              that challenge my creativity and technical skills.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`futuristic-stat-card group ${isVisible ? 'counter-animate' : ''}`} style={{ animationDelay: '1.0s' }}>
              <div className="stat-card-inner">
                <h3 className="text-4xl font-bold gradient-text-pulse mb-2 counter-text">2026</h3>
                <p className="text-muted-foreground">Expected Graduation</p>
              </div>
            </div>
            <div className={`futuristic-stat-card group ${isVisible ? 'counter-animate' : ''}`} style={{ animationDelay: '1.2s' }}>
              <div className="stat-card-inner">
                <h3 className="text-4xl font-bold gradient-text-pulse mb-2 counter-text">BCA</h3>
                <p className="text-muted-foreground">Current Degree</p>
              </div>
            </div>
            <div className={`futuristic-stat-card group ${isVisible ? 'counter-animate' : ''}`} style={{ animationDelay: '1.4s' }}>
              <div className="stat-card-inner">
                <h3 className="text-4xl font-bold gradient-text-pulse mb-2 counter-text">Pune</h3>
                <p className="text-muted-foreground">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;