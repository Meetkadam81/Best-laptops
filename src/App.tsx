import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import BlogPost from './pages/BlogPost';
import AccessoriesGuide from './pages/AccessoriesGuide';
import BlogList from './pages/BlogList';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/blog/best-gaming-laptops-under-80000-india" element={<BlogPost />} />
            <Route path="/blog/essential-gaming-laptop-accessories-india" element={<AccessoriesGuide />} />
            <Route path="/blog" element={<BlogList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
