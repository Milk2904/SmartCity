import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


const Twitter = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Facebook = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  return (
    <footer className="w-full py-20 px-6 mt-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="glass-heavy p-12 md:p-16 rounded-[48px] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-3xl font-black font-heading gradient-text no-underline tracking-tighter">Metropolis</Link>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                Designing the future of urban intelligence. Our mission is to empower citizens through seamless data integration and sustainable innovation.
              </p>
              <div className="flex gap-4">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-text-secondary hover:bg-accent hover:text-bg-primary transition-all duration-500 hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">Discover Sector</h4>
              <ul className="flex flex-col gap-4 list-none p-0">
                <li><Link to="/tourism" className="text-text-secondary hover:text-accent no-underline transition-colors text-sm font-medium">Tourism & Leisure</Link></li>
                <li><Link to="/student" className="text-text-secondary hover:text-accent no-underline transition-colors text-sm font-medium">Student Research</Link></li>
                <li><Link to="/jobs" className="text-text-secondary hover:text-accent no-underline transition-colors text-sm font-medium">Career Portal</Link></li>
                <li><Link to="/business" className="text-text-secondary hover:text-accent no-underline transition-colors text-sm font-medium">Business Infra</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">Assistance</h4>
              <ul className="flex flex-col gap-4 list-none p-0">
                <li className="flex items-center gap-3 text-text-secondary text-sm"><div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div> 911 Emergency Unit</li>
                <li className="flex items-center gap-3 text-text-secondary text-sm"><Phone size={14} className="text-accent" /> +1 (800) METRO</li>
                <li className="flex items-center gap-3 text-text-secondary text-sm"><Mail size={14} className="text-accent" /> intel@metropolis.io</li>
                <li className="flex items-center gap-3 text-text-secondary text-sm"><MapPin size={14} className="text-accent" /> Sector 7, Core Plaza</li>
              </ul>
            </div>
            
            <div className="glass p-8 bg-white/5 rounded-[32px] border-white/5">
              <h4 className="font-bold mb-4 text-primary text-sm uppercase tracking-tighter">Project Newsletter</h4>
              <p className="text-text-muted text-xs mb-6">Receive city-wide updates and infrastructure reports.</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Email addr..." className="bg-bg-primary/50 border border-white/5 text-xs p-3 rounded-xl focus:outline-none focus:border-accent w-full text-white" />
                <button className="btn-premium px-4 rounded-xl shadow-none">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-text-muted">
          <p>© 2026 Metropolis Smart City Infrastructure. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent no-underline transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-accent no-underline transition-colors">Terms of Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

