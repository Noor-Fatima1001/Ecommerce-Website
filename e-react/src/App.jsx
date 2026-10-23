import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import MobNavbar from './Components/MobNavbar';
import Hero from './Components/Hero';
import Section from './Components/Section';
import Breakfast from './Components/Breakfast';
import Banner from './Components/Banner';
import BlogSection from './Components/BlogSection';
import NewsLetter from './Components/NewsLetter';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { CartContextProvider } from './context/cartContext';
import Category from './Components/Category';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart={setShowCart} />
        <MobNavbar setShowCart={setShowCart} />
        <Hero />
        <Category/>
        <Section />
        <Breakfast />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />
  
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </main>
    </CartContextProvider>
  );
};

export default App;
