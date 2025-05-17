
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Get In Touch
              </span>
            </h1>
            <p className="text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have questions about our AI startup generator? Want to learn more about how we can help you launch your next venture? Reach out to our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="glass-panel">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Type your message here..." 
                      className="bg-background/50 min-h-[150px]"
                    />
                  </div>
                  
                  <Button className="w-full btn-gradient">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-purple-400">info@aistartupgenerator.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">
                    123 AI Innovation Center<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM (PT)<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-purple-400">How does the AI idea generator work?</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Our AI analyzes market trends, funding data, and technological innovations to generate viable startup concepts.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-purple-400">Can I use the generated ideas for my business?</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Yes, all generated ideas are available for you to develop into actual businesses.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-purple-400">Do you offer consulting services?</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      Yes, we provide consulting services to help you develop and implement the generated ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
