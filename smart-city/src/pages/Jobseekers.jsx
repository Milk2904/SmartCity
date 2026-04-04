import React from 'react';
import { mockData } from '../data/mockData';
import { Briefcase, Building2, TrendingUp, Users, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Jobseekers = () => {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-20 animate-fade-in">
        <div className="inline-block px-4 py-1 glass mb-6 text-xs font-bold tracking-widest uppercase text-accent">
          Economic Empowerment
        </div>
        <h1 className="text-6xl font-black mb-6 font-heading leading-tight">
          Career <span className="gradient-text">Acceleration</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between talent and industry. Connecting Metropolis citizens with frontrunning companies and cutting-edge opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 text-center">
        {[
          { icon: TrendingUp, title: "High Demand", text: "Tech, AI, and Sustainability sectors are skyrocketing.", color: "var(--accent)" },
          { icon: Building2, title: "700+ Partners", text: "From agile startups to global conglomerate giants.", color: "var(--secondary)" },
          { icon: Users, title: "25k+ Placements", text: "Join our expanding network of city professionals.", color: "var(--accent)" }
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-10 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-8 translate-x-8"></div>
            <stat.icon className="mx-auto mb-6 transition-transform group-hover:scale-110 duration-500" size={48} style={{ color: stat.color }} />
            <h3 className="text-2xl font-bold mb-3 font-heading">{stat.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{stat.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold font-heading">Featured <span className="gradient-text">Openings</span></h2>
          <span className="text-text-muted text-sm">Showing {mockData.jobs.length} premium listings</span>
        </div>
        
        {mockData.jobs.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-heavy p-8 rounded-[40px] flex flex-col md:flex-row items-center gap-10 group hover:bg-white/5 transition-all duration-700 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="w-full md:w-48 h-48 rounded-[32px] overflow-hidden flex-shrink-0 shadow-2xl">
              <img src={job.image} alt={job.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="flex-1 relative z-10 w-full">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-5 py-1.5 glass text-accent text-[10px] font-black rounded-full uppercase tracking-widest">{job.industry}</span>
                <span className="px-5 py-1.5 glass text-secondary text-[10px] font-black rounded-full uppercase tracking-widest">{job.type}</span>
              </div>
              <h3 className="text-4xl font-black mb-3 group-hover:text-accent transition-colors font-heading leading-tight tracking-tighter">{job.title}</h3>
              <div className="flex items-center gap-6 text-text-secondary text-sm font-medium">
                <div className="flex items-center gap-2"><Building2 size={18} className="text-accent" /> {job.company}</div>
                <div className="flex items-center gap-2 font-bold text-primary italic"><DollarSign size={18} className="text-secondary" /> {job.salary}</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4 min-w-[220px] w-full md:w-auto relative z-10">
              <button className="btn-premium px-10 py-5 w-full md:w-auto text-lg hover:scale-105 active:scale-95 transition-transform">
                Apply Fast <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform ml-2" />
              </button>
              <p className="text-[10px] text-text-muted font-black uppercase tracking-widest opacity-60">Verified {idx + 1}h ago</p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Jobseekers;

