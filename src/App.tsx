import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Games from './pages/Games';
import CaseStudyPage from './pages/CaseStudyPage';



function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#000'}}>
        <div className="font-inter antialiased text-gray-900 "
        style={{
          borderRadius: '16px',
          background: 'radial-gradient(40.55% 11.34% at 50% 0%, rgba(94, 176, 239, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
          boxShadow: '0 0 0 1px rgba(244, 244, 245, 0.1)',
          color: 'white',
        }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/csp/:casename" element={<CaseStudyPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
