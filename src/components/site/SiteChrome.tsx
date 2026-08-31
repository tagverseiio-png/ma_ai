import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { MaLogo } from '../MaLogo';
import { motion } from 'framer-motion';
import ctaLogo3d from '@/assets/cta-logo3d.png';

// Injecting precise fonts matching the mockup
export const fontStyles = `
  
  body {
    font-family: 'Space Grotesk', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .glass-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.05);
  }
`;

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Perfectly mimicking the continuous loop 'M' logo
export const Logo = ({ className = "w-8 h-8", light = false }) => (
  <MaLogo className={className} />
);

const navLinks = [
  { label: 'Services', to: '/#services' },
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[101] transition-all duration-300 ${scrolled || open ? 'bg-[#F4F4F0]/90 backdrop-blur-xl' : 'bg-[#F4F4F0]'} border-b border-black/10`}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-12 h-[80px] grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => setOpen(false)}>
            <MaLogo className="w-10 h-auto" />
            <span className="text-[#111111] font-bold text-[24px] tracking-tight">ma.ai</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-[#111111] transition-colors"
                activeProps={{ className: 'text-[#111111]' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 rounded-[40px] border-[1.5px] border-[#111111] text-[#111111] font-bold hover:bg-[#111111] hover:text-[#CCFF00] transition-all flex items-center gap-2"
            >
              Let's talk <ArrowRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden shrink-0 w-11 h-11 rounded-full border border-black/10 text-[#111111] flex items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-[100] bg-[#F4F4F0] border-t border-black/10 px-5 py-8 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-black/10 text-[#111111] text-[18px] font-bold tracking-[-0.03em] uppercase"
                activeProps={{ className: 'text-[#111111]' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#111111] text-[#CCFF00] text-[13px] tracking-[0.08em] uppercase font-semibold"
          >
            Let's talk <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </>
  );
};



const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); setEmail(''); }}
      className="flex relative"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => { setEmail(e.target.value); setSent(false); }}
        placeholder="Your email address"
        aria-label="Your email address"
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-[#111111] shadow-sm"
      />
      <button type="submit" aria-label="Subscribe" className="absolute right-1 top-1 bottom-1 bg-[#111111] text-[#CCFF00] px-5 rounded-md hover:bg-[#CCFF00] hover:text-[#111111] transition-colors flex items-center justify-center shadow-md">
        <ArrowRight size={18} />
      </button>
      {sent && (
        <p className="absolute -bottom-6 left-0 text-[12px] font-semibold text-[#111111]">Thanks — you're on the list.</p>
      )}
    </form>
  );
};

export const SiteFooter = () => {
  return (
    <footer className="bg-[#F4F4F0] pt-24 md:pt-40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        
        <div className="flex items-center mb-8">
          <span className="text-[#111111] text-[13px] tracking-[0.1em] uppercase font-bold">03 / START SOMETHING LOUD</span>
        </div>
        
        <h2 className="text-[52px] sm:text-[80px] md:text-[100px] lg:text-[110px] font-bold text-[#111111] leading-[0.9] tracking-[-0.05em] mb-12 md:mb-16 max-w-[1200px]">
          Bring the brief. We'll bring<br />the Future.
        </h2>

        <hr className="border-black/10" />

        <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="text-[#111111] text-[18px] md:text-[20px] font-medium">info@maonline.ai</span>
          
          <Link to="/contact" className="group px-8 py-4 rounded-[40px] bg-[#111111] text-white hover:opacity-90 transition-opacity text-[13px] tracking-[0.08em] uppercase font-bold flex items-center justify-center gap-3">
             MAKE IT MOVE <ArrowRight size={15} className="text-[#CCFF00] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <hr className="border-black/10" />

        <div className="py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-16 md:mb-24">
          <span className="text-gray-500 text-[11px] md:text-[12px] tracking-[0.1em] uppercase font-bold">BUILT IN CONVERSATION WITH</span>
          <div className="flex items-center gap-6 text-[#111111]">
             <span className="text-[22px] font-black tracking-tighter">AI</span>
             <span className="text-[22px]">✦</span>
             <span className="text-[26px] font-medium leading-none">∞</span>
          </div>
        </div>

        {/* Restored Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16 mb-16 md:mb-20">

          <div className="col-span-2 lg:col-span-2 lg:pr-12">
            <Link to="/" className="flex items-center mb-6">
              <MaLogo className="w-16 h-auto" />
            </Link>
            <p className="text-gray-600 text-[14px] mb-8 md:mb-12 font-normal leading-[1.5]">
              A team of strategists, creators and engineers building AI with purpose.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#111111] inline-block pb-2">Company</h4>
            <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
              <li><Link to="/about" className="hover:text-[#111111] transition-colors">About us</Link></li>
              <li><Link to="/work" className="hover:text-[#111111] transition-colors">Our work</Link></li>
              <li><Link to="/about" className="hover:text-[#111111] transition-colors">Team</Link></li>
              <li><Link to="/careers" className="hover:text-[#111111] transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-[#111111] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#111111] inline-block pb-2">Services</h4>
            <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
              <li><Link to="/services" className="hover:text-[#111111] transition-colors">AI Strategy</Link></li>
              <li><Link to="/services" className="hover:text-[#111111] transition-colors">Product Design</Link></li>
              <li><Link to="/services" className="hover:text-[#111111] transition-colors">Engineering</Link></li>
              <li><Link to="/services" className="hover:text-[#111111] transition-colors">Data & Intelligence</Link></li>
              <li><Link to="/services" className="hover:text-[#111111] transition-colors">Brand & Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#111111] inline-block pb-2">Resources</h4>
            <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
              <li><Link to="/work" className="hover:text-[#111111] transition-colors">Case studies</Link></li>
              <li><Link to="/insights" className="hover:text-[#111111] transition-colors">Insights</Link></li>
              <li><Link to="/insights" className="hover:text-[#111111] transition-colors">Newsroom</Link></li>
              <li><Link to="/faq" className="hover:text-[#111111] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <div className="mb-10">
              <h4 className="font-bold text-[#111111] mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#111111] inline-block pb-2">Get in touch</h4>
              <ul className="space-y-6 text-[14px] text-gray-600">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-200 text-[#111111] flex items-center justify-center shrink-0 shadow-sm"><Mail size={16} /></div>
                  <span className="font-medium text-[13px]">hello@ma.ai</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-200 text-[#111111] flex items-center justify-center shrink-0 shadow-sm"><Phone size={16} /></div>
                  <span className="font-medium text-[13px]">+91 95516 12345</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-200 text-[#111111] flex items-center justify-center shrink-0 mt-1 shadow-sm"><MapPin size={16} /></div>
                  <span className="leading-[1.6] font-medium text-[13px]">No. 34, 2nd Floor,<br />Eldams Road, Alwarpet,<br />Chennai – 600018, India</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Restored Connect & Newsletter row */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 mb-16 md:mb-24">
          <div className="max-w-[300px]">
            <h4 className="font-bold text-[#111111] mb-6 text-[12px] tracking-widest uppercase border-b-[2px] border-[#111111] inline-block pb-2">Connect</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#111111] hover:bg-[#CCFF00] transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#111111] hover:bg-[#CCFF00] transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#111111] hover:bg-[#CCFF00] transition-colors font-bold text-[20px]">X</a>
            </div>
          </div>
          <div className="w-full max-w-[400px]">
            <h4 className="font-bold text-[#111111] mb-6 text-[12px] tracking-widest uppercase border-b-[2px] border-[#111111] inline-block pb-2">Stay Updated</h4>
            <p className="text-gray-600 text-[13px] mb-4 mt-2 font-medium">Get insights on AI, strategy and what's next.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* The Bottom Banner */}
      <div className="w-full bg-[#CCFF00] py-6 px-5 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
         <div className="flex gap-4 items-center">
           <span className="text-[#111111] text-[12px] md:text-[13px] tracking-[0.1em] uppercase font-bold">MA.AI / 2026</span>
           <span className="text-[#111111] text-[12px] tracking-widest hidden md:inline">|</span>
           <div className="hidden md:flex gap-4 items-center text-[11px] font-bold uppercase tracking-widest text-[#111111]">
             <Link to="/privacy" className="hover:opacity-60 transition-opacity">Privacy Policy</Link>
             <Link to="/terms" className="hover:opacity-60 transition-opacity">Terms of Service</Link>
             <Link to="/cookies" className="hover:opacity-60 transition-opacity">Cookie Policy</Link>
           </div>
         </div>
         <span className="text-[#111111] text-[12px] md:text-[13px] tracking-[0.1em] uppercase font-bold">ADVERTISING AFTER THE ALGORITHM.</span>
      </div>
    </footer>
  );
};
