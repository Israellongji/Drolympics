import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Standings from './pages/Standings';
import About from './pages/About';
import Vault from './pages/Vault';
import News from './pages/News';
import Rules from './pages/Rules';
import Organizers from './pages/Organizers';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import TeamDashboard from './pages/TeamDashboard';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="tech-bg"></div> {/* Global animated background grid */}
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/news" element={<News />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<TeamDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
