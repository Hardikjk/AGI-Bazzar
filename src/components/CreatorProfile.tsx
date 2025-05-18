
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const creators = [
  {
    id: 1,
    name: "Alex Morgan",
    specialty: "Data Analysis Agents",
    agents: 8,
    rating: 4.9,
    sales: 1200,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1887",
  },
  {
    id: 2,
    name: "Sophia Chen",
    specialty: "Productivity Tools",
    agents: 12,
    rating: 4.8,
    sales: 2500,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    specialty: "Creative AI Solutions",
    agents: 6,
    rating: 4.7,
    sales: 950,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1887",
  }
];

const CreatorProfile = () => {
  return (
    <section id="creators" className="bg-cream section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet Our Top Creators</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Behind every powerful AI agent is a brilliant creator pushing the boundaries of what's possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <Card key={creator.id} className="overflow-hidden bg-white border-gold/10 hover:border-gold/30 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Creator image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={creator.image} 
                      alt={creator.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/90 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-heading font-semibold text-white mb-1">{creator.name}</h3>
                    <p className="text-cream/90 mb-2">{creator.specialty}</p>
                    
                    <div className="flex justify-between items-center text-cream/80 text-sm mb-4">
                      <div className="flex flex-col">
                        <span className="text-gold font-semibold text-base">{creator.agents}</span>
                        <span>Agents</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gold font-semibold text-base">{creator.rating}</span>
                        <span>Rating</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gold font-semibold text-base">{creator.sales.toLocaleString()}</span>
                        <span>Sales</span>
                      </div>
                    </div>
                    
                    <Button className="bg-gold text-charcoal-dark hover:bg-gold-light w-full">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-emerald/5 border border-emerald/20 rounded-lg p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">Become a Creator</h3>
            <p className="text-charcoal/80 mb-6">
              Join our community of innovative developers and start monetizing your AI agents. No coding required, just your brilliant ideas.
            </p>
            <Button className="bg-emerald text-cream hover:bg-emerald-dark">
              Start Creating Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfile;
