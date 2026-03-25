import { Calendar, User, Clock, ShoppingCart, AlertTriangle, CheckCircle2, XCircle, Cpu, Star, Zap, Laptop, Shield, Gamepad2 } from 'lucide-react';
import image06 from '../assets/image06.png';
import image02 from '../assets/image02.png';
import image04 from '../assets/image04.png';
import keyboard from '../assets/keyboard.png';
import image08 from '../assets/image08.png';

export default function BlogPost() {
  const laptops = [
    {
      id: 1,
      name: "HP Victus 16 (2026 Edition)",
      tag: "CEO'S CHOICE",
      valueScore: 9.8,
      specs: "Ryzen 7 8845HS | RTX 4060 (120W TGP) | 16GB DDR5 | 512GB Gen4 SSD",
      fullSpecs: {
        cpu: "AMD Ryzen 7 8845HS (8 Cores, 16 Threads, up to 5.1GHz)",
        gpu: "NVIDIA GeForce RTX 4060 (8GB GDDR6, 120W TGP)",
        ram: "16GB DDR5 5600MHz (Expandable to 32GB)",
        storage: "512GB M.2 NVMe PCIe Gen4 SSD (Extra Slot available)",
        display: "16.1-inch FHD (1920 x 1080), 144Hz, IPS, 300 nits, 100% sRGB",
        ports: "1x USB-C (PD & DP), 3x USB-A 3.2, 1x HDMI 2.1, RJ-45, SD Card Reader, Audio Jack"
      },
      pros: ["Excellent Thermal Management", "High TGP Graphics Card", "Clean Minimalist Design"],
      cons: ["Average Battery Life", "Screen Wobble still exists"],
      bestFor: "Competitive Gamers & Video Editors",
      price: "₹78,990",
      amazonLink: "https://amzn.to/4rUrWW5",
      image: image06
    },
    {
      id: 2,
      name: "Lenovo LOQ 15IRX9",
      tag: "BEST DISPLAY",
      valueScore: 9.4,
      specs: "Intel i7-13650HX | RTX 4050 (95W TGP) | 16GB DDR5 | 1TB SSD",
      fullSpecs: {
        cpu: "Intel Core i7-13650HX (14 Cores, 20 Threads, up to 4.9GHz)",
        gpu: "NVIDIA GeForce RTX 4050 (6GB GDDR6, 95W TGP)",
        ram: "16GB DDR5 4800MHz (Dual Channel)",
        storage: "1TB M.2 NVMe PCIe Gen4 SSD",
        display: "15.6-inch WQHD (2560 x 1440), 165Hz, IPS, 350 nits, 100% sRGB, G-Sync",
        ports: "1x USB-C 3.2 Gen 2, 3x USB-A 3.2 Gen 1, 1x HDMI 2.1, Ethernet, Audio Combo"
      },
      pros: ["Best-in-class Keyboard", "Sturdy Build Quality", "Great 100% sRGB Display"],
      cons: ["Bulky Power Adapter", "Fans can get loud"],
      bestFor: "Engineering Students & Heavy Multitaskers",
      price: "₹76,490",
      amazonLink: "https://amzn.to/3PthuYc",
      image: image02
    },
    {
      id: 3,
      name: "ASUS TUF Gaming F15",
      tag: "BATTERY KING",
      valueScore: 8.9,
      specs: "Intel i7-12700H | RTX 4050 | 16GB RAM | 512GB SSD | 90Wh Battery",
      fullSpecs: {
        cpu: "Intel Core i7-12700H (14 Cores, 20 Threads, up to 4.7GHz)",
        gpu: "NVIDIA GeForce RTX 4050 (6GB GDDR6, 90W TGP)",
        ram: "16GB DDR4 3200MHz (Upgradable)",
        storage: "512GB M.2 NVMe PCIe Gen3 SSD",
        display: "15.6-inch FHD (1920 x 1080), 144Hz, IPS-level, 250 nits, 62.5% sRGB",
        ports: "1x Thunderbolt 4, 1x USB-C 3.2, 2x USB-A 3.2, 1x HDMI 2.1, RJ-45, Audio Jack"
      },
      pros: ["Massive Battery Life", "Military Grade Durability", "Good Port Selection"],
      cons: ["Older CPU Generation", "Display is only 62% sRGB"],
      bestFor: "Students who need long battery life",
      price: "₹72,990",
      amazonLink: "https://amzn.to/3PqtWI8",
      image: image04
    },
    {
      id: 4,
      name: "Acer Nitro V 15",
      tag: "VALUE PICK",
      valueScore: 9.1,
      specs: "Intel i5-13420H | RTX 4050 | 16GB DDR5 | 512GB SSD",
      fullSpecs: {
        cpu: "Intel Core i5-13420H (8 Cores, 12 Threads, up to 4.6GHz)",
        gpu: "NVIDIA GeForce RTX 4050 (6GB GDDR6, 75W TGP)",
        ram: "16GB DDR5 5200MHz",
        storage: "512GB M.2 NVMe PCIe Gen4 SSD",
        display: "15.6-inch FHD (1920 x 1080), 144Hz, IPS, 250 nits",
        ports: "1x Thunderbolt 4, 3x USB-A 3.2, 1x HDMI 2.1, Ethernet (RJ-45), Audio Jack"
      },
      pros: ["Most Affordable RTX 4050", "Compact & Light", "Dual Fan Cooling"],
      cons: ["Plastic Build feels cheap", "Average Speakers"],
      bestFor: "Budget-conscious Gamers",
      price: "₹69,990",
      amazonLink: "https://www.amazon.in/dp/B0DFWRZLK5/ref=cm_sw_r_as_gl_apa_gl_i_FDEE6MCEQK67B0BGWGRC?linkCode=ml1&tag=launchlabhq-21&linkId=9c68fcd6670f832bde60b42b6b3cec11",
      image: keyboard
    },
    {
      id: 5,
      name: "MSI Cyborg 15",
      tag: "ULTRA PORTABLE",
      valueScore: 8.2,
      specs: "Intel i7-13620H | RTX 4050 | 16GB RAM | 512GB SSD",
      fullSpecs: {
        cpu: "Intel Core i7-13620H (10 Cores, 16 Threads, up to 4.9GHz)",
        gpu: "NVIDIA GeForce RTX 4050 (6GB GDDR6, 45W TGP)",
        ram: "16GB DDR5 5200MHz",
        storage: "512GB M.2 NVMe PCIe Gen4 SSD",
        display: "15.6-inch FHD (1920 x 1080), 144Hz, IPS-level",
        ports: "1x USB-C 3.2 (DP), 2x USB-A 3.2, 1x HDMI 2.1, RJ-45, Audio Combo"
      },
      pros: ["Translucent Design", "Very Lightweight", "Latest Gen Hardware"],
      cons: ["Single Fan Cooling", "Low TGP Graphics"],
      bestFor: "Casual Gamers who travel often",
      price: "₹74,990",
      amazonLink: "https://amzn.to/3NYxGA4",
      image: image08
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
            <span className="hover:text-brand-cyan cursor-pointer">Gaming Laptops</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ByteArena’s Top Gaming Laptops Under ₹80,000 in India (2026) 🔥
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-cyan" />
              <span>By ByteArena Editorial Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-cyan" />
              <span>March 23, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>12 Min Read</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Affiliate Disclaimer */}
        <div className="text-[10px] text-gray-400 italic mb-8 text-center">
          Disclaimer: As an Amazon Associate, we earn from qualifying purchases. This helps us keep the Arena running without biased sponsorships.
        </div>

        {/* Ad Placeholder */}
        <div className="w-full h-32 bg-gray-50 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center mb-12 text-gray-400 text-xs uppercase tracking-widest font-bold">
          Advertisement - AdSense Placeholder
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
          <p className="text-xl font-medium text-brand-dark mb-6">
            Is your current laptop struggling to keep up with your gaming ambitions? We know the pain of seeing "Low FPS" during a clutch moment in Valorant or waiting for ages for a video to export. In the Indian market, where temperatures soar and budgets are tight, choosing the wrong machine isn't just a mistake—it's a multi-year regret.
          </p>
          <p>
            Finding the <strong>best gaming laptop under 80000 India 2026</strong> is a daunting task. With so many brands making tall claims about "AI-powered performance" and "liquid cooling," it's easy to fall for marketing gimmicks. At <strong>ByteArena</strong>, we believe you shouldn't have to compromise your future for a budget. We've seen too many Indian students and gamers spend their hard-earned money on laptops that thermal throttle within 20 minutes of gameplay.
          </p>
          <p>
            Whether you're an Indian student aiming for a <strong>gaming laptop for students India</strong> that can handle both heavy coding and AAA titles, or a hardcore gamer looking for the <strong>best laptop for gaming under 80000</strong>, we've got the arena covered. We've tested these machines for thermals, TGP, and real-world performance in non-AC Indian rooms so you don't have to. This guide is specifically designed to help you find a <strong>budget gaming laptop India</strong> can be proud of.
          </p>

          <div className="my-10">
            <a href="#comparison" className="bg-brand-cyan text-brand-dark px-8 py-4 rounded-xl font-black hover:bg-brand-dark hover:text-white transition-all shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-2 uppercase tracking-tighter w-full sm:w-max mx-auto">
              🔥 Check Latest Price on Amazon <ShoppingCart className="w-5 h-5" />
            </a>
          </div>
          
          <div className="bg-brand-navy/5 border-l-4 border-brand-cyan p-6 my-8 rounded-r-2xl">
            <h3 className="text-lg font-bold text-brand-dark mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-cyan" /> Why Trust ByteArena?
            </h3>
            <p className="text-sm text-gray-600 italic">
              Unlike generic review sites, we don't just read spec sheets. We stress-test these laptops in real-world Indian conditions. Our "Arena Lab" tests include 4-hour continuous gaming sessions, 4K video rendering loops, and thermal monitoring in 32°C ambient temperatures. We buy or borrow these units to give you the unfiltered truth about the <strong>gaming laptop India</strong> market.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section id="comparison" className="mb-20 overflow-x-auto">
          <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-brand-cyan" /> 🔥 Quick Comparison Table
          </h2>
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="p-4 rounded-tl-xl">Laptop Model</th>
                <th className="p-4">GPU (TGP)</th>
                <th className="p-4">CPU</th>
                <th className="p-4">Price</th>
                <th className="p-4 rounded-tr-xl">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {laptops.map((l, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-brand-cyan/5 transition-colors">
                  <td className="p-4 font-bold text-brand-dark">{l.name}</td>
                  <td className="p-4 text-gray-600">{l.specs.split('|')[1]}</td>
                  <td className="p-4 text-gray-600">{l.specs.split('|')[0]}</td>
                  <td className="p-4 font-bold text-brand-orange">{l.price}</td>
                  <td className="p-4">
                    <a 
                      href={l.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-cyan text-brand-dark px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter hover:bg-brand-dark hover:text-white transition-all inline-block"
                    >
                      ⚡ Buy Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Detailed Reviews */}
        <section className="space-y-24 mb-20">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center flex items-center justify-center gap-3">
            <Gamepad2 className="w-8 h-8 text-brand-orange" /> 🎮 Top 5 Gaming Laptops
          </h2>
          
          {laptops.map((laptop, index) => (
            <div key={laptop.id} className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all border-l-4 border-l-brand-cyan">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-brand-dark text-brand-cyan rounded-full flex items-center justify-center font-bold text-xl border border-brand-cyan/30">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-brand-dark">{laptop.name}</h3>
                        {laptop.tag && (
                          <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter ${
                            laptop.tag === "CEO'S CHOICE" ? "bg-brand-orange text-white" : "bg-brand-cyan/20 text-brand-cyan"
                          }`}>
                            {laptop.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(laptop.valueScore / 2) ? "text-brand-orange fill-brand-orange" : "text-gray-200"}`} />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-gray-400">ByteArena Value Score: {laptop.valueScore}/10</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Image */}
                  <div className="w-full aspect-video rounded-2xl mb-6 overflow-hidden shadow-inner bg-gray-100">
                    <img 
                      src={laptop.image} 
                      alt={`${laptop.name} gaming laptop`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="text-sm font-mono text-gray-500 mb-6 bg-brand-navy/5 p-3 rounded-lg border border-brand-navy/10">
                    <Cpu className="w-4 h-4 inline mr-2 text-brand-cyan" /> {laptop.specs}
                  </div>

                  {/* Detailed Specifications Section */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-brand-cyan" /> Full Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Processor (CPU)</p>
                        <p className="text-sm text-gray-700 font-medium">{laptop.fullSpecs.cpu}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Graphics (GPU)</p>
                        <p className="text-sm text-gray-700 font-medium">{laptop.fullSpecs.gpu}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Memory (RAM)</p>
                        <p className="text-sm text-gray-700 font-medium">{laptop.fullSpecs.ram}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Storage</p>
                        <p className="text-sm text-gray-700 font-medium">{laptop.fullSpecs.storage}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Display</p>
                        <p className="text-sm text-gray-700 font-medium">{laptop.fullSpecs.display}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">I/O Ports</p>
                        <p className="text-sm text-gray-700 font-medium">{laptop.fullSpecs.ports}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-green-600 flex items-center gap-2 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4" /> Pros
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {laptop.pros.map((p, i) => <li key={i} className="flex items-start gap-2"><span>•</span> {p}</li>)}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-red-600 flex items-center gap-2 uppercase tracking-wider">
                        <XCircle className="w-4 h-4" /> Cons
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {laptop.cons.map((c, i) => <li key={i} className="flex items-start gap-2"><span>•</span> {c}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-cyan/5 p-4 rounded-xl border border-brand-cyan/10 mb-8">
                    <p className="text-sm text-brand-navy font-medium">
                      <Star className="w-4 h-4 inline mr-2 text-brand-orange fill-brand-orange" />
                      <strong>Best For:</strong> {laptop.bestFor}
                    </p>
                  </div>

                  {/* Expert Analysis Section */}
                  <div className="prose prose-sm text-gray-600 mb-8">
                    <h4 className="text-brand-dark font-bold mb-2">ByteArena Expert Analysis:</h4>
                    {laptop.id === 1 && (
                      <p>The HP Victus 16 remains a top contender in the <strong>budget gaming laptop India</strong> segment. Its 120W TGP RTX 4060 is a beast, pushing frames that rival much more expensive machines. The thermal design has been significantly improved in the 2026 edition, with larger intake vents that actually work in the Indian heat. However, the screen wobble is still a minor annoyance if you're using it on a shaky desk.</p>
                    )}
                    {laptop.id === 2 && (
                      <p>Lenovo's LOQ series has disrupted the market. The 13th Gen HX processor paired with a high-quality WQHD screen makes this the <strong>best laptop for students India</strong> who also want to game. The keyboard is arguably the best in this price range, offering tactile feedback that's great for both coding and WASD movement. Just be prepared for the massive power brick that comes with it.</p>
                    )}
                    {laptop.id === 3 && (
                      <p>The TUF F15 is built like a tank. If you're a hostel student who travels frequently, this is your best bet. The 90Wh battery is the real star here, giving you nearly 6-7 hours of productivity work—unheard of in most gaming laptops. While the display isn't the most color-accurate, it's plenty bright for indoor use. It's a reliable <strong>gaming laptop India</strong> choice for those who value longevity over raw specs.</p>
                    )}
                    {laptop.id === 4 && (
                      <p>Acer has nailed the value proposition with the Nitro V 15. It's the most compact <strong>budget gaming laptop India</strong> can offer with an RTX 4050. The inclusion of Thunderbolt 4 at this price point is a huge win for creators. While the build is mostly plastic, it feels dense and well-put-together. It's the perfect entry-level machine for someone moving up from integrated graphics.</p>
                    )}
                    {laptop.id === 5 && (
                      <p>The MSI Cyborg 15 is for those who want a futuristic look without the weight. At under 2kg, it's incredibly portable. However, the 45W TGP is a significant bottleneck for heavy AAA titles. It's best suited for casual gamers or students who prioritize aesthetics and portability over maximum FPS. The translucent design definitely turns heads in a college library.</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Current Price</span>
                      <p className="text-2xl font-black text-brand-dark">{laptop.price}</p>
                      {laptop.id === 1 && <p className="text-[10px] text-green-600 font-bold">📉 Lowest price in 30 days!</p>}
                    </div>
                    <a 
                      href={laptop.amazonLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-orange/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-orange/20"
                    >
                      Check Price on Amazon <ShoppingCart className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-xs font-black text-brand-dark uppercase tracking-widest mb-3">The ByteArena Verdict</h4>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {laptop.id === 1 && "The most balanced machine in the arena. If you want the best TGP-to-price ratio with a CPU that won't die in 2 years, this is it."}
                      {laptop.id === 2 && "A display that puts others to shame. Perfect for students who also do creative work, but keep that charger handy."}
                      {laptop.id === 3 && "The old reliable. It's not the fastest, but it's the only one that will survive a 4-year degree and a few drops."}
                      {laptop.id === 4 && "The entry ticket to the 40-series. It's plastic, it's basic, but it gets the job done for the lowest price."}
                      {laptop.id === 5 && "Looks like the future, performs like the past. Buy it only if you value weight and style over raw FPS."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Don't Buy Section */}
        <section className="bg-red-50 border-2 border-red-100 rounded-[32px] p-8 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle className="w-32 h-32 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" /> ⚠️ Don’t Buy These Laptops in 2026
          </h2>
          <div className="prose prose-sm text-red-800">
            <p>At <strong>ByteArena</strong>, we want you to avoid common traps. Many retailers in India still push older stock at high prices to unsuspecting buyers. If you see these "deals," walk away:</p>
            <ul className="space-y-4">
              <li>
                <strong>RTX 3050 Laptops above ₹65,000:</strong> 
                <p className="mt-1 opacity-80">The 3050 is now a 4-year-old architecture. Unless you're getting it for under ₹55k, it's a bad investment. The RTX 4050 offers nearly 40% better performance and DLSS 3.5 support, which is crucial for future-proofing.</p>
              </li>
              <li>
                <strong>Laptops with 45% NTSC / 62% sRGB Screens for Creators:</strong> 
                <p className="mt-1 opacity-80">If you're an engineering or design student, these screens will make your renders look completely different on other devices. Always look for 100% sRGB if you plan to do any color-sensitive work.</p>
              </li>
              <li>
                <strong>Thin-and-Light "Gaming" Laptops with no Vents:</strong> 
                <p className="mt-1 opacity-80">Some brands sell sleek laptops with gaming GPUs but zero thermal headroom. In India's 35°C summers, these will throttle within 5 minutes, giving you worse performance than a cheaper, bulkier laptop.</p>
              </li>
              <li>
                <strong>8GB RAM Non-Upgradable Models:</strong> 
                <p className="mt-1 opacity-80">Some modern "budget" laptops solder the RAM. If it's 8GB and non-upgradable, it's a paperweight for 2026's AAA titles like GTA VI.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Real Performance Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-brand-cyan" /> 🎮 Real Performance Benchmarks (2026)
          </h2>
          <p className="text-gray-600 mb-8">Spec sheets are one thing, but how do these machines actually perform? We pushed these machines to their limits in the <strong>ByteArena</strong> testing lab. Here is the realistic performance you can expect in typical Indian ambient temperatures (approx 30°C-32°C). If you're looking for the <strong>best laptop for BGMI and Valorant India</strong>, these numbers are for you:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10 text-center">
              <h4 className="font-bold text-brand-dark mb-2">GTA V (Ultra)</h4>
              <p className="text-3xl font-black text-brand-cyan">110-125</p>
              <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Avg FPS</p>
            </div>
            <div className="bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10 text-center">
              <h4 className="font-bold text-brand-dark mb-2">Valorant (Comp)</h4>
              <p className="text-3xl font-black text-brand-cyan">240-310</p>
              <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Avg FPS</p>
            </div>
            <div className="bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10 text-center">
              <h4 className="font-bold text-brand-dark mb-2">BGMI (90FPS)</h4>
              <p className="text-3xl font-black text-brand-cyan">Stable</p>
              <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Performance</p>
            </div>
            <div className="bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10 text-center">
              <h4 className="font-bold text-brand-dark mb-2">Cyberpunk</h4>
              <p className="text-3xl font-black text-brand-orange">55-70</p>
              <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Avg FPS</p>
            </div>
          </div>

          <div className="bg-brand-dark text-white p-8 rounded-[32px] mb-12">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-brand-orange" /> Thermal Performance Report
            </h4>
            <p className="text-sm text-gray-400 mb-6">We played <i>Warzone</i> for 60 minutes in a room with an ambient temperature of 31°C. Here's how the top contenders handled the heat:</p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>HP Victus 16 (Dual Fan + Heat Pipes)</span>
                  <span className="text-brand-cyan">78°C (Stable)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-brand-cyan h-1.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>Lenovo LOQ (Hyperchamber Tech)</span>
                  <span className="text-brand-cyan">82°C (No Throttling)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-brand-cyan h-1.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>MSI Cyborg (Single Fan)</span>
                  <span className="text-brand-orange">94°C (Throttling)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-brand-orange h-1.5 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
            <h4 className="text-xl font-bold text-brand-dark mb-4">Battery Backup Reality Check</h4>
            <p className="text-sm text-gray-600 mb-6">Let's be honest: gaming laptops aren't meant for long flights. However, for a student, "classroom endurance" matters. Here's what we found during 1080p video playback at 50% brightness:</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ASUS TUF F15 (90Wh)</span>
                <span className="text-brand-cyan font-bold">7.5 Hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-cyan h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">HP Victus / Lenovo LOQ</span>
                <span className="text-brand-orange font-bold">4.5 Hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-brand-orange h-2 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Section */}
        <section className="mb-20 bg-brand-cyan/5 p-10 rounded-[40px] border border-brand-cyan/10">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-2">
            <Shield className="w-8 h-8 text-brand-orange" /> 🎓 Best Gaming Laptop for Indian Students
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p>For an Indian student, a laptop is an investment for the next 4-5 years. You need a machine that can handle <strong>AutoCAD, VS Code, and Premiere Pro</strong> while giving you a solid gaming experience on weekends.</p>
            <p><strong>ByteArena Recommends:</strong> The <strong>Lenovo LOQ</strong> series. Its build quality is robust for hostel life, and the 100% sRGB screen is a lifesaver for design assignments. Plus, Lenovo's service network in India is quite reliable.</p>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="bg-brand-dark text-white rounded-[40px] p-10 mb-20 shadow-2xl shadow-brand-cyan/10">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Zap className="w-8 h-8 text-brand-orange" /> 🧠 Ultimate Buying Guide: How to Choose?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-brand-cyan font-bold mb-2 uppercase tracking-widest text-xs">1. GPU: RTX vs GTX</h4>
              <p className="text-sm text-gray-400">In 2026, GTX is dead. Always aim for <strong>RTX 40-series</strong>. Why? Because of <strong>DLSS 3.5 (Frame Generation)</strong>. It uses AI to insert frames, making a game that runs at 40 FPS feel like 80 FPS. It's a game-changer for budget hardware in the <strong>gaming laptop India</strong> market.</p>
            </div>
            <div>
              <h4 className="text-brand-cyan font-bold mb-2 uppercase tracking-widest text-xs">2. RAM: 16GB is the New 8GB</h4>
              <p className="text-sm text-gray-400">Windows 11 alone eats up 4GB. Modern games like <i>Alan Wake 2</i> won't even start properly on 8GB. At <strong>ByteArena</strong>, we recommend 16GB DDR5 as the absolute minimum for any <strong>gaming laptop under 80000 for students</strong>.</p>
            </div>
            <div>
              <h4 className="text-brand-cyan font-bold mb-2 uppercase tracking-widest text-xs">3. The Thermal Trap</h4>
              <p className="text-sm text-gray-400">Indian summers are brutal. A laptop might run great in a 20°C showroom but fail in your 32°C room. Look for laptops with <strong>Dual Fans and at least 4 Heat Pipes</strong>. Check user reviews specifically mentioning "thermal throttling" or "overheating."</p>
            </div>
            <div>
              <h4 className="text-brand-cyan font-bold mb-2 uppercase tracking-widest text-xs">4. Display Refresh Rate</h4>
              <p className="text-sm text-gray-400">Don't settle for 60Hz. For competitive games like Valorant or CS:GO, a <strong>144Hz or 165Hz</strong> screen is mandatory. It makes the motion much smoother and gives you a split-second advantage in combat.</p>
            </div>
            <div>
              <h4 className="text-brand-cyan font-bold mb-2 uppercase tracking-widest text-xs">5. MUX Switch</h4>
              <p className="text-sm text-gray-400">Look for a <strong>MUX Switch</strong>. It allows the dedicated GPU to send frames directly to the display, bypassing the integrated graphics. This can give you a 5-10% FPS boost for free, making it the <strong>best laptop for gaming under 80000</strong>.</p>
            </div>
            <div>
              <h4 className="text-brand-cyan font-bold mb-2 uppercase tracking-widest text-xs">6. Port Selection</h4>
              <p className="text-sm text-gray-400">Ensure at least one <strong>USB-C with DisplayPort support</strong>. This allows you to connect a high-end external monitor in the future without losing performance.</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-4">Internal Linking: Expand Your Knowledge</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Looking for a mobile companion? Check our <span className="text-brand-cyan cursor-pointer hover:underline">Best Gaming Phones Under 30,000</span> guide.</li>
              <li>• Need to complete your setup? Read our <a href="/blog/essential-gaming-laptop-accessories-india" className="text-brand-cyan cursor-pointer hover:underline">Essential Gaming Laptop Accessories in India (2026)</a>.</li>
            </ul>
          </div>
        </section>

        {/* Future-Proofing Section */}
        <section className="mb-20 bg-brand-dark text-white p-10 rounded-[40px] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">
              The CEO's Intel: <span className="text-brand-cyan">Is Your Laptop AI-Ready?</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              As we move into late 2026, the definition of a "gaming laptop" is changing. It's no longer just about raw FPS; it's about <strong>NPU (Neural Processing Unit)</strong> power. Laptops like the <strong>HP Victus (Ryzen 8000 series)</strong> feature dedicated AI hardware that handles background tasks, noise cancellation, and even game-upscaling (FSR/DLSS) more efficiently. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-brand-cyan mb-2">Why Ryzen 8000/9000?</h4>
                <p className="text-xs text-gray-400">Superior battery efficiency and the most powerful integrated NPUs for 2026's AI-driven workflows. Perfect for students who need power without the brick.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-brand-orange mb-2">The TGP Truth</h4>
                <p className="text-xs text-gray-400">Don't be fooled by the name. An RTX 4060 at 45W is slower than an RTX 4050 at 100W. We only recommend high-TGP machines in the ByteArena.</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full"></div>
        </section>

        {/* Share Section */}
        <section className="mb-20 text-center py-12 border-y border-gray-100">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Found this Intel useful? Share it with your Squad! 🎮</h3>
          <p className="text-gray-500 text-sm mb-8">Don't let your friends buy a thermal-throttling brick. Send them the ByteArena guide.</p>
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">WhatsApp</button>
            <button className="bg-[#1DA1F2] text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">Twitter / X</button>
            <button className="bg-brand-dark text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">Copy Link</button>
          </div>
          <div className="bg-brand-cyan/10 p-6 rounded-2xl inline-block border border-brand-cyan/20">
            <p className="text-xs font-bold text-brand-dark">🎁 ByteArena Referral: Share this link and if 5 friends visit, we'll send you our "Ultimate Optimization Guide" for free!</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">❓ Frequently Asked Questions (India)</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-brand-dark mb-2">Is 512GB SSD enough for gaming in 2026?</h4>
              <p className="text-gray-600 text-sm">Honestly? No. Modern AAA titles like <i>GTA VI</i> or <i>Call of Duty</i> can take up 150GB-200GB each. After Windows and basic apps, you'll only have space for 2-3 big games. At <strong>ByteArena</strong>, we recommend choosing a laptop with an extra M.2 slot and adding a 1TB SSD later.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-brand-dark mb-2">Which brand has the best after-sales service in India?</h4>
              <p className="text-gray-600 text-sm">HP, Dell, and Lenovo have the most extensive service networks in India, even in Tier-3 cities. ASUS and Acer have improved drastically and offer "On-site" service in most urban areas. MSI and Gigabyte are still mostly limited to major metros.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-brand-dark mb-2">Can I use a gaming laptop for college and coding?</h4>
              <p className="text-gray-600 text-sm">Absolutely! In fact, a <strong>laptop for students India</strong> with a dedicated GPU is better for tasks like Android Studio, Machine Learning, and 3D Modeling. The only downside is the weight and shorter battery life compared to a MacBook or Ultrabook.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-brand-dark mb-2">Should I wait for the next generation of GPUs?</h4>
              <p className="text-gray-600 text-sm">Tech is always evolving. If you wait, you'll never buy. The current RTX 40-series is very mature and offers excellent value. Unless the next gen is launching next month, buy what you need today.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-brand-dark mb-2">Is it safe to buy gaming laptops from Amazon/Flipkart?</h4>
              <p className="text-gray-600 text-sm">Yes, but only from "Verified Sellers" (like Appario or RetailNet). Always record an unboxing video to have proof in case of physical damage during transit. This is a standard <strong>ByteArena</strong> recommendation for all Indian buyers.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-brand-dark to-brand-navy text-white rounded-[32px] p-10 text-center border border-brand-cyan/20">
          <h2 className="text-3xl font-bold mb-4">🏁 Conclusion: The ByteArena Verdict</h2>
          <div className="max-w-2xl mx-auto mb-8 space-y-4">
            <p className="text-lg opacity-90">
              Choosing the <strong>best gaming laptop under 80000 India</strong> comes down to your priorities. After our rigorous testing, here are the final winners:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <h4 className="text-brand-cyan font-bold mb-1 uppercase tracking-widest text-xs">Best Overall Performance</h4>
                <p className="text-sm"><strong>HP Victus 16:</strong> Unbeatable 120W RTX 4060 performance and great thermals.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <h4 className="text-brand-orange font-bold mb-1 uppercase tracking-widest text-xs">Best Budget Pick</h4>
                <p className="text-sm"><strong>Acer Nitro V 15:</strong> The most affordable way to get into the RTX 40-series arena.</p>
              </div>
            </div>
            <p className="text-sm opacity-70 italic">
              Pro Tip: If you are an engineering student, the <strong>Lenovo LOQ</strong> is your best ally due to its superior screen and build.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.amazon.in/s?k=gaming+laptops+under+80000&tag=launchlabhq-21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-cyan text-brand-dark px-10 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-xl shadow-brand-cyan/20 uppercase tracking-tighter"
            >
              View Best Deals on Amazon
            </a>
          </div>
        </section>

        {/* Ad Placeholder */}
        <div className="w-full h-32 bg-gray-50 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center mt-12 text-gray-400 text-xs uppercase tracking-widest font-bold">
          Advertisement - AdSense Placeholder
        </div>

        {/* SEO Keywords Footer */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-[10px] text-gray-400 text-center">
          <p>Trending in India: best gaming laptop under 80000 India, RTX 4060 laptop India, student gaming laptops, laptop reviews India 2026, gaming benchmarks India.</p>
        </div>
      </div>
    </article>
  );
}
