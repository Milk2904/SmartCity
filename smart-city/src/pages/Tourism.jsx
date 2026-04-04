import React, { useState } from 'react';
import { mockData } from '../data/mockData';
import ModuleCard from '../components/ModuleCard';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Tourism = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = mockData.tourism.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-32 min-h-screen">
      {/* Cinematic Header */}
      <div className="text-center mb-24 relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 text-[10px] font-black tracking-[0.2em] uppercase text-accent border-accent/20">
            <Sparkles size={12} /> Premier Destinations
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Explore <span className="gradient-text">City Tourism</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            From the neon-lit boulevards to the serene luxury estates, discover the pulse of MetroGuide.
          </p>
          
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700"></div>
            <div className="flex items-center glass-heavy p-2 rounded-3xl focus-within:ring-4 ring-accent/10 transition-all border-white/5">
              <Search className="ml-6 text-text-muted group-focus-within:text-accent transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="Search hotels, attractions, parks..." 
                className="w-full bg-transparent border-none text-white px-6 py-6 focus:outline-none text-lg font-medium placeholder:text-text-muted/50"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="mr-2 p-4 glass rounded-2xl hover:bg-white/10 transition-colors text-text-secondary">
                <SlidersHorizontal size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Section */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode='popLayout'>
          {filteredData.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <ModuleCard item={item} type="tourism" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredData.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-40 glass-heavy max-w-2xl mx-auto rounded-[40px] border-white/5"
        >
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search size={40} className="text-text-muted opacity-40" />
          </div>
          <h3 className="text-3xl font-bold mb-4">No results found</h3>
          <p className="text-text-muted text-lg max-w-sm mx-auto">
            We couldn't find anything matching "<span className="text-white">{searchTerm}</span>". Try a different search term.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Tourism;

