import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Shield, Wifi, ArrowRight, CheckCircle } from 'lucide-react';
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
      features: ['AC Rooms', 'WiFi', 'Gym', 'Meals'],
      available: 5,
    },
    {
      name: 'Beta Luxury Residence',
      location: 'Golf Course Road',
      price: '₹10,000',
      rating: 4.8,
      image: commonArea,
      features: ['Premium Rooms', 'Pool', 'Security', 'Laundry'],
      available: 8,
    },
    {
      name: 'Gamma Executive PG',
      location: 'MG Road, Gurgaon',
      price: '₹8,000',
      rating: 4.7,
      image: amenityGym,
      features: ['Study Room', 'Meals', 'WiFi', 'CCTV'],
      available: 12,
    },
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed WiFi', desc: '99% Uptime Guarantee', status: 99 },
    { icon: Shield, title: '24/7 Security', desc: 'CCTV & Guards', status: 100 },
    { icon: Users, title: 'Common Areas', desc: 'Recreation & Study', status: 85 },
    { icon: Star, title: 'Premium Service', desc: 'Housekeeping Daily', status: 95 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBuilding} 
            alt="A One PG Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-shadow">
                Premium <span className="text-gradient">PG Living</span> in Gurgaon
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Experience luxury accommodation with world-class amenities, 
                24/7 security, and flexible living solutions designed for your comfort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/properties" className="btn-primary">
                  Explore Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="btn-secondary group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 animate-scale-in">
              <div className="glass-card text-center">
                <div className="text-3xl font-bold text-primary">{counters.rooms}+</div>
                <div className="text-sm text-muted-foreground">Premium Rooms</div>
              </div>
              <div className="glass-card text-center">
                <div className="text-3xl font-bold text-secondary">{counters.guests}+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </div>
              <div className="glass-card text-center">
                <div className="text-3xl font-bold text-accent">{counters.rating}★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Featured Properties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our premium paying guest accommodations across Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="glass-card group cursor-pointer overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.available} Available
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{property.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{property.location}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                    <div>
                      <span className="text-2xl font-bold text-primary">{property.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <Link to="/properties" className="btn-primary text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Premium Amenities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class facilities designed for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="glass-card text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-muted-foreground mb-4">{amenity.desc}</p>
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary-gradient h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${amenity.status}%` }}
                    />
                  </div>
                  <p className="text-sm text-primary font-medium">{amenity.status}% Available</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link to="/amenities" className="btn-primary">
              View All Amenities
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">Why Choose A One PG?</h2>
                <p className="text-xl text-muted-foreground">
                  Experience the perfect blend of comfort, security, and luxury in the heart of Gurgaon.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  'Premium rooms with AC/Non-AC options',
                  'Flexible meal plans (breakfast, lunch, dinner)',
                  'Unlimited high-speed WiFi with 99% uptime',
                  'RO filtered drinking water systems',
                  '24/7 security with CCTV surveillance',
                  'Professional laundry and housekeeping',
                  'Modern recreation and fitness facilities',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary">Learn More</Link>
                <Link to="/contact" className="btn-secondary">Contact Us</Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={roomPremium}
                  alt="Premium Room"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={amenityGym}
                  alt="Gym Facility"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute inset-0 bg-primary-gradient opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;