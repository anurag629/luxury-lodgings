import React, { useState } from 'react';
import { 
  Wifi, Shield, Car, Users, Utensils, Shirt, Dumbbell, 
  Droplets, Zap, Wind, Thermometer, Camera, Clock, 
  Headphones, BookOpen, Coffee, Gamepad2, Music
} from 'lucide-react';
import amenityGym from '@/assets/amenity-gym.jpg';
import commonArea from '@/assets/common-area.jpg';
import roomPremium from '@/assets/room-premium.jpg';

const Amenities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Amenities', count: 24 },
    { id: 'essential', name: 'Essential', count: 8 },
    { id: 'comfort', name: 'Comfort', count: 6 },
    { id: 'recreation', name: 'Recreation', count: 5 },
    { id: 'security', name: 'Security', count: 5 },
  ];

  const amenities = [
    // Essential Amenities
    {
      category: 'essential',
      icon: Wifi,
      name: 'High-Speed WiFi',
      description: 'Unlimited high-speed internet with 99% uptime guarantee',
      availability: 99,
      status: 'active',
      image: commonArea,
      features: ['100 Mbps speed', '24/7 connectivity', 'Multiple access points', 'Backup connection']
    },
    {
      category: 'essential',
      icon: Zap,
      name: 'Power Backup',
      description: '24/7 uninterrupted power supply with generator backup',
      availability: 100,
      status: 'active',
      image: roomPremium,
      features: ['Generator backup', 'UPS systems', 'No power cuts', 'Emergency lighting']
    },
    {
      category: 'essential',
      icon: Droplets,
      name: 'RO Water System',
      description: 'Pure drinking water with advanced RO filtration',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['7-stage filtration', 'Hot & cold water', 'Multiple dispensers', 'Quality tested']
    },
    {
      category: 'essential',
      icon: Utensils,
      name: 'Flexible Meal Plans',
      description: 'Customizable meal options - breakfast, lunch, dinner',
      availability: 95,
      status: 'active',
      image: commonArea,
      features: ['Vegetarian options', 'Regional cuisines', 'Healthy meals', 'Custom diet plans']
    },
    {
      category: 'essential',
      icon: Shirt,
      name: 'Laundry Service',
      description: 'Professional washing and ironing services',
      availability: 85,
      status: 'active',
      image: roomPremium,
      features: ['Same-day service', 'Dry cleaning', 'Ironing included', 'Pickup & delivery']
    },
    {
      category: 'essential',
      icon: Wind,
      name: 'AC/Non-AC Rooms',
      description: 'Individual climate control in all rooms',
      availability: 100,
      status: 'active',
      image: roomPremium,
      features: ['Individual controls', 'Energy efficient', 'Regular maintenance', 'All seasons comfort']
    },
    {
      category: 'essential',
      icon: Clock,
      name: 'Daily Housekeeping',
      description: 'Professional cleaning and maintenance services',
      availability: 100,
      status: 'active',
      image: roomPremium,
      features: ['Daily cleaning', 'Bed making', 'Bathroom sanitization', 'Trash collection']
    },
    {
      category: 'essential',
      icon: Car,
      name: 'Parking Facility',
      description: 'Secure parking for bikes and cars',
      availability: 80,
      status: 'active',
      image: commonArea,
      features: ['Two-wheeler parking', 'Car parking slots', 'CCTV monitoring', '24/7 access']
    },

    // Security Amenities
    {
      category: 'security',
      icon: Shield,
      name: '24/7 Security',
      description: 'Round-the-clock security with trained guards',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['Trained security guards', 'ID verification', 'Visitor management', 'Emergency response']
    },
    {
      category: 'security',
      icon: Camera,
      name: 'CCTV Surveillance',
      description: 'Complete premises covered with HD cameras',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['HD cameras', 'Night vision', '24/7 recording', 'Real-time monitoring']
    },
    {
      category: 'security',
      icon: Shield,
      name: 'Access Control',
      description: 'Secure entry systems with key cards',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['Key card access', 'Biometric locks', 'Entry logs', 'Restricted access']
    },
    {
      category: 'security',
      icon: Shield,
      name: 'Emergency Support',
      description: 'Medical and emergency assistance available',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['First aid', 'Emergency contacts', 'Medical assistance', '24/7 helpline']
    },
    {
      category: 'security',
      icon: Shield,
      name: 'Fire Safety',
      description: 'Complete fire safety systems and equipment',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['Smoke detectors', 'Fire extinguishers', 'Emergency exits', 'Safety drills']
    },

    // Comfort Amenities
    {
      category: 'comfort',
      icon: Users,
      name: 'Common Areas',
      description: 'Spacious lounges and recreational spaces',
      availability: 75,
      status: 'active',
      image: commonArea,
      features: ['TV lounge', 'Reading area', 'Social spaces', 'Comfortable seating']
    },
    {
      category: 'comfort',
      icon: BookOpen,
      name: 'Study Rooms',
      description: 'Quiet spaces designed for focused study',
      availability: 65,
      status: 'active',
      image: roomPremium,
      features: ['Silent zones', 'Good lighting', 'Comfortable chairs', '24/7 access']
    },
    {
      category: 'comfort',
      icon: Coffee,
      name: 'Pantry/Kitchen',
      description: 'Shared kitchen facilities for cooking',
      availability: 90,
      status: 'active',
      image: commonArea,
      features: ['Modern appliances', 'Refrigerator', 'Microwave', 'Cooking essentials']
    },
    {
      category: 'comfort',
      icon: Thermometer,
      name: 'Room Heaters',
      description: 'Individual room heating during winter',
      availability: 100,
      status: 'seasonal',
      image: roomPremium,
      features: ['Energy efficient', 'Safe heating', 'Individual controls', 'Winter comfort']
    },
    {
      category: 'comfort',
      icon: Wind,
      name: 'Ventilation',
      description: 'Proper air circulation and ventilation',
      availability: 100,
      status: 'active',
      image: commonArea,
      features: ['Natural ventilation', 'Exhaust fans', 'Fresh air flow', 'Humidity control']
    },
    {
      category: 'comfort',
      icon: Headphones,
      name: 'Noise Control',
      description: 'Soundproofing for peaceful environment',
      availability: 85,
      status: 'active',
      image: roomPremium,
      features: ['Sound insulation', 'Quiet hours', 'Noise reduction', 'Peaceful environment']
    },

    // Recreation Amenities
    {
      category: 'recreation',
      icon: Dumbbell,
      name: 'Fitness Center',
      description: 'Fully equipped gym with modern equipment',
      availability: 70,
      status: 'active',
      image: amenityGym,
      features: ['Modern equipment', 'Cardio machines', 'Weight training', 'Fitness guidance']
    },
    {
      category: 'recreation',
      icon: Droplets,
      name: 'Swimming Pool',
      description: 'Clean and well-maintained swimming pool',
      availability: 60,
      status: 'seasonal',
      image: commonArea,
      features: ['Filtered water', 'Pool maintenance', 'Swimming hours', 'Safety equipment']
    },
    {
      category: 'recreation',
      icon: Gamepad2,
      name: 'Recreation Room',
      description: 'Games and entertainment facilities',
      availability: 80,
      status: 'active',
      image: commonArea,
      features: ['Indoor games', 'Board games', 'Entertainment systems', 'Social activities']
    },
    {
      category: 'recreation',
      icon: Music,
      name: 'Entertainment Area',
      description: 'Music and entertainment systems',
      availability: 75,
      status: 'active',
      image: commonArea,
      features: ['Music system', 'TV entertainment', 'Event space', 'Social gatherings']
    },
    {
      category: 'recreation',
      icon: Users,
      name: 'Rooftop Area',
      description: 'Open rooftop space for relaxation',
      availability: 90,
      status: 'active',
      image: commonArea,
      features: ['Open space', 'City views', 'Fresh air', 'Relaxation area']
    },
  ];

  const filteredAmenities = selectedCategory === 'all' 
    ? amenities 
    : amenities.filter(amenity => amenity.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success';
      case 'seasonal': return 'text-warning';
      case 'maintenance': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Available';
      case 'seasonal': return 'Seasonal';
      case 'maintenance': return 'Maintenance';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Premium Amenities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class facilities designed for your comfort, convenience, and modern lifestyle
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 w-full max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-2 rounded-xl font-medium transition-all duration-300 text-center ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className="truncate">{category.name}</div>
                  <div className="text-xs bg-white/20 px-1 py-0.5 rounded-full mt-1 inline-block">
                    {category.count}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {filteredAmenities.map((amenity, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(amenity.status)} bg-background/90`}>
                    {getStatusText(amenity.status)}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center">
                    <amenity.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <span className="text-sm font-medium text-primary">{amenity.availability}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary-gradient h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${amenity.availability}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Features</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {amenity.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Security Coverage</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-3xl font-bold text-secondary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">WiFi Uptime</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Premium Features</div>
          </div>
          <div className="glass-card text-center">
            <div className="text-3xl font-bold text-warning mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Power Backup</div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="glass-card">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Amenities by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => {
              const categoryAmenities = amenities.filter(a => a.category === category.id);
              const avgAvailability = Math.round(
                categoryAmenities.reduce((sum, amenity) => sum + amenity.availability, 0) / categoryAmenities.length
              );

              return (
                <div key={category.id} className="text-center space-y-4">
                  <h3 className="text-lg font-semibold text-foreground capitalize">{category.name}</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">{category.count}</div>
                    <div className="text-sm text-muted-foreground">Amenities</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary-gradient h-2 rounded-full"
                        style={{ width: `${avgAvailability}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">{avgAvailability}% Available</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;