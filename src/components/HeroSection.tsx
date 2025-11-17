import { ArrowDown, Scale } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  lawyerName: string;
  lawyerTitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection, lawyerName, lawyerTitle }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5a6b7d 0%, #7a8a9d 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="inline-block mb-6 animate-float">
          <Scale className="w-20 h-20 text-amber-400" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          {lawyerName}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          {lawyerTitle}
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          צור קשר עכשיו
        </button>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group hover:scale-110 transition-transform duration-300"
      >
        {/* <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 group-hover:border-amber-300 transition-colors duration-300">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll group-hover:bg-amber-300 transition-colors duration-
          300"></div>
        </div> */}

              <ArrowDown className="animate-scroll  w-8 h-8 text-white group-hover:text-amber-300 transition-colors duration-300" />
      </button>
    </section>
  );
};

export default HeroSection;