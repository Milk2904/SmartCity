import React from 'react';
import { motion } from 'framer-motion';
import { Compass, GraduationCap, Briefcase, Building, Map, ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { 
      title: 'Tourism', 
      icon: <Compass size={32} />, 
      path: '/tourism', 
      desc: 'Discover hidden gems and luxury stays.', 
      color: 'var(--accent)',
      className: 'md:col-span-2 md:row-span-2'
    },
    { 
      title: 'Students', 
      icon: <GraduationCap size={28} />, 
      path: '/student', 
      desc: 'Top-tier education hubs.', 
      color: 'var(--secondary)',
      className: 'md:col-span-1 md:row-span-1'
    },
    { 
      title: 'Jobseekers', 
      icon: <Briefcase size={28} />, 
      path: '/jobs', 
      desc: 'Elite career opportunities.', 
      color: 'var(--accent)',
      className: 'md:col-span-1 md:row-span-1'
    },
    { 
      title: 'Business', 
      icon: <Building size={32} />, 
      path: '/business', 
      desc: 'Connect with leading industries and city trade.', 
      color: 'var(--secondary)',
      className: 'md:col-span-2 md:row-span-1'
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Hero Section */}
      <section className="text-center mb-32 relative">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-heavy rounded-full mb-8 text-xs font-bold tracking-widest uppercase text-accent border-accent/20">
            <Sparkles size={14} /> The Future of Urban Living
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
            Welcome to <br />
            <span className="gradient-text">Metropolis</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Experience a smarter way to navigate your city. Discover essential services, career growth, and academic excellence in the heart of the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/tourism" className="btn-premium py-5 px-12 text-lg group">
              Start Exploring <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <button className="glass-heavy py-5 px-12 text-lg font-bold hover:bg-white/10 transition-all rounded-2xl flex items-center justify-center gap-3">
              <Play size={20} fill="currentColor" /> Watch Vision
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] -z-10 rounded-full"></div>
      </section>

      {/* Bento Grid Features */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Smart <span className="text-accent">Services</span></h2>
            <p className="text-text-muted text-lg">Four core pillars of our digital ecosystem.</p>
          </div>
          <Link to="/tourism" className="hidden md:flex items-center gap-2 text-accent font-bold hover:underline">
            View all services <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`glass-heavy p-8 rounded-[32px] group overflow-hidden relative cursor-pointer ${feature.className}`}
            >
              <Link to={feature.path} className="no-underline text-inherit w-full h-full flex flex-col">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-auto group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-text-muted text-base leading-snug max-w-[200px]">{feature.desc}</p>
                </div>
                
                {/* Background Glow */}
                <div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: feature.color }}
                ></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Experience Header */}
      <section className="mb-32">
        <div className="glass-heavy p-12 md:p-24 rounded-[48px] relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                The City <br />
                <span className="gradient-text">In Your Hands</span>
              </h2>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Our real-time interactive map provides a data-driven view of every street, service, and opportunity in the city.
              </p>
              <button className="btn-premium py-5 px-10 text-lg">
                <Map className="mr-2" /> Launch Map HUD
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="City Map" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl relative z-10 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-4 right-4 z-20 glass px-4 py-2 rounded-full text-xs font-bold text-accent animate-bounce">
                LIVE DATA CONNECTED
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

