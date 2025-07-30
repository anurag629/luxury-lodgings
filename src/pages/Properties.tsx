import React, { useState } from 'react';
import { Star, MapPin, Wifi, Shield, Users, Car, Filter, Search } from 'lucide-react';
import roomPremium from '@/assets/room-premium.jpg';
import amenityGym from '@/assets/amenity-gym.jpg';
import commonArea from '@/assets/common-area.jpg';
import heroBuilding from '@/assets/hero-building.jpg';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedOccupancy, setSelectedOccupancy] = useState('all');
  const [priceRange, setPriceRange] = useState([5000, 15000]);

  const properties = [
    {
      id: 1,
      name: 'Alpha Premium PG',
      location: 'Cyber City, Gurgaon',
      address: 'Sector 29, Near DLF Cyber Hub',
      price: 12000,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 128,
      image: roomPremium,
      gallery: [roomPremium, amenityGym, commonArea],
      gender: 'both',
      occupancy: ['1', '2'],
      available: 5,
      features: ['AC Rooms', 'High-Speed WiFi', 'Gym', 'Swimming Pool', '24/7 Security'],
      amenities: ['Meals Included', 'Laundry Service', 'Housekeeping', 'Power Backup'],
      nearbyPlaces: ['Cyber Hub (0.5km)', 'Metro Station (0.8km)', 'Hospital (1.2km)'],
      description: 'Premium paying guest accommodation with world-class amenities in the heart of Cyber City.',
    },
    {
      id: 2,
      name: 'Beta Luxury Residence',
      location: 'Golf Course Road',
      address: 'Sector 54, Near Golf Course',
      price: 10000,
      originalPrice: 12000,
      rating: 4.8,
      reviews: 95,
      image: commonArea,
      gallery: [commonArea, amenityGym, roomPremium],
      gender: 'male',
      occupancy: ['1', '2', '3'],
      available: 8,
      features: ['Premium Rooms', 'Swimming Pool', 'Security', 'Parking'],
      amenities: ['WiFi', 'Meals', 'Laundry', 'Room Cleaning'],
      nearbyPlaces: ['Golf Course (0.3km)', 'Shopping Mall (1km)', 'Metro (1.5km)'],
      description: 'Luxury residence offering premium accommodation with excellent connectivity.',
    },
    {
      id: 3,
      name: 'Gamma Executive PG',
      location: 'MG Road, Gurgaon',
      address: 'Sector 28, Near MG Road Metro',
      price: 8000,
      originalPrice: 10000,
      rating: 4.7,
      reviews: 87,
      image: amenityGym,
      gallery: [amenityGym, roomPremium, commonArea],
      gender: 'female',
      occupancy: ['2', '3'],
      available: 12,
      features: ['Study Room', 'Meals Included', 'WiFi', 'CCTV'],
      amenities: ['AC/Non-AC', 'Laundry', 'Recreation Room', 'Medical Support'],
      nearbyPlaces: ['MG Road Metro (0.2km)', 'City Centre (0.5km)', 'Hospital (0.8km)'],
      description: 'Executive accommodation perfect for working professionals and students.',
    },
    {
      id: 4,
      name: 'Delta Comfort Homes',
      location: 'Sohna Road',
      address: 'Sector 47, Near Sohna Road',
      price: 7000,
      originalPrice: 9000,
      rating: 4.6,
      reviews: 76,
      image: heroBuilding,
      gallery: [heroBuilding, commonArea, roomPremium],
      gender: 'both',
      occupancy: ['1', '2', '3'],
      available: 15,
      features: ['Spacious Rooms', 'Garden Area', 'Security', 'Parking'],
      amenities: ['WiFi', 'Meals', 'Laundry', 'Power Backup'],
      nearbyPlaces: ['Bus Stand (0.5km)', 'Market (0.7km)', 'Metro (2km)'],
      description: 'Comfortable and affordable accommodation with modern amenities.',
    },
    {
      id: 5,
      name: 'Epsilon Modern Living',
      location: 'Sector 45',
      address: 'Near Huda City Centre',
      price: 9500,
      originalPrice: 11000,
      rating: 4.8,
      reviews: 112,
      image: commonArea,
      gallery: [commonArea, amenityGym, heroBuilding],
      gender: 'female',
      occupancy: ['1', '2'],
      available: 6,
      features: ['Modern Design', 'Gym', 'Rooftop', 'Security'],
      amenities: ['High-Speed WiFi', 'Meals', 'Housekeeping', 'Medical Aid'],
      nearbyPlaces: ['Huda City Centre (0.3km)', 'Metro (0.5km)', 'Mall (0.8km)'],
      description: 'Modern living spaces designed for contemporary lifestyle needs.',
    },
    {
      id: 6,
      name: 'Zeta Student Hub',
      location: 'Sector 32',
      address: 'Near Educational Hub',
      price: 6500,
      originalPrice: 8000,
      rating: 4.5,
      reviews: 64,
      image: roomPremium,
      gallery: [roomPremium, commonArea, amenityGym],
      gender: 'both',
      occupancy: ['2', '3'],
      available: 20,
      features: ['Study Areas', 'Library', 'WiFi', 'Recreation'],
      amenities: ['Meals', 'Laundry', 'Medical Support', 'Sports Facilities'],
      nearbyPlaces: ['Universities (0.5km)', 'Library (0.3km)', 'Metro (1km)'],
      description: 'Perfect accommodation for students with dedicated study facilities.',
    },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = selectedGender === 'all' || property.gender === selectedGender || property.gender === 'both';
    const matchesOccupancy = selectedOccupancy === 'all' || property.occupancy.includes(selectedOccupancy);
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    return matchesSearch && matchesGender && matchesOccupancy && matchesPrice;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Our Properties</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium paying guest accommodations across Gurgaon with world-class amenities
          </p>
        </div>

        {/* Search & Filters */}
        <div className="glass-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
              />
            </div>

            {/* Gender Filter */}
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full px-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
            >
              <option value="all">All Genders</option>
              <option value="male">Male Only</option>
              <option value="female">Female Only</option>
              <option value="both">Co-living</option>
            </select>

            {/* Occupancy Filter */}
            <select
              value={selectedOccupancy}
              onChange={(e) => setSelectedOccupancy(e.target.value)}
              className="w-full px-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
            >
              <option value="all">All Occupancy</option>
              <option value="1">1 Sitting</option>
              <option value="2">2 Sitting</option>
              <option value="3">3 Sitting</option>
            </select>

            {/* Price Range */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">₹{priceRange[0]}</span>
              <input
                type="range"
                min="5000"
                max="15000"
                step="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">₹{priceRange[1]}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-glass-border">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
            <button className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors">
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Property Image */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute top-4 left-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.available} Available
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {property.occupancy.join(', ')} Sitting
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-1">
                      {property.gallery.slice(0, 3).map((img, imgIndex) => (
                        <div key={imgIndex} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="w-12 h-12 rounded-lg bg-background/90 border-2 border-white flex items-center justify-center text-xs font-medium">
                        +{property.gallery.length - 3}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{property.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="text-sm font-medium">{property.rating}</span>
                        <span className="text-xs text-muted-foreground">({property.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.address}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm">{property.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 4).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Places */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Nearby</h4>
                    <div className="space-y-1">
                      {property.nearbyPlaces.slice(0, 2).map((place, placeIndex) => (
                        <div key={placeIndex} className="text-xs text-muted-foreground">
                          {place}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">₹{property.price.toLocaleString()}</span>
                        {property.originalPrice > property.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{property.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">per month</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-sm py-2 px-4">
                        View Details
                      </button>
                      <button className="btn-primary text-sm py-2 px-4">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters to find more options.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;