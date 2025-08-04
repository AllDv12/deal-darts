import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import { Building, Users, Award, Target, Globe, Zap, Heart, Smile } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm=""
        onSearchChange={() => {}}
        onMenuClick={() => {}}
        dealsCount={mockProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">About Deal Darts</h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to help shoppers save time and money by finding the best deals across the web.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="bg-card rounded-xl border border-card-border p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://i.pravatar.cc/150?img=10"
                alt="Deal Darts Team" 
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2023, Deal Darts began with a simple observation: finding genuine deals online was becoming increasingly difficult amid the noise of fake discounts and misleading offers.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founder, an avid deal hunter, spent countless hours manually tracking prices and comparing offers across different retailers. Realizing this process could be simplified, the idea for Deal Darts was born.
              </p>
              <p className="text-muted-foreground">
                Today, we've grown into a team of passionate deal enthusiasts who combine advanced technology with human curation to bring you only the most legitimate and worthwhile deals from across the internet.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-10 w-10" />,
                title: "Accuracy",
                description: "We verify every deal to ensure it's genuine and provides real value."
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: "User First",
                description: "Every feature we build starts with what's best for our users."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Timeliness",
                description: "We work tirelessly to bring you deals as soon as they go live."
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Quality",
                description: "We focus on quality over quantity, highlighting only worthwhile deals."
              }
            ].map((value, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-6 text-center">
                <div className="bg-primary/10 text-primary p-3 rounded-full inline-flex mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                image: "https://i.pravatar.cc/150?img=1",
                bio: "Deal hunting enthusiast who turned a passion into a platform."
              },
              {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                image: "https://i.pravatar.cc/150?img=5",
                bio: "Tech wizard focused on creating seamless deal discovery experiences."
              },
              {
                name: "Marcus Williams",
                role: "Head of Deal Curation",
                image: "https://i.pravatar.cc/150?img=3",
                bio: "Former retail analyst with an eye for spotting genuine value."
              },
              {
                name: "Priya Patel",
                role: "Community Manager",
                image: "https://i.pravatar.cc/150?img=10",
                bio: "Building and nurturing our vibrant community of deal hunters."
              }
            ].map((member, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-card-border"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-card rounded-xl border border-card-border p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Deal Darts By The Numbers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Active Users" },
              { number: "100,000+", label: "Deals Shared" },
              { number: "$15M+", label: "Saved By Our Users" },
              { number: "4.8/5", label: "Average Rating" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Join Us */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Become part of our growing community of smart shoppers and never miss another great deal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://twitter.com/dealdarts" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Follow Us
            </a>
            <a 
              href="mailto:join@dealdarts.com" 
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-card border border-card-border hover:bg-card/80 transition-colors"
            >
              Work With Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
