const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto rounded"></div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm <span className="text-primary font-semibold">Rushikesh Thokare</span>, 
              an aspiring UI/UX designer and frontend developer currently pursuing a 
              <span className="text-primary font-semibold"> Bachelor of Computer Applications (BCA)</span> 
              at Dr. D.Y. Patil ACS College under Savitribai Phule Pune University.
            </p>
            
            <p>
              Based in <span className="text-primary font-semibold">Pune, Maharashtra</span>, 
              I am actively honing my skills in modern web technologies and design tools, 
              with a focus on creating visually appealing and responsive digital solutions. 
              My journey in technology began with a curiosity about how beautiful websites 
              are crafted, which led me to explore both the creative and technical aspects 
              of web development.
            </p>
            
            <p>
              Expected to graduate in <span className="text-primary font-semibold">2026</span>, 
              I am passionate about bridging the gap between design and development. 
              I believe that great user experiences come from the perfect harmony of 
              intuitive design and clean, efficient code.
            </p>
            
            <p>
              When I'm not coding or designing, I enjoy exploring new design trends, 
              learning about emerging technologies, and working on personal projects 
              that challenge my creativity and technical skills.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">2026</h3>
              <p className="text-sm text-muted-foreground">Expected Graduation</p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <h3 className="text-2xl font-bold text-primary">BCA</h3>
              <p className="text-sm text-muted-foreground">Current Degree</p>
            </div>
            <div className="glass-card p-4 rounded-lg col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-primary">Pune</h3>
              <p className="text-sm text-muted-foreground">Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;