import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, MessageSquare, Sparkles, Send } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 particle-background z-0"></div>
        <div className="blur-dot h-[600px] w-[600px] -top-20 -right-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8 glass-morphism px-5 py-2 rounded-full text-xs text-white/70">
              <Sparkles size={12} className="text-primary mr-2.5" />
              <span className="tracking-wider">REACH OUT</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight animate-fade-in">
              Get In <span className="text-gradient font-semibold">Touch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Have questions about our platform? Want to learn more about our curated startup ideas? Our team is here to help.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="frost-panel rounded-3xl p-10 border border-white/5">
              <h2 className="text-2xl font-medium mb-8">Send Us a Message</h2>
              <form className="space-y-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-medium text-white/80">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 h-14 text-white"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border-white/10 h-14 text-white"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="bg-white/5 border-white/10 h-14 text-white"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    className="bg-white/5 border-white/10 min-h-[180px] text-white resize-none"
                  />
                </div>
                
                <Button className="glass-button rounded-full px-8 py-6 text-base font-medium w-full group">
                  <span className="mr-3">Send Message</span>
                  <Send className="h-4 w-4 text-primary/90" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="h-12 w-12 rounded-full frost-panel flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Email</h3>
                    <p className="text-primary hover:text-primary/90 transition-colors">
                      <a href="mailto:hello@ideagenesis.ai">hello@ideagenesis.ai</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="h-12 w-12 rounded-full frost-panel flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Location</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Innovation Center<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="h-12 w-12 rounded-full frost-panel flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">Office Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM (PT)<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism rounded-3xl p-10">
                <div className="flex items-center space-x-4 mb-8">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-medium">Frequently Asked Questions</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">How do you curate your startup ideas?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We analyze market trends, funding data, and technological innovations to identify and curate viable startup concepts with real-world potential.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Can I use the ideas for my business?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, all ideas in our collection are available for you to explore and develop into actual businesses.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Do you offer consulting services?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, we provide consulting services to help you develop and implement any of the concepts from our curated collection.
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
