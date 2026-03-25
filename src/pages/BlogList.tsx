import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const posts = [
    {
      title: "ByteArena’s Top Gaming Laptops Under ₹80,000 in India (2026) 🔥",
      excerpt: "We tested 15+ laptops to find the absolute beasts for Indian students and gamers. No lag, just performance.",
      link: "/blog/best-gaming-laptops-under-80000-india",
      readTime: "12 Min",
      category: "Gaming"
    },
    {
      title: "Essential Gaming Laptop Accessories in India (2026) ⚡",
      excerpt: "From monitors to cooling pads, here is the CEO's curated list of must-have gear for your battle station.",
      link: "/blog/essential-gaming-laptop-accessories-india",
      readTime: "10 Min",
      category: "Accessories"
    }
  ];

  const extraTopics = [
    {
      title: "Best Laptops for Students in India (Non-Gaming)",
      outline: [
        "Why Non-Gaming? Battery and Weight focus.",
        "MacBook Air M1/M2: Still the king for students?",
        "Windows Alternatives: ASUS Vivobook & HP Pavilion.",
        "The OLED Advantage: Why it matters for movies.",
        "Battery Life: Laptops that last a full college day.",
        "Conclusion: Choosing the right daily driver."
      ],
      readTime: "9 Min",
      category: "Laptops"
    },
    {
      title: "MacBook Air M2 vs M3: Which is better for Indian Users?",
      outline: [
        "Price Comparison: Current Indian Market Rates.",
        "Performance: M2 vs M3 chip benchmarks.",
        "Display & Design: Any major changes?",
        "Battery Life: Real-world endurance tests.",
        "Value for Money: Is the M3 worth the premium?",
        "Conclusion: The ByteArena Recommendation."
      ],
      readTime: "11 Min",
      category: "Apple"
    },
    {
      title: "Top 5 Laptops for Video Editing Under ₹1 Lakh",
      outline: [
        "The Editing Arena: Why CPU & RAM matter most.",
        "Color Accuracy: Why 100% sRGB is non-negotiable.",
        "Top Picks: ASUS Vivobook Pro, HP Envy, and more.",
        "GPU Acceleration: How RTX helps in Premiere Pro.",
        "Storage: The need for fast NVMe Gen4 SSDs.",
        "Conclusion: Best workstation on a budget."
      ],
      readTime: "13 Min",
      category: "Workstation"
    },
    {
      title: "How to Increase Laptop Battery Life (2026 Guide)",
      outline: [
        "Battery Health: Tips to prevent degradation.",
        "Software Tweaks: Windows & macOS settings.",
        "Hardware Maintenance: Cleaning fans and repasting.",
        "External Power: When to stay plugged in.",
        "Travel Tips: Managing power on the go.",
        "Conclusion: Making your laptop last longer."
      ],
      readTime: "8 Min",
      category: "Guides"
    },
    {
      title: "Upcoming Laptops in India: What to Expect in Late 2026",
      outline: [
        "Next-Gen Chips: Intel Arrow Lake & AMD Zen 5.",
        "AI Integration: The rise of AI PCs.",
        "Display Trends: Tandem OLED & 240Hz mainstream.",
        "New Form Factors: Foldable laptops & dual screens.",
        "Price Predictions: Will laptops get more expensive?",
        "Conclusion: Should you wait or buy now?"
      ],
      readTime: "10 Min",
      category: "Future"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-black text-brand-dark mb-4 uppercase tracking-tight">Expert <span className="text-brand-cyan">Laptop Reviews</span> & Buying Guides</h1>
          <p className="text-lg text-gray-600 font-medium">Explore our latest hardware intel, from the best gaming laptop under 80000 India to student workstation picks.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-20">
          {posts.map((post, i) => (
            <div key={i} className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand-cyan/10 text-brand-cyan px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-cyan transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 mb-6 font-medium leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={post.link} className="bg-brand-dark text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-dark transition-all inline-flex items-center gap-2">
                    Read Full Intel <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">Upcoming <span className="text-brand-orange">Intel</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {extraTopics.map((topic, i) => (
            <div key={i} className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand-cyan/10 text-brand-cyan px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {topic.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {topic.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-cyan transition-colors">
                    {topic.title}
                  </h2>
                  <div className="bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10 mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Content Outline
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {topic.outline.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-brand-cyan font-bold">{idx + 1}.</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-brand-cyan font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Coming Soon <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
