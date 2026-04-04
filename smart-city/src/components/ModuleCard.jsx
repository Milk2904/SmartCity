import React from 'react';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ModuleCard = ({ item, type }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className="glass-heavy rounded-[32px] overflow-hidden h-full flex flex-col group border-white/5 hover:border-accent/30 transition-colors duration-500"
    >
      <div className="relative h-64 overflow-hidden m-3 rounded-[24px]">
        <img 
          src={item.image} 
          alt={item.name || item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 px-4 py-1.5 glass rounded-full text-[10px] font-black text-white uppercase tracking-widest border-white/10">
          {item.category || item.industry}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
            {item.name || item.title}
          </h3>
          {item.rating && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5">
              <Star size={14} className="text-secondary" fill="currentColor" />
              <span className="text-sm font-black text-secondary">{item.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-text-muted text-base mb-8 flex-1 leading-relaxed line-clamp-3">
          {item.description || item.news}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex flex-col gap-1">
            {item.location && (
              <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-black uppercase tracking-widest">
                <MapPin size={12} className="text-accent" /> {item.location}
              </div>
            )}
            <div className="flex items-center gap-2">
              {item.salary && (
                <span className="text-accent font-black text-xl italic tracking-tighter">{item.salary}</span>
              )}
              {item.price && (
                <span className="text-accent font-black text-xl italic tracking-tighter">{item.price}</span>
              )}
            </div>
          </div>
          <button className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white group-hover:bg-accent group-hover:text-bg-primary group-hover:scale-110 transition-all duration-500 border-white/5 group-hover:border-transparent shadow-xl">
            <ArrowUpRight size={24} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default ModuleCard;

