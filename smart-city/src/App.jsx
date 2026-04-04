import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Tourism from './pages/Tourism';
import Student from './pages/Student';
import Jobseekers from './pages/Jobseekers';
import Business from './pages/Business';
import Administration from './pages/Administration';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/student" element={<Student />} />
            <Route path="/jobs" element={<Jobseekers />} />
            <Route path="/business" element={<Business />} />
            <Route path="/admin" element={<Administration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
