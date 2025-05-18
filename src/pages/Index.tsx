
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MitochondriaInfo from '@/components/MitochondriaInfo';
import ScienceSection from '@/components/ScienceSection';
import Ingredients from '@/components/Ingredients';
import MiddleCTA from '@/components/MiddleCTA';
import Testimonials from '@/components/Testimonials';
import ComparisonChart from '@/components/ComparisonChart';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-mitolyn-background">
      <Header />
      <Hero />
      <MitochondriaInfo />
      <div className="section-divider"></div>
      <ScienceSection />
      <Ingredients />
      <MiddleCTA />
      <Testimonials />
      <div className="section-divider"></div>
      <ComparisonChart />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
