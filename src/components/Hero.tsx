
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Gradient background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald/10 blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-sapphire/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
            Create, Showcase & Monetize Your AI Agents
          </h1>
          
          <p className="text-lg md:text-xl text-charcoal/90 mb-8 max-w-2xl mx-auto">
            The premier marketplace for no-code AI agents. Build powerful automated solutions, share them with the world, and profit from your innovations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button className="bg-emerald hover:bg-emerald-dark text-cream px-6 py-6 text-lg">
              Start Creating
            </Button>
            <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald/10 px-6 py-6 text-lg">
              Explore Marketplace
            </Button>
          </div>

          <div className="flex items-center justify-center mb-8 space-x-6 text-charcoal/70">
            <div className="flex items-center">
              <span className="font-bold text-emerald mr-2">1200+</span> AI Agents
            </div>
            <div className="h-4 border-l border-charcoal/20"></div>
            <div className="flex items-center">
              <span className="font-bold text-emerald mr-2">850+</span> Creators
            </div>
            <div className="h-4 border-l border-charcoal/20"></div>
            <div className="flex items-center">
              <span className="font-bold text-emerald mr-2">15k+</span> Users
            </div>
          </div>
          
          <div className="relative h-16 overflow-hidden">
            <div className="flex animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <LogoBanner />
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 120" 
          xmlns="http://www.w3.org/2000/svg" 
          className="fill-white w-full h-12"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,139.94,111.63,213.34,84.73,271.49,63.87,251.3,57,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

const LogoBanner = () => {
  return (
    <div className="flex justify-around w-full opacity-60">
      <div className="px-6">
        <p className="font-heading font-bold text-lg text-charcoal">TechCorp</p>
      </div>
      <div className="px-6">
        <p className="font-heading font-bold text-lg text-charcoal">FutureLabs</p>
      </div>
      <div className="px-6">
        <p className="font-heading font-bold text-lg text-charcoal">AIVentures</p>
      </div>
      <div className="px-6">
        <p className="font-heading font-bold text-lg text-charcoal">NexusAI</p>
      </div>
      <div className="px-6">
        <p className="font-heading font-bold text-lg text-charcoal">InnovateX</p>
      </div>
    </div>
  );
};

export default Hero;
