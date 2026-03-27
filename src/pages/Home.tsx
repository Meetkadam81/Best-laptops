import { Link } from 'react-router-dom';
import { Shield, Gamepad2, Cpu, Zap, ArrowRight, Laptop, Target } from 'lucide-react';
import { motion } from 'motion/react';
import image06 from '../assets/image06.png';
import image01 from '../assets/image01.png';
import image02 from '../assets/image02.png';

export default function Home() {
  const categories = [
    { name: 'Gaming Laptops', icon: <Laptop className="w-6 h-6" />, count: '50+ Reviews', color: 'text-brand-cyan' },
    { name: 'Thin & Light', icon: <Zap className="w-6 h-6" />, count: '30+ Guides', color: 'text-brand-orange' },
    { name: 'Student Laptops', icon: <Shield className="w-6 h-6" />, count: '40+ Picks', color: 'text-brand-cyan' },
  ];

  const featuredPosts = [
    {
      title: 'ByteArena’s Top Gaming Laptops Under ₹80,000 in India (2026) 🔥',
      excerpt: 'We tested 15+ laptops to find the absolute beasts for Indian students and gamers. No lag, just performance.',
      image: image06,
      link: '/blog/best-gaming-laptops-under-80000-india',
      tag: 'Gaming'
    },
    {
      title: 'Essential Gaming Laptop Accessories in India (2026) ⚡',
      excerpt: 'From monitors to cooling pads, here is the CEO\'s curated list of must-have gear for your battle station.',
      image: image01,
      link: '/blog/essential-gaming-laptop-accessories-india',
      tag: 'Accessories'
    },
    {
      title: 'Best Laptops for Students in India (Non-Gaming)',
      excerpt: 'Battery life and portability are key. These are the best daily drivers for college and work.',
      image: image02,
      link: '/blog',
      tag: 'Student'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold tracking-widest uppercase mb-6">
                <Target className="w-3 h-3" /> Laptops. Performance. Future.
              </div>
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                Enter the <br />
                <span className="text-brand-cyan glow-cyan">ByteArena</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
                India's premier destination for expert laptop reviews, gaming benchmarks, and finding the <strong>best gaming laptop under 80000 India</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/best-gaming-laptops-under-80000-india" className="bg-brand-cyan text-brand-dark px-8 py-4 rounded-xl font-black hover:bg-white transition-all shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-2 uppercase tracking-tighter">
                  View Top Laptops <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="https://chat.whatsapp.com/Hu3RFZqZWK3LlwOgUFYLTG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center uppercase tracking-tighter gap-2"
                >
                  Join the Community <Zap className="w-4 h-4 text-brand-orange" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative p-12 bg-white/5 rounded-[60px] border border-white/10 backdrop-blur-sm shadow-2xl shadow-brand-cyan/10">
                <div className="relative">
                  <Shield className="w-64 h-64 text-brand-cyan opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-48 h-48 text-brand-cyan" />
                    <Gamepad2 className="w-24 h-24 text-brand-orange absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
                {/* Decorative Glows */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-cyan rounded-full blur-[80px] opacity-30"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange rounded-full blur-[80px] opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00f2ff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Categories */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="flex items-center p-8 bg-white border border-gray-100 rounded-[32px] hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center ${cat.color} group-hover:bg-brand-dark transition-colors`}>
                  {cat.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-brand-dark">{cat.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-brand-dark mb-2 tracking-tight uppercase">Latest Intel</h2>
              <p className="text-gray-500 font-medium">Fresh from the ByteArena testing labs.</p>
            </div>
            <Link to="/blog" className="text-brand-cyan font-bold flex items-center gap-1 hover:underline uppercase tracking-tighter">
              View All Intel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredPosts.map((post, i) => (
              <Link key={i} to={post.link} className="group">
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-lg">
                  <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-dark/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-cyan border border-brand-cyan/30">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-cyan transition-colors leading-tight tracking-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CEO's Hardware Roadmap */}
      <section className="py-24 bg-brand-dark rounded-[60px] mx-4 sm:mx-8 mb-24 relative overflow-hidden border border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-black tracking-widest uppercase mb-6">
            <Zap className="w-3 h-3" /> Exclusive CEO Intel
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">The 2027 Hardware Roadmap</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            As the CEO of ByteArena, I'm giving you a sneak peek into the next-gen <strong>RTX 50-series</strong> and <strong>Ryzen 9000</strong> laptops hitting the Indian market next year. Don't buy a dead-end machine today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left w-full sm:w-64">
              <h4 className="text-brand-cyan font-bold text-sm mb-2 uppercase tracking-widest">Q1 2027</h4>
              <p className="text-xs text-gray-500">RTX 5060 Laptops launch with 12GB VRAM as standard. Massive jump for 1440p gaming.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left w-full sm:w-64">
              <h4 className="text-brand-orange font-bold text-sm mb-2 uppercase tracking-widest">Q2 2027</h4>
              <p className="text-xs text-gray-500">Ryzen 9000 "Zen 6" APUs redefine battery life. 12+ hours of gaming on a single charge.</p>
            </div>
          </div>
          <div className="mt-12">
            <a 
              href="https://chat.whatsapp.com/Hu3RFZqZWK3LlwOgUFYLTG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-cyan text-brand-dark px-10 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-white transition-all shadow-xl shadow-brand-cyan/20"
            >
              Join the VIP Waitlist
            </a>
          </div>
        </div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full"></div>
      </section>
    </div>
  );
}
