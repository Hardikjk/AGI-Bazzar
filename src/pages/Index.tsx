
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedAgents from '../components/FeaturedAgents';
import CreatorProfile from '../components/CreatorProfile';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedAgents />
        <CreatorProfile />

        {/* Call to Action Section */}
        <section id="pricing" className="bg-white section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald to-sapphire rounded-xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12 text-cream">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Transform Your Ideas into AI Agents?</h2>
                <p className="text-cream/90 text-lg mb-8 max-w-2xl">
                  Join thousands of creators who are building the future of AI automation. No coding required, just your creativity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/marketplace">
                    <Button className="px-6 py-3 bg-gold text-charcoal-dark font-medium rounded-lg hover:bg-gold-light transition-colors">
                      Explore Marketplace
                    </Button>
                  </Link>
                  <Link to="/list-agent">
                    <Button className="px-6 py-3 bg-transparent border border-cream/30 text-cream font-medium rounded-lg hover:bg-white/10 transition-colors">
                      List Your Agent
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
