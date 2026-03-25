import { Link } from 'react-router-dom';
import { Menu, X, Zap, Shield, Gamepad2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="w-8 h-8 text-brand-cyan" />
                <Gamepad2 className="w-4 h-4 text-brand-orange absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Byte<span className="text-brand-cyan glow-cyan">Arena</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors">Home</Link>
            <Link to="/blog/best-gaming-laptops-under-80000-india" className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors">Gaming Laptops</Link>
            <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors">Blog</Link>
            <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors">About</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 py-2">Home</Link>
          <Link to="/blog/best-gaming-laptops-under-80000-india" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 py-2">Gaming Laptops</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 py-2">Blog</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-300 py-2">About</Link>
        </div>
      )}
    </nav>
  );
}
