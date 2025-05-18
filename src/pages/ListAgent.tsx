
import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const ListAgent = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      pricingModel: "onetime",
      agentFile: null,
      logo: null
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Your AI agent has been submitted for review!");
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-cream">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 gradient-text text-center">
                List Your AI Agent
              </h1>
              
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gold/10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal font-medium">AI Agent Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. SmartTasker" 
                              className="border-gold/20 focus:border-emerald" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Choose a short, memorable name for your AI agent.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal font-medium">Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe what your AI agent does and its benefits..." 
                              className="min-h-32 border-gold/20 focus:border-emerald"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Explain the functionality and benefits in 100-300 words.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal font-medium">Price ($)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="99.99" 
                                min="0" 
                                step="0.01" 
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
                        name="pricingModel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal font-medium">Pricing Model</FormLabel>
                            <FormControl>
                              <RadioGroup 
                                defaultValue="onetime" 
                                className="flex gap-6" 
                                onValueChange={field.onChange} 
                                value={field.value}
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="onetime" id="onetime" />
                                  <Label htmlFor="onetime">One-time purchase</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="subscription" id="subscription" />
                                  <Label htmlFor="subscription">Monthly subscription</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="agentFile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal font-medium">AI Agent File (.json)</FormLabel>
                          <FormControl>
                            <Input 
                              type="file" 
                              accept=".json" 
                              className="border-gold/20 focus:border-emerald" 
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                field.onChange(file);
                              }} 
                            />
                          </FormControl>
                          <FormDescription>
                            Upload your AI agent's workflow file (JSON format only).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="logo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal font-medium">Agent Logo</FormLabel>
                          <FormControl>
                            <Input 
                              type="file" 
                              accept="image/*" 
                              className="border-gold/20 focus:border-emerald" 
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                field.onChange(file);
                              }} 
                            />
                          </FormControl>
                          <FormDescription>
                            Upload a square logo or icon for your AI agent (recommended size: 512×512px).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-emerald text-cream hover:bg-emerald-dark py-6"
                      >
                        Submit AI Agent for Review
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ListAgent;
