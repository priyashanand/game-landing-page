import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // <- Import here
import Header from './components/Header';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Games from './pages/Games';
import CaseStudyPage from './pages/CaseStudyPage';
import RevolvingGames from './pages/RevolvingGames';
import Netsol from './pages/Netsol';

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isCaseStudyPage = location.pathname.startsWith('/csp/');

  const shouldApplyStyle = !(isContactPage || isCaseStudyPage);

  return (
    <div style={{ backgroundColor: '#09090B' }}>
      <div className={`font-inter antialiased text-gray-900 ${shouldApplyStyle ? 'text-white custom-bg-style' : ''}`}>
        {isContactPage ? <Header1 /> : <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csp/:casename" element={<CaseStudyPage />} />
          <Route path="/csp/revolvingGames" element={<RevolvingGames />} />
          <Route path="/csp/netsol" element={<Netsol />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add ScrollToTop here */}
      <AppContent />
    </Router>
  );
}

export default App;
