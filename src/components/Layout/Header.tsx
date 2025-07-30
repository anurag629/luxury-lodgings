
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'nav-blur shadow-premium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary-gradient rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-all duration-300">
                <span className="text-primary-foreground font-bold text-xl">A1</span>
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-gradient">A One PG</span>
              <div className="text-xs text-muted-foreground font-medium tracking-wider">PREMIUM LIVING</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item px-4 py-2 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10 active'
                    : 'text-foreground hover:text-primary hover:bg-glass/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="w-px h-6 bg-glass-border"></div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Gurgaon</span>
              </div>
            </div>
            <Link to="/contact" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-xl glass border-glass-border hover:bg-glass/80 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0 pb-0'
        }`}>
          <div className="glass rounded-2xl mt-4 p-6 border border-glass-border/50">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                    isActive(item.path)
                      ? 'bg-primary/20 text-primary border border-primary/20'
                      : 'text-foreground hover:bg-glass/50 hover:text-primary border border-transparent'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-glass-border/50 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Call Us</div>
                    <div className="text-sm">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-sm">Gurgaon, Haryana</div>
                  </div>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center justify-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm -z-10 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
