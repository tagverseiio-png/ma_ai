import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight, Linkedin, Mail, Phone, MapPin, Instagram, Menu, X,
} from 'lucide-react';
import ctaLogo3d from '@/assets/cta-logo3d.png';

// Injecting precise fonts matching the mockup
export const fontStyles = `
  
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .font-serif-italic {
    font-family: 'Playfair Display', serif;
    font-style: italic;
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
  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M15 45 C 15 15, 35 10, 45 30 C 55 50, 75 55, 85 25 C 90 10, 75 10, 65 30 C 55 50, 35 50, 25 30 C 15 10, 0 15, 15 45 Z" 
      fill={light ? "url(#logo-grad-light)" : "url(#logo-grad)"} 
    />
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4F46E5" />
        <stop offset="0.5" stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#D946EF" />
      </linearGradient>
      <linearGradient id="logo-grad-light" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3730A3" />
        <stop offset="1" stopColor="#6B21A8" />
      </linearGradient>
    </defs>
  </svg>
);

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
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
    <nav className={`fixed top-0 w-full z-[101] transition-all duration-300 ${scrolled || open ? 'bg-[#05050A]/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2 md:gap-3 cursor-pointer" onClick={() => setOpen(false)}>
          <Logo className="w-10 h-7 shrink-0 md:w-12 md:h-8" />
          <span className="text-white font-bold text-[19px] md:text-[22px] tracking-tight mt-1">ma.ai</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[14px] font-medium text-gray-300">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8B5CF6] after:transition-transform after:duration-300 hover:after:scale-x-100"
              activeProps={{ className: 'text-white after:scale-x-100' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="hidden md:flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-semibold group">
          Let's talk <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden shrink-0 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>

    {open && (
      <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-[100] bg-[#05050A] border-t border-white/5 px-5 py-8 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-4 border-b border-white/5 text-white text-[20px] font-semibold tracking-tight"
              activeProps={{ className: 'text-[#8B5CF6]' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="mt-8 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#4F46E5] text-white text-[15px] font-semibold"
        >
          Let's talk <ArrowRight size={16} />
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
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] focus:outline-none focus:border-[#4F46E5] shadow-sm"
      />
      <button type="submit" aria-label="Subscribe" className="absolute right-1 top-1 bottom-1 bg-[#4F46E5] text-white px-5 rounded-md hover:bg-[#4338CA] transition-colors flex items-center justify-center shadow-md">
        <ArrowRight size={18} />
      </button>
      {sent && (
        <p className="absolute -bottom-6 left-0 text-[12px] font-semibold text-[#4F46E5]">Thanks — you're on the list.</p>
      )}
    </form>
  );
};

export const SiteFooter = () => {

  return (
    <footer className="bg-[#F8F9FC] pt-20 md:pt-32 pb-8 relative overflow-hidden">
      
      {/* Background delicate lines and orbs */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
         <svg viewBox="0 0 1000 1000" className="absolute top-[-10%] right-[-10%] w-[100%] h-[100%] fill-transparent stroke-[#E2E8F0] stroke-[1px]">
            <path d="M 0,500 C 400,800 600,200 1000,500" />
            <path d="M 0,600 C 500,900 500,100 1000,600" />
            <path d="M 0,400 C 300,700 700,300 1000,400" />
         </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 relative z-10">
        
        {/* Top Split Area */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 md:mb-40 gap-14 md:gap-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#4F46E5] font-medium text-[13px] tracking-widest">06</span>
              <div className="h-[1px] w-12 bg-[#4F46E5]/30"></div>
              <span className="text-gray-500 text-[11px] tracking-[0.2em] uppercase font-semibold">Let's create</span>
            </div>
            
            <h2 className="text-[36px] sm:text-[52px] md:text-[76px] font-bold text-gray-900 leading-[1.05] tracking-tight">You bring<br/>the idea.</h2>
            <h2 className="text-[36px] sm:text-[52px] md:text-[76px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] leading-[1.05] tracking-tight mb-8">We bring it<br/>to life.</h2>
            
            <p className="text-gray-600 mb-12 max-w-[420px] text-[17px] leading-[1.6] font-light">
              From strategy to execution, we partner with ambitious brands to build AI experiences that create impact and drive what's next.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-[#4F46E5] text-white text-[15px] font-semibold hover:bg-[#4338CA] transition-colors flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(79,70,229,0.3)]">
                Start a conversation <ArrowRight size={18} />
              </Link>
              <Link to="/work" className="px-8 py-4 rounded-full border-[1.5px] border-[#4F46E5] text-[#4F46E5] text-[15px] font-semibold hover:bg-[#EEF2FF] transition-colors flex items-center justify-center gap-3 bg-white">
                View our work <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Epic 3D Pedestal and Logo from Mockup */}
          <div className="w-full max-w-lg relative h-[320px] sm:h-[420px] lg:h-[500px] flex items-center justify-center">
             
             <div className="absolute inset-[10%] bg-[#C7D2FE]/50 blur-[90px] rounded-full"></div>
             <motion.img
               src={ctaLogo3d}
               alt="ma.ai 3D brand mark"
               loading="lazy"
               animate={{ y: [-12, 12, -12] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative z-10 w-[85%] h-auto drop-shadow-[0_40px_60px_rgba(79,70,229,0.25)]"
             />

             {/* Floating 3D Drops/Orbs */}
             <motion.div animate={{ y: [15, -15, 15] }} transition={{ repeat: Infinity, duration: 4.5 }} className="absolute top-[10%] left-[5%] w-12 h-12 rounded-full bg-gradient-to-tr from-[#D946EF] via-[#C4B5FD] to-white shadow-[0_10px_20px_rgba(139,92,246,0.3)] border border-white/50 backdrop-blur-md flex justify-end items-start p-1"><div className="w-3 h-3 bg-white rounded-full opacity-60 blur-[1px]"></div></motion.div>
             <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-[35%] right-[0%] w-8 h-8 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#A78BFA] to-white shadow-[0_10px_20px_rgba(139,92,246,0.3)] border border-white/50 backdrop-blur-md flex justify-end items-start p-1"><div className="w-2 h-2 bg-white rounded-full opacity-60 blur-[1px]"></div></motion.div>
             <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5.5 }} className="absolute top-[20%] right-[15%] w-6 h-6 rounded-full bg-gradient-to-tr from-[#4F46E5] to-white shadow-xl border border-white/50 backdrop-blur-md"></motion.div>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16 mb-16 md:mb-20">
          
          <div className="col-span-2 lg:col-span-2 lg:pr-12">

            <Link to="/" className="flex items-center gap-3 mb-6">
               <Logo light={false} className="w-12 h-8" />
               <span className="font-bold text-[22px] text-gray-900 tracking-tight mt-1">ma.ai</span>
            </Link>
            <p className="text-gray-600 text-[14px] mb-8 md:mb-12 font-light leading-[1.6]">
              A team of strategists, creators and engineers building AI with purpose.
            </p>
            <p className="text-gray-600 text-[13px] font-medium">
              © 2025 ma.ai<br/>All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#4F46E5] inline-block pb-2">Company</h4>
            <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
              <li><Link to="/about" className="hover:text-[#4F46E5] transition-colors">About us</Link></li>
              <li><Link to="/work" className="hover:text-[#4F46E5] transition-colors">Our work</Link></li>
              <li><Link to="/about" className="hover:text-[#4F46E5] transition-colors">Team</Link></li>
              <li><Link to="/careers" className="hover:text-[#4F46E5] transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-[#4F46E5] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#4F46E5] inline-block pb-2">Services</h4>
            <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
              <li><Link to="/services" className="hover:text-[#4F46E5] transition-colors">AI Strategy</Link></li>
              <li><Link to="/services" className="hover:text-[#4F46E5] transition-colors">Product Design</Link></li>
              <li><Link to="/services" className="hover:text-[#4F46E5] transition-colors">Engineering</Link></li>
              <li><Link to="/services" className="hover:text-[#4F46E5] transition-colors">Data & Intelligence</Link></li>
              <li><Link to="/services" className="hover:text-[#4F46E5] transition-colors">Brand & Experience</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#4F46E5] inline-block pb-2">Resources</h4>
            <ul className="space-y-4 text-[14px] text-gray-600 font-medium">
              <li><Link to="/work" className="hover:text-[#4F46E5] transition-colors">Case studies</Link></li>
              <li><Link to="/insights" className="hover:text-[#4F46E5] transition-colors">Insights</Link></li>
              <li><Link to="/insights" className="hover:text-[#4F46E5] transition-colors">Newsroom</Link></li>
              <li><Link to="/faq" className="hover:text-[#4F46E5] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
             <div className="mb-10">
               <h4 className="font-bold text-gray-900 mb-6 md:mb-8 text-[12px] tracking-widest uppercase border-b-[2px] border-[#4F46E5] inline-block pb-2">Get in touch</h4>
               <ul className="space-y-6 text-[14px] text-gray-600">
                 <li className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-200 text-[#4F46E5] flex items-center justify-center shrink-0 shadow-sm"><Mail size={16}/></div>
                   <span className="font-medium text-[13px]">hello@ma.ai</span>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-200 text-[#4F46E5] flex items-center justify-center shrink-0 shadow-sm"><Phone size={16}/></div>
                   <span className="font-medium text-[13px]">+91 95516 12345</span>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-200 text-[#4F46E5] flex items-center justify-center shrink-0 mt-1 shadow-sm"><MapPin size={16}/></div>
                   <span className="leading-[1.6] font-medium text-[13px]">No. 34, 2nd Floor,<br/>Eldams Road, Alwarpet,<br/>Chennai – 600018, India</span>
                 </li>
               </ul>
             </div>
          </div>
          
        </div>
        
        {/* Connect & Newsletter row */}
        <div className="flex flex-col lg:flex-row lg:justify-end gap-12 lg:gap-16 mb-16">
            <div className="max-w-[300px]">
                <h4 className="font-bold text-gray-900 mb-6 text-[12px] tracking-widest uppercase border-b-[2px] border-[#4F46E5] inline-block pb-2">Connect</h4>
                <div className="flex gap-4 mt-2">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="w-12 h-12 rounded-[12px] bg-white border border-gray-200 flex items-center justify-center text-[#4F46E5] hover:border-[#4F46E5] transition-colors shadow-sm"><Instagram size={20} /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="w-12 h-12 rounded-[12px] bg-white border border-gray-200 flex items-center justify-center text-[#4F46E5] hover:border-[#4F46E5] transition-colors shadow-sm"><Linkedin size={20} /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" className="w-12 h-12 rounded-[12px] bg-white border border-gray-200 flex items-center justify-center text-[#4F46E5] hover:border-[#4F46E5] transition-colors shadow-sm font-bold text-[20px]">X</a>
                </div>
            </div>
            <div className="w-full max-w-[400px]">
                <h4 className="font-bold text-gray-900 mb-6 text-[12px] tracking-widest uppercase border-b-[2px] border-[#4F46E5] inline-block pb-2">Stay Updated</h4>
                <p className="text-gray-600 text-[13px] mb-4 mt-2 font-medium">Get insights on AI, strategy and what's next.</p>
                <NewsletterForm />

            </div>
        </div>

        {/* Footer Bottom Metadata */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left text-[12px] font-semibold text-gray-500">
           <div className="flex items-center gap-4">
              <span className="flex items-center gap-2"><MapPin size={14} className="text-[#4F46E5]" /> Chennai, India</span>
              <span className="hidden md:inline text-gray-300">|</span>
              <span>Working globally</span>
           </div>
           
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
               <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
               <span className="text-gray-300">|</span>
               <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
               <span className="text-gray-300">|</span>
               <Link to="/cookies" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
            </div>

           <div className="flex items-center gap-2 text-gray-600">
              © {new Date().getFullYear()} ma.ai
           </div>
        </div>
      </div>
    </footer>
  );
};
