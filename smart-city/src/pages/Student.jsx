import React from 'react';
import { mockData } from '../data/mockData';
import ModuleCard from '../components/ModuleCard';
import { BookOpen, GraduationCap, School, Sparkles, ArrowRight, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Student = () => {
  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      {/* Dynamic Header & Stats */}
      <div className="flex flex-col lg:flex-row items-center gap-20 mb-32 glass-heavy p-12 md:p-20 rounded-[60px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex-[1.2] text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8 text-[10px] font-black tracking-[0.2em] uppercase text-accent border-accent/20">
              <Sparkles size={12} /> Academic Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              Nurturing <br />
              <span className="gradient-text">Metro Minds</span>
            </h1>
            <p className="text-xl text-text-secondary mb-12 leading-relaxed font-medium">
              Discover a world-class educational ecosystem. From prestigious universities to innovative research hubs, MetroGuide is where the future begins.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="glass px-8 py-5 rounded-3xl flex items-center gap-4 hover:bg-white/10 transition-colors border-white/5">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                  <School size={24} />
                </div>
                <div>
                  <span className="block font-black text-2xl tracking-tight">50+</span>
                  <span className="text-[10px] text-text-muted uppercase font-black tracking-widest">Institutions</span>
                </div>
              </div>
              <div className="glass px-8 py-5 rounded-3xl flex items-center gap-4 hover:bg-white/10 transition-colors border-white/5">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                  <BookOpen size={24} />
                </div>
                <div>
                  <span className="block font-black text-2xl tracking-tight">20+</span>
                  <span className="text-[10px] text-text-muted uppercase font-black tracking-widest">Libraries</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 w-full max-w-xl relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-accent/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=800" 
            alt="Student Life" 
            className="rounded-[40px] shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-700 border border-white/10"
          />
          {/* Floating UI Element */}
          <div className="absolute -bottom-6 -left-6 z-20 glass px-6 py-4 rounded-3xl hidden md:block animate-bounce shadow-2xl border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                <MousePointer2 size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-bold">Admissions Open</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-black tracking-tight">Featured <span className="text-accent">Campus</span></h2>
        <div className="h-px flex-1 bg-white/5 mx-12 hidden md:block"></div>
        <p className="text-text-muted hidden lg:block uppercase text-[10px] font-black tracking-[0.2em]">Scroll to explore</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        {mockData.students.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <ModuleCard item={item} type="student" />
          </motion.div>
        ))}
      </div>
      
      {/* High-Impact CTA */}
      <section className="relative overflow-hidden rounded-[60px] glass-heavy p-20 text-center border-white/5 group">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 opacity-50"></div>
        <div className="relative z-10">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
            <GraduationCap size={40} className="text-accent" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Ready to Start Your <br /><span className="gradient-text">Academic Journey?</span></h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with our certified educational advisors. We'll help you map out your academic path from high school to PhD.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-premium px-12 py-5 text-xl font-black group">
              Consult Advisor <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="glass-heavy px-12 py-5 text-xl font-black hover:bg-white/10 transition-all rounded-2xl">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Student;

