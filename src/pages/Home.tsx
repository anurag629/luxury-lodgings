
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Shield, Wifi, ArrowRight, CheckCircle, Crown, Award, Zap } from 'lucide-react';
import heroBuilding from '@/assets/hero-building.jpg';
import roomPremium from '@/assets/room-premium.jpg';
import amenityGym from '@/assets/amenity-gym.jpg';
import commonArea from '@/assets/common-area.jpg';

const Home = () => {
  const [counters, setCounters] = useState({ rooms: 0, guests: 0, rating: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { rooms: 50, guests: 500, rating: 4.8 };
      const duration = 2000;
      const steps = 60;
      const increment = {
        rooms: targets.rooms / steps,
        guests: targets.guests / steps,
        rating: targets.rating / steps,
      };

      let current = { rooms: 0, guests: 0, rating: 0 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current.rooms = Math.min(targets.rooms, current.rooms + increment.rooms);
        current.guests = Math.min(targets.guests, current.guests + increment.guests);
        current.rating = Math.min(targets.rating, current.rating + increment.rating);

        setCounters({
          rooms: Math.floor(current.rooms),
          guests: Math.floor(current.guests),
          rating: Math.round(current.rating * 10) / 10,
        });

        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const properties = [
    {
      name: 'Alpha Premium PG',
      location: 'Cyber City, Gurgaon',
      price: '₹12,000',
      rating: 4.9,
      image: roomPremium,
      features: ['Premium AC', 'WiFi', 'Gym', 'Meals'],
      available: 5,
      badge: 'Most Popular'
    },
    {
      name: 'Beta Luxury Residence',
      location: 'Golf Course Road',
      price: '₹10,000',
      rating: 4.8,
      image: commonArea,
      features: ['Luxury Rooms', 'Pool', '24/7 Security', 'Laundry'],
      available: 8,
      badge: 'Premium'
    },
    {
      name: 'Gamma Executive PG',
      location: 'MG Road, Gurgaon',
      price: '₹8,000',
      rating: 4.7,
      image: amenityGym,
      features: ['Study Room', 'Meals', 'WiFi', 'CCTV'],
      available: 12,
      badge: 'Best Value'
    },
  ];

  const amenities = [
    { icon: Wifi, title: 'Ultra-Fast WiFi', desc: '99.9% Uptime Guaranteed', status: 99, color: 'text-primary' },
    { icon: Shield, title: 'Elite Security', desc: 'AI-Powered CCTV & Guards', status: 100, color: 'text-success' },
    { icon: Crown, title: 'Luxury Amenities', desc: 'Premium Common Areas', status: 95, color: 'text-accent' },
    { icon: Zap, title: 'Smart Living', desc: 'IoT-Enabled Facilities', status: 90, color: 'text-secondary' },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
        <div className="absolute inset-0">
          <img 
            src={heroBuilding} 
            alt="A One PG Building" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-glass/30 backdrop-blur-glass border border-glass-border/50 rounded-full px-6 py-3 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Award-Winning Premium PG Chain</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-shadow leading-tight">
                Luxury <span className="text-gradient">PG Living</span>
                <br />in Gurgaon
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience unparalleled comfort with world-class amenities, 
                AI-powered security, and flexible living solutions crafted for the elite.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center pt-6 max-w-md sm:max-w-none mx-auto">
                <Link to="/properties" className="btn-primary text-lg group w-full sm:w-auto justify-center">
                  Explore Premium Properties
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary text-lg group w-full sm:w-auto justify-center">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Premium Floating Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-scale-in">
              <div className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{counters.rooms}+</div>
                <div className="text-muted-foreground font-medium">Premium Rooms</div>
              </div>
              
              <div className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-secondary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">{counters.guests}+</div>
                <div className="text-muted-foreground font-medium">Elite Guests</div>
              </div>
              
              <div className="glass-card text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">{counters.rating}★</div>
                <div className="text-muted-foreground font-medium">Luxury Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Properties */}
      <section className="py-24 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-glass/30 backdrop-blur-glass border border-glass-border/50 rounded-full px-6 py-2">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Collection</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground">Featured Properties</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our flagship premium paying guest accommodations across prime locations in Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="glass-card group cursor-pointer overflow-hidden relative animate-fade-in-up hover:shadow-premium"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Premium Badge */}
                <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {property.badge}
                </div>
                
                <div className="relative h-64 overflow-hidden rounded-2xl">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-success/90 backdrop-blur-sm text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.available} Available
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-warning fill-current" />
                      <span className="text-sm font-semibold">{property.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground font-medium">{property.location}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-glass/50 border border-glass-border/50 text-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-glass-border/50">
                    <div>
                      <span className="text-3xl font-bold text-primary">{property.price}</span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                    <Link 
                      to="/properties" 
                      className="btn-primary text-sm group-hover:scale-105 transition-transform"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-glass/30 backdrop-blur-glass border border-glass-border/50 rounded-full px-6 py-2">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">World-Class Facilities</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground">Premium Amenities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience luxury redefined with our cutting-edge facilities and personalized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="glass-card text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br from-glass to-glass/50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow border border-glass-border/50 ${amenity.color}`}>
                    <amenity.icon className="w-10 h-10" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">{amenity.desc}</p>
                
                <div className="space-y-3">
                  <div className="w-full bg-glass/50 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        amenity.color.includes('primary') ? 'bg-primary-gradient' :
                        amenity.color.includes('success') ? 'bg-gradient-to-r from-success to-success/80' :
                        amenity.color.includes('accent') ? 'bg-gradient-to-r from-accent to-accent/80' :
                        'bg-secondary-gradient'
                      }`}
                      style={{ width: `${amenity.status}%` }}
                    />
                  </div>
                  <p className={`text-sm font-bold ${amenity.color}`}>
                    {amenity.status}% Excellence
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-16">
            <Link to="/amenities" className="btn-primary text-lg group">
              Explore All Amenities
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-glass/30 backdrop-blur-glass border border-glass-border/50 rounded-full px-6 py-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Why Choose Us</span>
                </div>
                <h2 className="text-5xl font-bold text-foreground">
                  Why A One PG Leads the Industry?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experience the perfect fusion of luxury, technology, and personalized service in the heart of Gurgaon.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Premium AC/Non-AC rooms with smart controls',
                  'Gourmet meal plans with international cuisine',
                  'Ultra-fast WiFi with 99.9% uptime guarantee',
                  'Advanced RO water purification systems',
                  'AI-powered 24/7 security with facial recognition',
                  'Professional concierge and housekeeping services',
                  'State-of-the-art fitness and wellness facilities',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
                <Link to="/about" className="btn-primary w-full sm:w-auto justify-center">Discover Our Story</Link>
                <Link to="/contact" className="btn-secondary w-full sm:w-auto justify-center">Schedule Visit</Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img
                    src={roomPremium}
                    alt="Premium Room"
                    className="rounded-2xl shadow-premium hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src={commonArea}
                    alt="Common Area"
                    className="rounded-2xl shadow-premium hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6 mt-12">
                  <img
                    src={amenityGym}
                    alt="Gym Facility"
                    className="rounded-2xl shadow-premium hover:scale-105 transition-transform duration-500"
                  />
                  <div className="glass-card text-center">
                    <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-accent/5 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
