import React from 'react';
import { mockData } from '../data/mockData';
import { LayoutDashboard, Users, MessageSquare, Database, LogOut, Settings, Upload, CheckCircle, Bell, ChevronRight, Activity, BarChart3, PieChart, TrendingUp, Globe, Briefcase, Zap, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Business = () => {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="text-center mb-32 animate-fade-in">
        <div className="inline-block px-5 py-1.5 glass mb-8 text-[10px] font-black tracking-widest uppercase text-accent border-accent/20 rounded-full">
          Capital Infrastructure
        </div>
        <h1 className="text-7xl md:text-9xl font-black mb-10 font-heading leading-[0.85] tracking-tighter italic">
          Metropolis <br />
          <span className="gradient-text">Economic Hub</span>
        </h1>
        <p className="text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
          Strategic data and real-time market dynamics. Navigating the city's trade corridors and industrial advancements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Dynamic News Bento Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                   <TrendingUp size={24} />
                </div>
                <h2 className="text-4xl font-black font-heading tracking-tight">Intelligence <span className="text-accent">Live</span></h2>
             </div>
          </div>
          
          {mockData.business.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`glass-heavy p-8 rounded-[40px] group relative overflow-hidden flex flex-col h-full ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 -z-10">
                 <img src={item.image} alt="" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 scale-110 group-hover:scale-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent"></div>
              </div>

              <div className="flex justify-between items-start mb-6 w-full">
                <span className={`px-5 py-1.5 glass text-[10px] font-black uppercase tracking-widest rounded-full ${
                  item.impact === 'High Growth' ? 'text-green-400' : 'text-accent'
                }`}>
                  {item.impact} Update
                </span>
                <div className="p-3 glass rounded-2xl group-hover:bg-accent group-hover:text-bg-primary transition-all duration-500">
                   <Activity size={18} />
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-black mb-4 font-heading group-hover:text-accent transition-colors leading-tight tracking-tight">{item.title}</h3>
                <p className="text-text-secondary text-base leading-relaxed mb-8 opacity-80">{item.news}</p>
                <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-accent group-hover:gap-4 transition-all">
                  Access Intelligence <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Financial Ecosystem Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           <div className="glass-heavy p-10 rounded-[40px]">
              <div className="flex items-center gap-3 mb-10">
                 <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                    <BarChart3 size={20} />
                 </div>
                 <h2 className="text-2xl font-black font-heading">Market Index</h2>
              </div>
              
              <div className="space-y-6">
                 <div className="flex justify-between items-end p-6 glass bg-white/5 rounded-3xl">
                    <div>
                       <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">GDP Velocity</p>
                       <h4 className="text-4xl font-black font-heading gradient-text">+4.2%</h4>
                    </div>
                    <div className="text-green-400 text-xs font-bold bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">↑ ATH</div>
                 </div>
                 
                 <div className="flex justify-between items-end p-6 glass bg-white/5 rounded-3xl">
                    <div>
                       <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Inbound Capital</p>
                       <h4 className="text-4xl font-black font-heading gradient-text">$5.0B</h4>
                    </div>
                    <div className="text-accent text-xs font-bold bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Stable</div>
                 </div>
              </div>
           </div>

           <div className="glass-heavy p-10 rounded-[40px]">
              <h3 className="text-xl font-black mb-8 font-heading flex items-center gap-3 italic">
                 <Zap size={20} className="text-accent" /> Prime Industries
              </h3>
              <div className="space-y-4">
                 {[
                   { name: "AI Architecture", status: "Hyper Scaling", color: "var(--accent)" },
                   { name: "Orbital Green Energy", status: "Stable Growth", color: "hsl(142, 70%, 45%)" },
                   { name: "Quantum Logistics", status: "Critical Path", color: "var(--secondary)" }
                 ].map((ind, i) => (
                   <div key={i} className="flex flex-col gap-1 p-6 glass bg-white/5 hover:bg-glass-border/30 transition-all cursor-pointer rounded-2xl group overflow-hidden relative">
                     <div className="absolute top-0 right-0 w-1 h-full opacity-40 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: ind.color }}></div>
                     <span className="font-black text-lg tracking-tight mb-1">{ind.name}</span>
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-60" style={{ color: ind.color }}>{ind.status}</span>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-10 btn-premium py-5 group shadow-none hover:shadow-2xl">
                 Expand Sector Analysis <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};


export default Business;

