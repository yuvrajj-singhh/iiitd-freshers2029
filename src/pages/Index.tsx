import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Sparkles, Instagram } from 'lucide-react';
import StudentRegistration from '../components/StudentRegistration';
import EventDetails from '../components/EventDetails';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-orange-400/20">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="h-8">
              <img 
                src="/lovable-uploads/1737fac9-7d05-4a11-b7e1-88192b752f64.png" 
                alt="FRESHERS'25" 
                className="h-full w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8 font-teachers">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('event-details')}
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Event Details
              </button>
              <button 
                onClick={() => scrollToSection('register')}
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Space Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/43e56455-4728-4f1e-b10f-fc61ad1caf55.png')`
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse z-10">
          <Star className="text-orange-400 opacity-60" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000 z-10">
          <Sparkles className="text-orange-300 opacity-60" size={32} />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000 z-10">
          <Star className="text-orange-500 opacity-40" size={20} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            {/* FRESHERS'25 Image Heading */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/1737fac9-7d05-4a11-b7e1-88192b752f64.png" 
                alt="FRESHERS'25" 
                className="mx-auto max-w-4xl w-full h-auto"
              />
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://www.instagram.com/freshers_iiitd2029/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl font-teachers"
              >
                <Instagram size={20} />
                Follow for Updates
              </a>
              <a 
                href="https://chat.whatsapp.com/DcFkMBTlN4WClSpKv75R1g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl font-teachers"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Join Batch Group
              </a>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-teachers">
              Join us for an unforgettable fresher party experience! Connect with fellow students, 
              make lasting friendships, and kickstart your college journey with style.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl font-teachers"
            >
              REGISTER NOW 🚀
            </Button>
            <Button 
              onClick={() => scrollToSection('event-details')}
              variant="outline" 
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 font-teachers"
            >
              LEARN MORE
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown 
              className="text-orange-400 mx-auto cursor-pointer" 
              size={32}
              onClick={() => scrollToSection('event-details')}
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
      </section>

      {/* Event Details Section */}
      <EventDetails />

      {/* Registration Section */}
      <StudentRegistration />

      {/* Footer */}
      <footer className="bg-black border-t border-orange-400/20 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="h-8 mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/1737fac9-7d05-4a11-b7e1-88192b752f64.png" 
              alt="FRESHERS'25" 
              className="h-full w-auto"
            />
          </div>
          <p className="text-gray-400 mb-6 font-teachers">
            Making your college journey memorable from day one.
          </p>
          <div className="text-sm text-gray-500 font-teachers">
            © 2024 College Fresher Party. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
