
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Star, Sparkles } from 'lucide-react';
import StudentRegistration from '../components/StudentRegistration';
import EventDetails from '../components/EventDetails';
import ContactInfo from '../components/ContactInfo';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-orange-400/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">FRESHER</span>
              <span className="text-orange-400">PARTY</span>
            </div>
            <div className="hidden md:flex space-x-8">
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
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-orange-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,140,0,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Star className="text-orange-400 opacity-60" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Sparkles className="text-orange-300 opacity-60" size={32} />
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <Star className="text-orange-500 opacity-40" size={20} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">WELCOME TO</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                YOUR FUTURE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for an unforgettable fresher party experience! Connect with fellow students, 
              make lasting friendships, and kickstart your college journey with style.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              REGISTER NOW 🚀
            </Button>
            <Button 
              onClick={() => scrollToSection('event-details')}
              variant="outline" 
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
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
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Event Details Section */}
      <EventDetails />

      {/* Registration Section */}
      <StudentRegistration />

      {/* Contact Section */}
      <ContactInfo />

      {/* Footer */}
      <footer className="bg-black border-t border-orange-400/20 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">FRESHER</span>
            <span className="text-orange-400">PARTY</span>
          </div>
          <p className="text-gray-400 mb-6">
            Making your college journey memorable from day one.
          </p>
          <div className="text-sm text-gray-500">
            © 2024 College Fresher Party. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
