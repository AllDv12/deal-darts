import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm=""
        onSearchChange={() => {}}
        onMenuClick={() => {}}
        dealsCount={mockProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-card rounded-xl border border-card-border p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Deal Darts ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website, mobile applications, and other online products and services (collectively, the "Services").
            </p>
            <p className="text-muted-foreground mt-2">
              By using our Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our policies and practices, do not use our Services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Information You Provide to Us</h3>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Create an account or profile</li>
                  <li>Fill out forms on our Services</li>
                  <li>Subscribe to our alerts or newsletters</li>
                  <li>Communicate with us via third-party social media sites</li>
                  <li>Request customer support</li>
                  <li>Otherwise communicate with us</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Information We Collect Automatically</h3>
                <p className="text-muted-foreground">
                  When you access or use our Services, we automatically collect information about you, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>Log Information: We collect log information about your use of the Services, including the type of browser you use, access times, pages viewed, your IP address, and the page you visited before navigating to our Services.</li>
                  <li>Device Information: We collect information about the computer or mobile device you use to access our Services, including the hardware model, operating system and version, unique device identifiers, and mobile network information.</li>
                  <li>Location Information: We may collect information about the precise or approximate location of your device with your consent.</li>
                  <li>Information Collected by Cookies and Other Tracking Technologies: We use various technologies to collect information, including cookies and web beacons.</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
              <li>Provide, maintain, and improve our Services</li>
              <li>Provide and deliver the products and services you request</li>
              <li>Process transactions and send you related information, including confirmations and receipts</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
              <li>Respond to your comments, questions, and requests, and provide customer service</li>
              <li>Communicate with you about products, services, offers, promotions, rewards, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve the Services and provide content or features that match user profiles or interests</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
            <p className="text-muted-foreground">
              We may share information about you as follows:
            </p>
            <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Deal Darts or others</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
              <li>Between and among Deal Darts and our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Account Information</h3>
                <p className="text-muted-foreground">
                  You may update, correct, or delete information about you at any time by logging into your online account or emailing us at privacy@dealdarts.com. If you wish to delete or deactivate your account, please email us, but note that we may retain certain information as required by law or for legitimate business purposes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Cookies</h3>
                <p className="text-muted-foreground">
                  Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Promotional Communications</h3>
                <p className="text-muted-foreground">
                  You may opt out of receiving promotional emails from Deal Darts by following the instructions in those emails or by emailing us. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2">
              <p className="font-medium">Deal Darts Privacy Team</p>
              <p className="text-muted-foreground">Email: privacy@dealdarts.com</p>
              <p className="text-muted-foreground">Address: 123 Deal Street, Savings City, DC 10101</p>
            </div>
          </section>
          
          <div className="text-sm text-muted-foreground text-center pt-4 border-t border-border">
            Last Updated: August 1, 2025
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
