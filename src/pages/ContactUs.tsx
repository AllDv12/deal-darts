import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset submitted state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm=""
        onSearchChange={() => {}}
        onMenuClick={() => {}}
        dealsCount={mockProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-xl border border-card-border p-6 h-full">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question about Deal Darts? Want to partner with us? Or just want to say hello? We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">contact@dealdarts.com</p>
                    <p className="text-muted-foreground">support@dealdarts.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm ET</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-muted-foreground">123 Deal Street</p>
                    <p className="text-muted-foreground">Savings City, DC 10101</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-medium mb-3">Connect with Us</h3>
                <div className="flex gap-4">
                  {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com/dealdarts`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-card hover:bg-card/80 border border-card-border p-2 rounded-full transition-colors"
                    >
                      <img 
                        src={`/social/${social}.svg`} 
                        alt={`${social} icon`} 
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-xl border border-card-border p-6">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 mb-4 text-success">
                    <CheckCircle className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="hero-button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-medium mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="hero-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
            {/* FAQ Section */}
            <div className="bg-card rounded-xl border border-card-border p-6 mt-8">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "How do I submit a deal to Deal Darts?",
                    answer: "You can submit deals through our 'Submit a Deal' form, which you can find in the main navigation menu. Please include as much detail as possible including the product name, original price, discounted price, and where to find the deal."
                  },
                  {
                    question: "How do Deal Alerts work?",
                    answer: "Deal Alerts allow you to get notified when deals matching your criteria are added. You can set up alerts based on keywords, categories, brands, and minimum discount percentages from your account dashboard."
                  },
                  {
                    question: "I found an expired deal. What should I do?",
                    answer: "If you find an expired deal, please report it using the 'Report' button on the deal card. This helps us keep our listings current and accurate for all users."
                  },
                  {
                    question: "Can I become an affiliate partner?",
                    answer: "Yes! We're always looking for partnership opportunities. Please contact our partnerships team at partners@dealdarts.com with details about your proposal."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-card-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
