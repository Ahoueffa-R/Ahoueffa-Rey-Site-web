import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import DatingPro from './pages/DatingPro';
import About from './pages/About';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';
import Realisations from './pages/Realisations';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to ensure page starts at top on navigation
function ScrollToTopComponent() {
  return <ScrollToTop />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dating-pro" element={<DatingPro />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
