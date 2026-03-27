import { Link } from 'react-router-dom';
import { Shield, Gamepad2, Twitter, Github, Linkedin, Mail, MessageCircle, Send as Telegram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Shield className="w-6 h-6 text-brand-cyan" />
                <Gamepad2 className="w-3 h-3 text-brand-orange absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Byte<span className="text-brand-cyan">Arena</span>
              </span>
            </Link>
            <p className="text-sm max-w-sm leading-relaxed">
              Laptops. Performance. Future. ByteArena is India's premier destination for expert laptop reviews, gaming benchmarks, and unbiased hardware rankings.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Arena Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-brand-cyan transition-colors">About the Arena</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-brand-cyan transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-sm hover:text-brand-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-sm hover:text-brand-cyan transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Popular Intel</h4>
            <ul className="space-y-2">
              <li><Link to="/blog/best-gaming-laptops-under-80000-india" className="text-sm hover:text-brand-cyan transition-colors">Best Gaming Laptop Under 80000 India</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-brand-cyan transition-colors">Laptop Reviews India</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-brand-cyan transition-colors">Student Laptops India</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-brand-cyan transition-colors">RTX 4060 Laptop India</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Join the Squad</h4>
            <div className="flex space-x-4">
              <a href="https://chat.whatsapp.com/Hu3RFZqZWK3LlwOgUFYLTG" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="https://chat.whatsapp.com/Hu3RFZqZWK3LlwOgUFYLTG" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors"><Telegram className="w-5 h-5" /></a>
              <a href="https://chat.whatsapp.com/Hu3RFZqZWK3LlwOgUFYLTG" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="mailto:contact@bytearena.in" className="hover:text-brand-cyan transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} ByteArena. All rights reserved. Engineered for Indian Gamers.
          </p>
          <p className="text-[10px] text-gray-600 mt-2">
            Amazon Affiliate Disclaimer: As an Amazon Associate, ByteArena earns from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
