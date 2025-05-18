
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgentCard from '../components/AgentCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample data for AI agents
const featuredAgents = [
  {
    id: 1,
    name: "SmartTasker",
    description: "Automates daily task management with natural language commands.",
    creator: "TaskMaster Inc",
    price: 49,
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=1770",
    category: "Productivity",
    rating: 4.8,
    featured: true,
    subscription: true
  },
  {
    id: 2,
    name: "DataSage",
    description: "Provides real-time data analysis and visualization with zero coding.",
    creator: "DataViz Solutions",
    price: 99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    category: "Data Analysis",
    rating: 4.9,
    featured: true,
    subscription: false
  },
  {
    id: 3,
    name: "ContentGenius",
    description: "Creates engaging blog posts, social media content, and email campaigns.",
    creator: "WriteCraft",
    price: 79,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2070",
    category: "Marketing",
    rating: 4.7,
    featured: false,
    subscription: false
  },
  {
    id: 4,
    name: "CustomerChat AI",
    description: "Intelligent chatbot that handles customer inquiries 24/7 with human-like responses.",
    creator: "SupportPro",
    price: 59,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2069",
    category: "Customer Service",
    rating: 4.6,
    featured: false,
    subscription: true
  },
  {
    id: 5,
    name: "DesignAssist",
    description: "Creates beautiful UI designs from simple text descriptions and references.",
    creator: "VisualCraft",
    price: 129,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1664",
    category: "Creative",
    rating: 4.8,
    featured: true,
    subscription: false
  },
  {
    id: 6,
    name: "CodeMate",
    description: "Assists with code generation, debugging, and optimization across multiple languages.",
    creator: "DevTools Inc",
    price: 149,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=2006",
    category: "Development",
    rating: 4.9,
    featured: false,
    subscription: false
  },
];

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-cream py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
                AI Agent Marketplace
              </h1>
              <p className="text-lg md:text-xl text-charcoal/80 mb-8">
                Browse and purchase powerful AI agents created by experts in our community.
                Each agent is ready to transform how you work and create.
              </p>
              <Link to="/list-agent">
                <Button className="bg-emerald text-cream hover:bg-emerald-dark px-8 py-6 text-lg">
                  List Your AI Agent Here
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Agents Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured AI Agents</h2>
              <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
                Discover top-performing AI agents ready to enhance your productivity
              </p>
            </div>
            
            {/* Agent cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  name={agent.name}
                  description={agent.description}
                  creator={agent.creator}
                  price={agent.price}
                  image={agent.image}
                  category={agent.category}
                  rating={agent.rating}
                  featured={agent.featured}
                  subscription={agent.subscription}
                />
              ))}
            </div>
            
            {/* List Your Agent CTA */}
            <div className="text-center mt-16">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald to-sapphire rounded-xl overflow-hidden shadow-xl">
                <div className="p-8 md:p-12 text-cream">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Share Your AI Agent?</h2>
                  <p className="text-cream/90 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of creators who are selling their AI agents on our marketplace. List yours today!
                  </p>
                  <Link to="/list-agent">
                    <Button className="bg-gold text-charcoal-dark hover:bg-gold-light font-medium px-8 py-6 text-lg">
                      List Your AI Agent
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

export default Marketplace;
