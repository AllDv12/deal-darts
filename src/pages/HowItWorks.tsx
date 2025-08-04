import { ArrowLeft, CheckCircle, LucideShoppingCart, Truck, Wallet, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";

const HowItWorks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Steps in the process
  const steps = [
    {
      icon: LucideShoppingCart,
      title: "Find the Best Deals",
      description: "Browse thousands of verified deals from top retailers like Amazon, Walmart, eBay, and more.",
      color: "from-primary to-primary-foreground"
    },
    {
      icon: CheckCircle,
      title: "Verify Deal Quality",
      description: "Every deal is manually verified by our team to ensure quality, authenticity, and value.",
      color: "from-success to-success-foreground"
    },
    {
      icon: Wallet,
      title: "Save Money",
      description: "Click through to the retailer and make your purchase at the discounted price.",
      color: "from-secondary to-secondary-foreground"
    },
    {
      icon: Truck,
      title: "Get Your Products",
      description: "Products are shipped directly from the retailer, with all their regular shipping options.",
      color: "from-warning to-warning-foreground"
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "How do you find these deals?",
      answer: "Our team of deal hunters constantly scans hundreds of retailers for price drops, coupon codes, and special offers. We also use advanced algorithms to track price history and identify when items hit their lowest prices."
    },
    {
      question: "Are these deals really verified?",
      answer: "Yes! Unlike many deal sites, we manually verify each deal before it's published. We check that the discount is genuine (compared to historical pricing), that the product has good reviews, and that the seller is reputable."
    },
    {
      question: "How do I get notified about new deals?",
      answer: "You can sign up for our daily email newsletter or enable browser notifications to get alerts when new deals matching your interests are posted. We also offer a Deal Alerts feature that lets you set up custom alerts for specific products or categories."
    },
    {
      question: "Do you make money from these deals?",
      answer: "Deal Darts earns affiliate commissions when users make purchases through our links. This helps us keep the service free for users. Importantly, we never let commissions influence which deals we feature - quality and value for our users always come first."
    },
    {
      question: "Can I submit a deal I found?",
      answer: "Absolutely! We welcome user submissions and will credit you if we publish your deal. Just use the 'Submit a Deal' button in the navigation menu."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuClick={() => {}}
        dealsCount={0}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back to home link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="group">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Deals
            </Link>
          </Button>
        </div>
        
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Deal Darts Works</h1>
          <p className="text-xl text-muted-foreground">
            We make it easy to find the best deals online. Here's how our platform helps you save time and money.
          </p>
        </div>
        
        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="bg-card border border-card-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-16 h-16 rounded-full mb-6 bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                <step.icon className="h-8 w-8" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground font-medium">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits section */}
        <div className="bg-card border border-card-border rounded-xl p-8 mb-20 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Deal Darts?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "No need to check multiple sites. We aggregate deals from hundreds of retailers in one place."
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "We only feature products with good ratings and from reliable sellers."
              },
              {
                icon: Wallet,
                title: "Save Money",
                description: "Average savings of 30% across all deals, with many discounts exceeding 50%."
              }
            ].map(benefit => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-card-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA section */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of smart shoppers who use Deal Darts to find the best deals online every day.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 rounded-xl text-lg shadow-md hover:shadow-lg transition-all">
            <Link to="/">
              Explore Today's Hot Deals
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
