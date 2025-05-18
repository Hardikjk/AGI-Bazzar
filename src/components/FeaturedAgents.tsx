
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import AgentCard from './AgentCard';

const categoryFilters = [
  "All", 
  "Productivity", 
  "Data Analysis", 
  "Customer Service", 
  "Marketing",
  "Creative"
];

const agents = [
  {
    id: 1,
    name: "DataMiner Pro",
    description: "Intelligent data processing and visualization agent that transforms complex datasets into actionable insights.",
    creator: "AnalyticsMaster",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    category: "Data Analysis",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "CustomerChat Assistant",
    description: "24/7 customer support agent that handles inquiries, resolves issues, and escalates complex problems.",
    creator: "SupportSolutions",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2069",
    category: "Customer Service",
    rating: 4.6,
    featured: false
  },
  {
    id: 3,
    name: "ContentCraft AI",
    description: "Creative content generation agent for blogs, social media, and marketing materials with brand voice customization.",
    creator: "CreativeMinds",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2070",
    category: "Marketing",
    rating: 4.7,
    featured: false
  },
  {
    id: 4,
    name: "TaskMaster",
    description: "Productivity agent that manages schedules, prioritizes tasks, and sends reminders to optimize your workflow.",
    creator: "EfficiencyPro",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=1770",
    category: "Productivity",
    rating: 4.5,
    featured: true
  },
  {
    id: 5,
    name: "DesignGenius",
    description: "AI design assistant that generates UI mockups, logo variations, and visual assets based on your specifications.",
    creator: "VisualWizard",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=1664",
    category: "Creative",
    rating: 4.9,
    featured: false
  },
  {
    id: 6,
    name: "MarketSense AI",
    description: "Market analysis agent that tracks trends, monitors competitors, and delivers strategic insights for your business.",
    creator: "StrategyMasters",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=2006",
    category: "Data Analysis",
    rating: 4.7,
    featured: false
  },
];

const FeaturedAgents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredAgents = activeCategory === "All" 
    ? agents 
    : agents.filter(agent => agent.category === activeCategory);

  return (
    <section id="marketplace" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured AI Agents</h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Discover top-performing AI agents created by our talented community of developers
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-emerald text-cream hover:bg-emerald-dark" 
                : "border-emerald text-emerald hover:bg-emerald/10"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Agent cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent) => (
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
            />
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-sapphire text-sapphire hover:bg-sapphire/10 px-8">
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;
