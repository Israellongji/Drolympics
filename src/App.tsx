import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin');

  return (
    <>
      <div className="tech-bg"></div>
      {!isDashboard && <Navbar />}
      <main>{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LayoutContent>
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
      </LayoutContent>
    </Router>
  );
};

export default App;
