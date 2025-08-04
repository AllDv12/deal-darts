import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-background)]">
      <Header
        searchTerm=""
        onSearchChange={() => {}}
        onMenuClick={() => {}}
        dealsCount={mockProducts.length}
      />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="bg-card rounded-xl border border-card-border p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              These Terms of Service ("Terms") constitute a legally binding agreement made between you and Deal Darts ("we," "us," or "our"), concerning your access to and use of the Deal Darts website, mobile application, and services (collectively, the "Services").
            </p>
            <p className="text-muted-foreground mt-2">
              You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the Services and you must discontinue use immediately.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="text-muted-foreground">
              Unless otherwise indicated, the Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Services (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
            </p>
            <p className="text-muted-foreground mt-2">
              The Content and the Marks are provided on the Services "AS IS" for your information and personal use only. Except as expressly provided in these Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">User Representations</h2>
            <p className="text-muted-foreground">
              By using the Services, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
              <li>You have the legal capacity and you agree to comply with these Terms</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Services through automated or non-human means, whether through a bot, script, or otherwise</li>
              <li>You will not use the Services for any illegal or unauthorized purpose</li>
              <li>Your use of the Services will not violate any applicable law or regulation</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <p className="text-muted-foreground">
              You may be required to register with the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Products and Deals</h2>
            <p className="text-muted-foreground">
              We make no warranties or representations about the accuracy or completeness of the product information, prices, deals, or availability displayed on our Services. The inclusion of any products or services on our Services does not imply or warrant that these products or services will be available.
            </p>
            <p className="text-muted-foreground mt-2">
              All descriptions, images, references, features, content, specifications, products, and prices of products and services described or depicted on the Services are subject to change at any time without notice. We make reasonable efforts to accurately display the attributes of products, including the applicable colors; however, the actual color you see will depend on your computer system, and we cannot guarantee that your computer will accurately display such colors.
            </p>
            <p className="text-muted-foreground mt-2">
              We are not responsible for the conduct of any third-party merchants or retailers. We simply aggregate and share deals information, and we encourage you to review the terms and conditions and privacy policies of any third-party merchant or retailer before making a purchase.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
            <p className="text-muted-foreground">
              You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p className="text-muted-foreground mt-2">
              As a user of the Services, you agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2 space-y-1">
              <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
              <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses</li>
              <li>Use the Services to advertise or offer to sell goods and services</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
              <li>Engage in unauthorized framing of or linking to the Services</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools</li>
              <li>Use the Services in a manner inconsistent with any applicable laws or regulations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Websites and Content</h2>
            <p className="text-muted-foreground">
              The Services may contain links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").
            </p>
            <p className="text-muted-foreground mt-2">
              Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="text-muted-foreground mt-2">
              If you wish to terminate your account, you may simply discontinue using the Services, or you may submit a request to us via the contact information provided below.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications and Interruptions</h2>
            <p className="text-muted-foreground">
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.
            </p>
            <p className="text-muted-foreground mt-2">
              We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and defined following the laws of [Your State]. Deal Darts and yourself irrevocably consent that the courts of [Your State] shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-2">
              <p className="font-medium">Deal Darts Legal Team</p>
              <p className="text-muted-foreground">Email: legal@dealdarts.com</p>
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

export default TermsOfService;
