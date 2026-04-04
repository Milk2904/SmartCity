import React, { useState } from 'react';
import { LayoutDashboard, Users, MessageSquare, Database, LogOut, Settings, Upload, CheckCircle, Bell, ChevronRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Administration = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotification, setShowNotification] = useState(false);

  const handleUpdate = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
    { id: 'users', icon: Users, label: 'User Hub' },
    { id: 'data', icon: Database, label: 'Infrastructure' },
    { id: 'messages', icon: MessageSquare, label: 'Citizen Reports' },
    { id: 'settings', icon: Settings, label: 'System Config' }
  ];

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 glass p-8 h-fit lg:sticky lg:top-24 animate-fade-in order-2 lg:order-1">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-accent rounded-lg text-white shadow-lg shadow-accent/40">
            <Settings size={20} />
          </div>
          <h2 className="text-xl font-bold font-heading gradient-text">Control Center</h2>
        </div>
        
        <nav className="flex flex-col gap-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id 
                ? 'bg-accent text-white shadow-xl shadow-accent/20' 
                : 'hover:bg-glass-border text-text-secondary'
              }`}
            >
              <div className="flex items-center gap-4">
                <item.icon size={20} className={activeTab === item.id ? 'text-white' : 'text-accent group-hover:text-primary'} />
                <span className="font-bold text-sm">{item.label}</span>
              </div>
              <ChevronRight size={14} className={`transition-transform duration-300 ${activeTab === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
            </button>
          ))}
        </nav>
        
        <div className="mt-12 pt-8">
          <div className="glass-heavy p-6 mb-6 bg-accent/5 border-accent/20 rounded-[24px]">
             <div className="flex items-center gap-2 mb-2">
                <Bell size={14} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">System Status</span>
             </div>
             <p className="text-[11px] text-text-muted leading-tight">All systems operational. Next maintenance in 4 days.</p>
          </div>
          <button className="flex items-center gap-3 px-6 py-4 text-red-400 hover:text-red-300 w-full transition-colors text-sm font-bold group glass rounded-[20px] hover:bg-red-500/10">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-6xl font-black font-heading leading-tight italic tracking-tighter">System <span className="gradient-text">Architecture</span></h1>
            <p className="text-text-secondary text-lg font-medium">Metropolis Digital Infrastructure Hub.</p>
          </div>
          <button onClick={handleUpdate} className="btn-premium py-5 px-10 group">
            <Upload size={20} className="group-hover:-translate-y-1 transition-transform" /> Global Deploy
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Total Engagement", value: "1.28M", trend: "+12%", bg: "from-accent/20", icon: Activity },
            { label: "Digital Citizens", value: "48.2K", trend: "+5%", bg: "from-secondary/20", icon: Users },
            { label: "Network Health", value: "99.9%", trend: "Stable", bg: "from-green-500/10", icon: Database }
          ].map((stat, i) => (
            <div key={i} className={`glass-heavy p-10 bg-gradient-to-br ${stat.bg} to-transparent relative group overflow-hidden rounded-[40px] hover:translate-y-[-4px] transition-all duration-500`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <p className="text-text-muted text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                <stat.icon size={18} className="text-white/20 group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-baseline gap-2 relative z-10">
                <h3 className="text-6xl font-black font-heading tracking-tighter italic">{stat.value}</h3>
                <span className={`text-[10px] font-black uppercase ${stat.trend.includes('+') ? 'text-green-400' : 'text-accent'}`}>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Configuration Area */}
        <div className="glass-heavy p-12 rounded-[56px] relative overflow-hidden border-white/5">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-secondary to-accent opacity-20"></div>
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-black font-heading tracking-tight italic">Core <span className="text-accent">Systems</span></h2>
              <p className="text-text-muted text-xs font-medium uppercase tracking-widest mt-1">Infrastructure Provisioning</p>
            </div>
            <button className="text-accent text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors cursor-pointer glass px-5 py-2 rounded-full border-accent/20">
              Manual Sync Protocol
            </button>
          </div>
          
          <div className="space-y-6">
            {[
              { name: 'Leisure & Tourism', status: 'Online', lastUpdate: '2 mins ago', type: 'Frontend' },
              { name: 'Academic Center', status: 'Online', lastUpdate: '14 mins ago', type: 'Frontend' },
              { name: 'Economic Portal', status: 'Updating', lastUpdate: 'Now', type: 'Backend' },
              { name: 'Admin Infrastructure', status: 'Online', lastUpdate: '1 hour ago', type: 'System' }
            ].map((module, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-8 glass bg-bg-tertiary/10 hover:bg-white/5 transition-all group rounded-[40px] border-white/0 hover:border-white/5">
                <div className="flex items-center gap-8 w-full md:w-auto mb-6 md:mb-0">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${module.status === 'Updating' ? 'bg-yellow-400 animate-pulse shadow-[0_0_20px_hsla(45,93%,47%,0.6)]' : 'bg-green-400 shadow-[0_0_20px_hsla(142,70%,45%,0.6)]'}`}></div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-heading group-hover:text-accent transition-colors tracking-tighter italic">{module.name}</h4>
                    <div className="flex items-center gap-4 text-[10px] text-text-muted font-black uppercase tracking-widest mt-2">
                       <span className="px-3 py-1 glass rounded-lg bg-accent/5 text-accent">{module.type}</span>
                       <span className="opacity-20 text-lg">/</span>
                       <span className="flex items-center gap-1.5"><Activity size={10} className="text-secondary" /> Sync: {module.lastUpdate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-8 py-3 glass text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all rounded-2xl">Audit</button>
                  <button className="flex-1 md:flex-none btn-premium py-3 px-8 text-[10px] shadow-none rounded-2xl group/btn">
                    Modify <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-12 p-8 border-2 border-dashed border-glass-border rounded-[40px] text-text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
             <LayoutDashboard size={16} /> + Provision New City Module
          </button>
        </div>
      </main>


      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 right-10 glass bg-primary border-accent/50 p-8 flex items-center gap-6 z-[100] shadow-2xl shadow-accent/20 max-w-md"
          >
            <div className="p-3 bg-accent rounded-2xl text-white shadow-lg">
               <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold font-heading text-primary">Deployment Complete</h4>
              <p className="text-sm text-text-secondary leading-relaxed">System-wide update successfully propagated across all city sectors.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Administration;

