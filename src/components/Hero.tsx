import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Hi, I am</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Rushikesh Thokare
              </h1>
              <p className="text-xl sm:text-2xl">
                I am a <span className="gradient-text font-semibold">BCA Student</span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              I am studying at Dr. D.Y. Patil ACS College under Savitribai Phule Pune University, 
              living in Pune, Maharashtra. Aspiring UI/UX designer and frontend developer with a 
              passion for creating visually appealing and responsive digital solutions.
            </p>

            <Button 
              className="neon-glow hover-glow bg-gradient-neon text-white border-0 px-8 py-3 text-lg font-semibold"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full neon-glow overflow-hidden border-4 border-primary/30">
                <img 
                  src={profilePhoto} 
                  alt="Rushikesh Thokare" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-primary/10 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;