import React from 'react'
import AExperience from '../components/AExperience';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection'
import Mysore from '../components/Mysore';
import Okbye from '../components/Okbye';
import Peahen from '../components/Peahen';
import ProductShowcase from '../components/ProductShowcase';


const HomePage = () => {
  return( <>
  <Header/>
  <HeroSection/>
  <ProductShowcase/>
  <AExperience/>
  <Mysore/>
  <Peahen/>
  <FeelSpecial/> 
  <Okbye/>
  <Footer />
  
  </>);
}

export default HomePage