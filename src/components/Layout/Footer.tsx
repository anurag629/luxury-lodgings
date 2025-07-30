import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Wifi, Shield, Star } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/rooms', label: 'Room Types' },
    { path: '/amenities', label: 'Amenities' },
  ];

  const properties = [
    'Alpha Premium PG',
    'Beta Luxury Residence',
    'Gamma Executive PG',
    'Delta Comfort Homes',
  ];

  const features = [
    { icon: Wifi, text: '99% WiFi Uptime' },
    { icon: Shield, text: '24/7 Security' },
    { icon: Clock, text: 'Flexible Timing' },
    { icon: Star, text: '4.8 Rating' },
  ];

  return (
    <footer className="bg-hero border-t border-glass-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A1</span>
              </div>
              <span className="text-2xl font-bold text-gradient">A One PG</span>
            </div>
            <p className="text-muted-foreground">
              Premium paying guest accommodations in Gurgaon with luxury amenities, 
              24/7 security, and flexible living solutions for professionals and students.
            </p>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Our Properties */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Our Properties</h3>
            <div className="space-y-3">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {property}
                </div>
              ))}
              <Link
                to="/properties"
                className="text-primary hover:text-primary-glow transition-colors duration-300 font-medium"
              >
                View All Properties →
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">info@aonepg.com</p>
                  <p className="text-sm text-muted-foreground">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Gurgaon, Haryana</p>
                  <p className="text-sm text-muted-foreground">Multiple Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 A One PG. All rights reserved. Premium accommodation solutions.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="hover:text-primary transition-colors duration-300">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;