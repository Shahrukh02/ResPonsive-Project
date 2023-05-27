import React from 'react';
import './App.css';
import Slider from './components/Pages/slider.js';
import CardSlider from './components/Pages/cardSlider.js';
import Basic from './components/Pages/basic.js';
import ClientReview from './components/Pages/clientReview.js';
import Register from './components/Pages/register.js';
import Footer from './components/Pages/footer.js';
import Feature from './components/Pages/feature.js';
import LogoPortfolio from './components/Pages/logo.js';
import Banner from './components/Pages/banner.js';
import Header from './components/Pages/header.js';
import Portfolio from './components/Pages/portfolio.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <LogoPortfolio />
      <Feature />
      <div className='centerFour'>
        <div className='packageHeading'>
          <h2>View Our Best Seller Packages</h2>
          <p>We help organizations, small businesses, startups and entrepreneurs grow<br />
            with sophisticated logo designs in competitive pricing.</p>
        </div>
        <CardSlider />
        <Slider />
      </div>
      <Basic />
      <Portfolio />

      <ClientReview />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
