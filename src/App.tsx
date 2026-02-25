import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import Subcategory from './pages/Subcategory';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Documents from './pages/Documents';
import References from './pages/References';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ProductCategory />} />
        <Route path="/category/:categoryId/subcategory/:subcategoryId" element={<Subcategory />} />
        <Route path="/category/:categoryId/subcategory/:subcategoryId/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-randa-blue/20 selection:text-randa-blue">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
