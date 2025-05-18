
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Login successful!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-cream flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-heading font-bold mb-8 gradient-text text-center">
              Log In to AgentMesh
            </h1>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gold/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="youremail@example.com" 
                            className="border-gold/20 focus:border-emerald" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal font-medium">Password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="border-gold/20 focus:border-emerald" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald text-cream hover:bg-emerald-dark"
                    >
                      Log In
                    </Button>
                  </div>
                </form>
              </Form>
              
              <div className="text-center mt-6">
                <p className="text-charcoal-light">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-emerald hover:text-emerald-dark font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
