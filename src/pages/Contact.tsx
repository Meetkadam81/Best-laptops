import { Mail, MapPin, Send, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-brand-dark mb-4 uppercase tracking-tight">Contact <span className="text-brand-cyan">ByteArena</span></h1>
          <p className="text-lg text-gray-600 font-medium">Have a question about the <strong>best gaming laptop under 80000 India</strong> or a business inquiry? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-brand-dark mb-1">Email</h4>
            <p className="text-sm text-gray-500">contact@bytearena.in</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
              <Twitter className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-brand-dark mb-1">Twitter</h4>
            <p className="text-sm text-gray-500">@ByteArenaIndia</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-cyan">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-brand-dark mb-1">Office</h4>
            <p className="text-sm text-gray-500">Bangalore, India</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Your message here..."></textarea>
            </div>
            <button type="button" className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-all flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
