
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-mitolyn-primary animate-fadeIn">Privacy Policy</h1>
          
          <div className="prose max-w-none animate-fadeIn animation-delay-200">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. 
              We respect your privacy and are committed to protecting your personal data. Please read this Privacy Policy carefully.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number that you voluntarily give to us when you register or make a purchase.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
              </li>
              <li>
                <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., credit card number) when you purchase from us. We store only very limited financial information that we need to process your payment.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Use of Your Information</h2>
            <p>
              We may use the information we collect about you for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process your orders and manage your account</li>
              <li>To email you regarding your account or order</li>
              <li>To fulfill and manage purchases, orders, payments, and other transactions related to the website</li>
              <li>To send you promotional information, such as newsletters</li>
              <li>To respond to your comments, questions, and requests</li>
              <li>To monitor and analyze usage and trends to improve your experience with the website</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </li>
              <li>
                <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@example.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
