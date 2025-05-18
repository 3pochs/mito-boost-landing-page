
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8 animate-fadeIn">
            <Link to="/" className="text-mitolyn-primary hover:text-mitolyn-accent flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-mitolyn-primary animate-fadeIn">Terms of Service</h1>
          
          <div className="prose max-w-none animate-fadeIn animation-delay-200">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of the terms, then you may not access the website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Affiliate Disclosure</h2>
            <p>
              This website is operated by an independent affiliate of Mitolyn. We participate in affiliate programs, which means we may earn commissions on products purchased through our links to retailer sites.
            </p>
            <p>
              As an affiliate, we have no direct relationship with Mitolyn beyond marketing its products. We are not the manufacturer, seller, or provider of the products featured on this website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of this website and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the website owners.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">User Comments and Feedback</h2>
            <p>
              We may provide areas on our website where you can post information about yourself and others and communicate with others. Such postings are governed by our Website Terms of Use. We are not responsible for the personally identifiable information you choose to submit in these forums.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Links To Other Websites</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Disclaimer</h2>
            <p>
              The content on this website is for informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p>
              The products mentioned on this website have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: terms@example.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
