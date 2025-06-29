import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PartnersPage from './pages/PartnersPage';
import NewsPage from './pages/NewsPage';
import EnterprisePage from './pages/EnterprisePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Header onQuoteClick={openQuoteModal} />
        <Routes>
          <Route path="/" element={<HomePage onQuoteClick={openQuoteModal} />} />
          <Route path="/services" element={<ServicesPage onQuoteClick={openQuoteModal} />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/actualites" element={<NewsPage />} />
          <Route path="/entreprise" element={<EnterprisePage onQuoteClick={openQuoteModal} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      </div>
    </Router>
  );
}

export default App;