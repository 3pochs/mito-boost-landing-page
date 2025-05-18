
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 mb-4 max-w-3xl mx-auto">
            This website is operated by an independent affiliate and is not the official Mitolyn site. 
            Statements are for informational purposes only. These statements have not been evaluated 
            by the Food and Drug Administration. This product is not intended to diagnose, treat, 
            cure, or prevent any disease.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Mitolyn Affiliate. All rights reserved.
          </p>
        </div>
        
        <div className="border-t border-gray-300 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              Privacy Policy | Terms of Service
            </p>
            <div className="flex space-x-4">
              <a href="#hero" className="text-mitolyn-primary hover:text-mitolyn-accent text-sm">
                Back to top
              </a>
              <a href="mailto:contact@example.com" className="text-mitolyn-primary hover:text-mitolyn-accent text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
