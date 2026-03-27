import { Shield, Gamepad2, Zap, Target, Users, Cpu } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-brand-dark rounded-3xl mb-6 shadow-2xl shadow-brand-cyan/20">
            <div className="relative">
              <Shield className="w-16 h-16 text-brand-cyan" />
              <Gamepad2 className="w-8 h-8 text-brand-orange absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <h1 className="text-5xl font-black text-brand-dark mb-4">
            About <span className="text-brand-cyan">ByteArena</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">India's Premier Destination for Laptop Reviews & Buying Guides</p>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-12">
          <section className="bg-brand-navy/5 p-8 rounded-[40px] border border-brand-navy/10">
            <h2 className="text-3xl font-bold text-brand-dark mt-0 mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-brand-orange" /> Our Mission
            </h2>
            <p className="text-lg">
              At <strong>ByteArena</strong>, we don't just review laptops; we engineer confidence. In a world where hardware moves faster than light, we provide a shielded space for Indian gamers and students to find the <strong>best gaming laptop under 80000 India</strong>. Our mission is to empower the next generation of Indian tech leaders with unbiased, hardcore laptop data and expert hardware intel.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
              <Users className="w-10 h-10 text-brand-cyan mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-2">Who We Are</h3>
              <p className="text-sm text-gray-600">
                A squad of hardware engineers, competitive gamers, and laptop enthusiasts based in Bangalore. We live and breathe silicon.
              </p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
              <Cpu className="w-10 h-10 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold text-brand-dark mb-2">What We Do</h3>
              <p className="text-sm text-gray-600">
                We stress-test every laptop in real Indian conditions. No air-conditioned labs—just raw performance testing.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">The ByteArena Standard</h2>
            <p>
              Transparency is our armor. We use affiliate links to keep the arena running, but our verdicts are forged in data, not sponsorships. If a product fails our thermal test, it fails our review. Period.
            </p>
          </section>

          <div className="bg-brand-dark text-white p-10 rounded-[40px] text-center border border-brand-cyan/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-brand-orange" /> Join the Evolution
            </h3>
            <p className="text-gray-400 mb-8">
              Whether you're choosing a laptop for your engineering degree or a beast for high-end gaming, ByteArena is your ultimate ally.
            </p>
            <a 
              href="https://chat.whatsapp.com/Hu3RFZqZWK3LlwOgUFYLTG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-cyan text-brand-dark px-8 py-3 rounded-xl font-bold hover:bg-white transition-all uppercase tracking-tighter"
            >
              Join the Squad on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
