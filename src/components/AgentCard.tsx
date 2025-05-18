
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface AgentCardProps {
  name: string;
  description: string;
  creator: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  featured?: boolean;
}

const AgentCard = ({
  name,
  description,
  creator,
  price,
  image,
  category,
  rating,
  featured = false
}: AgentCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'premium-card border-gold ring-1 ring-gold/20' : 'border-border'}`}>
      <div className="aspect-video w-full relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-gold text-charcoal-dark font-medium">Featured</Badge>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <Badge className="bg-sapphire text-white font-medium">{category}</Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-heading font-semibold text-lg">{name}</h3>
          <div className="flex items-center">
            <span className="text-gold-dark mr-1">★</span>
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-charcoal/70">By {creator}</p>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-sm text-charcoal-light line-clamp-2">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 flex justify-between items-center">
        <span className="font-semibold text-emerald">${price.toFixed(2)}</span>
        <button className="text-sm font-medium text-sapphire hover:text-sapphire-light transition-colors">
          View Details
        </button>
      </CardFooter>
    </Card>
  );
};

export default AgentCard;
