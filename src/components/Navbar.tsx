
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-emerald">AgentMesh</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="flex space-x-8" />
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-cream">
                Log In
              </Button>
              <Button className="bg-emerald text-cream hover:bg-emerald-dark">
                Sign Up
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" className="p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-cream border-b border-gold/10 transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 py-4">
          <NavLinks className="flex flex-col space-y-4" />
          <div className="flex flex-col space-y-4 mt-6">
            <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-cream w-full">
              Log In
            </Button>
            <Button className="bg-emerald text-cream hover:bg-emerald-dark w-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <ul className={className}>
      <li>
        <a 
          href="#discover" 
          className="text-charcoal hover:text-emerald transition-colors font-medium"
        >
          Discover
        </a>
      </li>
      <li>
        <a 
          href="#marketplace" 
          className="text-charcoal hover:text-emerald transition-colors font-medium"
        >
          Marketplace
        </a>
      </li>
      <li>
        <a 
          href="#creators" 
          className="text-charcoal hover:text-emerald transition-colors font-medium"
        >
          Creators
        </a>
      </li>
      <li>
        <a 
          href="#pricing" 
          className="text-charcoal hover:text-emerald transition-colors font-medium"
        >
          Pricing
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
