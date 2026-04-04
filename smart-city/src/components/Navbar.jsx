import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, Briefcase, GraduationCap, Building2, Palmtree, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/tourism', icon: <Palmtree size={20} />, label: 'Tourism' },
    { path: '/student', icon: <GraduationCap size={20} />, label: 'Students' },
    { path: '/jobs', icon: <Briefcase size={20} />, label: 'Jobs' },
    { path: '/business', icon: <Building2 size={20} />, label: 'Business' },
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Admin', isSecondary: true },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="glass rounded-full px-2 py-2 flex items-center gap-1 pointer-events-auto shadow-2xl border-white/10"
      >
        <Link to="/" className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors group">
          <Map className="text-accent group-hover:scale-110 transition-transform" />
        </Link>
        
        <div className="h-6 w-[1px] bg-white/10 mx-1"></div>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`relative px-4 py-2.5 rounded-full flex items-center gap-2 transition-all group no-underline
                  ${isActive ? 'text-white' : 'text-text-secondary hover:text-white'}
                `}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`${isActive ? (item.isSecondary ? 'text-secondary' : 'text-accent') : 'text-inherit'} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium hidden md:block">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="h-6 w-[1px] bg-white/10 mx-1"></div>

        <Link to="/tourism" className="btn-premium py-2.5 px-6 rounded-full text-xs font-bold !shadow-none hover:!shadow-lg ml-1">
          Explore
        </Link>
      </motion.nav>
    </div>
  );
};

export default Navbar;

