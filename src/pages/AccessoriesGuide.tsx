import { Calendar, User, Clock, ShoppingCart, Monitor, MousePointer2, Keyboard, Wind, Headphones, Star, Zap, Shield, ArrowRight } from 'lucide-react';
import keyboardImg from '../assets/keyboard.png';
import image09 from '../assets/image09.png';
import image01 from '../assets/image01.png';
import image07 from '../assets/image07.png';
import image05 from '../assets/image05.png';
import image11 from '../assets/image11.png';
import image03 from '../assets/image03.png';
import image10 from '../assets/image10.png';
import image12 from '../assets/image12.png';

export default function AccessoriesGuide() {
  const categories = [
    {
      id: "monitors",
      title: "1. External Gaming Monitors",
      icon: <Monitor className="w-6 h-6 text-brand-cyan" />,
      advice: "If your laptop has a 45% NTSC screen, an external monitor is a MUST. Look for at least 144Hz and an IPS panel for color accuracy.",
      recommendations: [
        { name: "Acer Nitro VG240Y", price: "₹10,990", specs: "24-inch, IPS, 180Hz, 0.5ms", tag: "BEST VALUE", amazonLink: "https://amzn.to/4c005yV", image: image09 },
        { name: "LG Ultragear 24GN65R", price: "₹12,490", specs: "24-inch, IPS, 144Hz, HDR10", tag: "CEO'S CHOICE", amazonLink: "https://amzn.to/47lcXwY", image: image01 }
      ]
    },
    {
      id: "mice",
      title: "2. Precision Gaming Mice",
      icon: <MousePointer2 className="w-6 h-6 text-brand-orange" />,
      advice: "Don't just look at RGB. Sensor quality (DPI/IPS) and weight matter more for competitive games like Valorant.",
      recommendations: [
        { name: "Logitech G102 Lightsync", price: "₹1,590", specs: "8000 DPI, 6 Buttons, Classic Design", tag: "BUDGET KING", amazonLink: "https://amzn.to/4rTLFVR", image: image07 },
        { name: "Razer DeathAdder Essential", price: "₹1,290", specs: "6400 DPI, Ergonomic Shape", tag: "MOST COMFORTABLE", amazonLink: "https://amzn.to/4dqZ6ZZ", image: image05 }
      ]
    },
    {
      id: "keyboards",
      title: "3. Mechanical Keyboards",
      icon: <Keyboard className="w-6 h-6 text-brand-cyan" />,
      advice: "Mechanical switches offer better tactile feedback and durability. Red switches are preferred for quiet, fast gaming.",
      recommendations: [
        { name: "Redragon", price: "₹2,490", specs: "Blue Switches, RGB, Wrist Rest", tag: "BEST SELLER", amazonLink: "https://amzn.to/3Psr11y", image: image12 },
        { name: "Ant Esports MK1200", price: "₹1,890", specs: "Multi-color LED, Blue Switches", tag: "CHEAPEST MECH", amazonLink: "https://amzn.to/4t4L9Fm", image: image03 }
      ]
    },
    {
      id: "cooling",
      title: "4. Laptop Cooling Pads",
      icon: <Wind className="w-6 h-6 text-brand-orange" />,
      advice: "In India, a cooling pad can drop temps by 3-5°C. It also provides a better typing angle and prevents dust buildup.",
      recommendations: [
        { name: "Zinq Five Fan Cooling Pad", price: "₹1,190", specs: "5 Fans, Dual USB, Height Adjust", tag: "CEO'S CHOICE", amazonLink: "https://www.amazon.in/dp/B0CGZWGGJ9/ref=cm_sw_r_as_gl_apa_gl_i_KJ5XC7P8ZP70P488QY2M?linkCode=ml1&tag=launchlabhq-21&linkId=bde68c4947a69290650944d8990c0676", image: image10 },
        { name: "EvoFox Frost Laptop Cooling Pad", price: "₹990", specs: "Large Fan, Silent Operation", tag: "BUDGET PICK", amazonLink: "https://amzn.to/47nm1kW", image: image11 }
      ]
    }
  ];

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Article Header */}
      <header className="pt-12 pb-8 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-xs text-gray-400 mb-6 uppercase tracking-widest font-bold">
            <span className="hover:text-brand-cyan cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="hover:text-brand-cyan cursor-pointer">Accessories</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 uppercase tracking-tighter">
            Essential Gaming Laptop Accessories in India (2026) ⚡
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-cyan" />
              <span>By ByteArena CEO</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-cyan" />
              <span>March 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>10 Min Read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Affiliate Disclaimer */}
        <div className="text-[10px] text-gray-400 italic mb-8 text-center">
          Disclaimer: As an Amazon Associate, we earn from qualifying purchases. We only recommend gear we've personally stress-tested in the Arena.
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
          <p className="text-xl font-medium text-brand-dark mb-6">
            So you've bought your dream gaming laptop under ₹80,000. Congratulations! But here's the CEO's truth: a laptop alone is only 70% of the experience. To truly dominate the arena, you need the right peripherals.
          </p>
          <p>
            Whether it's a mouse that tracks your every flick in Valorant or a cooling pad that keeps your CPU from melting in the Delhi heat, the right accessories are force multipliers. In this guide, we've curated the <strong>best gaming accessories India 2026</strong> has to offer, specifically chosen to complement mid-range gaming beasts.
          </p>
          
          <div className="bg-brand-navy/5 border-l-4 border-brand-orange p-6 my-8 rounded-r-2xl">
            <h3 className="text-lg font-bold text-brand-dark mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-orange" /> The CEO's Advice
            </h3>
            <p className="text-sm text-gray-600 italic">
              "Don't blow your entire budget on the laptop and then use a ₹200 office mouse. Your peripherals are your primary interface with the game. A good setup reduces fatigue and actually makes you a better player."
            </p>
          </div>
        </section>

        {/* Detailed Categories */}
        <section className="space-y-20 mb-20">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all border-t-4 border-t-brand-cyan">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-dark rounded-2xl border border-brand-cyan/20">
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">{cat.title}</h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {cat.advice}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.recommendations.map((rec, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden group">
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-2 py-0.5 bg-brand-dark text-brand-cyan text-[8px] font-black uppercase tracking-tighter rounded">
                          {rec.tag}
                        </span>
                        <p className="text-lg font-black text-brand-orange">{rec.price}</p>
                      </div>
                      <div className="w-full aspect-video rounded-xl mb-4 overflow-hidden bg-gray-100">
                        <img 
                          src={rec.image} 
                          alt={rec.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-brand-dark mb-1">{rec.name}</h4>
                      <p className="text-xs text-gray-500 mb-6">{rec.specs}</p>
                      <a 
                        href={rec.amazonLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-brand-dark text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-dark transition-all flex items-center justify-center gap-2"
                      >
                        Check on Amazon <ShoppingCart className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-cyan/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Buying Tips Section */}
        <section className="bg-brand-dark text-white rounded-[40px] p-10 mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">
              ByteArena <span className="text-brand-cyan">Pro Tips</span> for Accessory Hunting
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0 text-brand-cyan font-bold">1</div>
                <div>
                  <h4 className="font-bold mb-1">Check Your Ports First</h4>
                  <p className="text-sm text-gray-400">Before buying a high-refresh monitor, ensure your laptop's HDMI or Type-C port supports the required bandwidth (HDMI 2.0+ or DP 1.4).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 text-brand-orange font-bold">2</div>
                <div>
                  <h4 className="font-bold mb-1">Prioritize Comfort</h4>
                  <p className="text-sm text-gray-400">You'll be using these for hours. A mouse that fits your grip style (Palm, Claw, or Fingertip) is more important than 20,000 DPI.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0 text-brand-cyan font-bold">3</div>
                <div>
                  <h4 className="font-bold mb-1">Don't Overspend on RGB</h4>
                  <p className="text-sm text-gray-400">Lights don't give you more FPS. If you're on a budget, prioritize build quality and sensor accuracy over fancy lighting effects.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-cyan/5 blur-[100px] rounded-full"></div>
        </section>

        {/* Conclusion */}
        <section className="bg-brand-cyan/5 p-10 rounded-[40px] border border-brand-cyan/10 text-center">
          <h2 className="text-3xl font-black text-brand-dark mb-4 uppercase tracking-tight">The Final Setup</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            A great gaming laptop is just the beginning. By adding a precision mouse, a tactile keyboard, and a high-refresh monitor, you transform your laptop into a true battle station.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.amazon.in/s?k=gaming+accessories&tag=launchlabhq-21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-dark transition-all shadow-xl shadow-brand-cyan/20 text-center"
            >
              View All Recommended Gear
            </a>
          </div>
        </section>

        {/* Ad Placeholder */}
        <div className="w-full h-32 bg-gray-50 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center mt-12 text-gray-400 text-xs uppercase tracking-widest font-bold">
          Advertisement - AdSense Placeholder
        </div>
      </div>
    </article>
  );
}
