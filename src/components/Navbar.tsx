
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-emerald">AgentMesh</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-cream">
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-emerald text-cream hover:bg-emerald-dark">
              <Link to="/signup">Sign Up</Link>
            </Button>
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
          <div className="flex flex-col space-y-4 mt-6">
            <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-cream w-full">
              <Link to="/login" className="w-full">Log In</Link>
            </Button>
            <Button className="bg-emerald text-cream hover:bg-emerald-dark w-full">
              <Link to="/signup" className="w-full">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
