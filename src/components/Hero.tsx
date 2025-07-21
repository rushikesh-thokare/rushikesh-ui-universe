import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
const profilePhoto = "/lovable-uploads/5d88b226-fb87-4446-b5f9-31bab64af847.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-black/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            <div className="relative animate-float profile-container flex items-center justify-center">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 w-96 h-96 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-spin-slow opacity-60"></div>
                <div className="absolute inset-2 rounded-full bg-background"></div>
              </div>
              
              {/* Pulsing middle ring */}
              <div className="absolute inset-0 w-96 h-96 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border-2 border-purple-500/40 animate-pulse-glow"></div>
              </div>
              
              {/* Main profile image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 hover:scale-105 transition-all duration-500 hover:rotate-3 z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-pink-500/20 z-10"></div>
                <img 
                  src={profilePhoto} 
                  alt="Rushikesh Thokare" 
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 w-96 h-96 rounded-full flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full animate-orbit opacity-80"></div>
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-1 h-1 bg-pink-400 rounded-full animate-orbit-reverse opacity-60" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute -bottom-8 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-orbit opacity-70" style={{ animationDelay: '4s' }}></div>
                </div>
              </div>
              
              {/* Soft glow effect */}
              <div className="absolute inset-0 w-96 h-96 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-radial from-purple-500/10 via-transparent to-transparent animate-pulse-soft"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;