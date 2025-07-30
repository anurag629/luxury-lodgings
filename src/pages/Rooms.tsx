import React, { useState } from 'react';
import { Check, X, Star, Users, Bed, Bath, Wifi, Car } from 'lucide-react';
import roomPremium from '@/assets/room-premium.jpg';
import commonArea from '@/assets/common-area.jpg';
import amenityGym from '@/assets/amenity-gym.jpg';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState('1-sitting');

  const roomTypes = [
    {
      id: '1-sitting',
      name: '1 Sitting',
      subtitle: 'Personal Space',
      price: 12000,
      originalPrice: 15000,
      description: 'Premium private rooms with all modern amenities for ultimate comfort and privacy.',
      image: roomPremium,
      popular: true,
      features: {
        room: 'Private Room',
        occupancy: '1 Person',
        bathroom: 'Attached/Shared Bath',
        ac: 'AC/Non-AC Options',
        furniture: 'Study Table, Bed, Wardrobe',
        meals: 'Flexible Meal Plans',
        wifi: 'High-Speed WiFi',
        security: '24/7 Security',
        laundry: 'Laundry Service',
        housekeeping: 'Daily Housekeeping',
        parking: 'Parking Available',
        powerBackup: 'Power Backup',
      },
      amenities: [
        'Private study area',
        'Individual AC controls',
        'Personal wardrobe',
        'Attached bathroom options',
        'Balcony access',
        'Premium mattress',
        'Reading lights',
        'Privacy curtains',
      ],
      idealFor: ['Working Professionals', 'Senior Executives', 'Students requiring privacy'],
    },
    {
      id: '2-sitting',
      name: '2 Sitting',
      subtitle: 'Perfect for Grads',
      price: 8000,
      originalPrice: 10000,
      description: 'Shared accommodation perfect for students and young professionals seeking community.',
      image: commonArea,
      popular: false,
      features: {
        room: 'Shared Room',
        occupancy: '2 Persons',
        bathroom: '2 Bathrooms',
        ac: 'AC/Non-AC Options',
        furniture: '2 Study Tables, 2 Beds',
        meals: 'Common Kitchen Access',
        wifi: 'High-Speed WiFi',
        security: '24/7 Security',
        laundry: 'Laundry Service',
        housekeeping: 'Daily Housekeeping',
        parking: 'Parking Available',
        powerBackup: 'Power Backup',
      },
      amenities: [
        'Shared study space',
        'Common area access',
        'Individual storage',
        'Shared bathroom',
        'Community kitchen',
        'Recreation facilities',
        'Group activities',
        'Peer interaction',
      ],
      idealFor: ['College Students', 'Fresh Graduates', 'Budget-conscious individuals'],
    },
    {
      id: '3-sitting',
      name: '3 Sitting',
      subtitle: 'Budget Friendly',
      price: 6000,
      originalPrice: 8000,
      description: 'Affordable triple sharing rooms with essential amenities for budget-conscious residents.',
      image: amenityGym,
      popular: false,
      features: {
        room: 'Triple Sharing',
        occupancy: '3 Persons',
        bathroom: 'Attached Washroom',
        ac: 'Non-AC/AC Options',
        furniture: '3 Beds, Shared Study Area',
        meals: 'Private Kitchen',
        wifi: 'High-Speed WiFi',
        security: '24/7 Security',
        laundry: 'Laundry Service',
        housekeeping: '3x Weekly Housekeeping',
        parking: 'Limited Parking',
        powerBackup: 'Power Backup',
      },
      amenities: [
        'Triple bunk beds',
        'Shared study table',
        'Common wardrobe',
        'Attached washroom',
        'Kitchen access',
        'Basic furniture',
        'Community areas',
        'Budget-friendly',
      ],
      idealFor: ['Students', 'Interns', 'Budget travelers', 'Short-term residents'],
    },
  ];

  const comparisonFeatures = [
    { key: 'room', label: 'Room Type', icon: Bed },
    { key: 'occupancy', label: 'Occupancy', icon: Users },
    { key: 'bathroom', label: 'Bathroom', icon: Bath },
    { key: 'ac', label: 'AC Options', icon: Star },
    { key: 'furniture', label: 'Furniture', icon: Bed },
    { key: 'meals', label: 'Meals', icon: Star },
    { key: 'wifi', label: 'WiFi', icon: Wifi },
    { key: 'security', label: 'Security', icon: Star },
    { key: 'laundry', label: 'Laundry', icon: Star },
    { key: 'housekeeping', label: 'Housekeeping', icon: Star },
    { key: 'parking', label: 'Parking', icon: Car },
    { key: 'powerBackup', label: 'Power Backup', icon: Star },
  ];

  const selectedRoomData = roomTypes.find(room => room.id === selectedRoom) || roomTypes[0];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Room Types & Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of accommodation options designed to fit your lifestyle and budget
          </p>
        </div>

        {/* Room Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 inline-flex space-x-2">
            {roomTypes.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  selectedRoom === room.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {room.name}
                {room.popular && (
                  <div className="absolute -top-2 -right-2 bg-warning text-warning-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Room Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={selectedRoomData.image}
                alt={selectedRoomData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedRoomData.name}</h3>
                    <p className="text-white/80">{selectedRoomData.subtitle}</p>
                  </div>
                  {selectedRoomData.popular && (
                    <div className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <span className="text-3xl font-bold text-primary">₹{selectedRoomData.price.toLocaleString()}</span>
                  {selectedRoomData.originalPrice > selectedRoomData.price && (
                    <span className="text-lg text-muted-foreground line-through ml-2">
                      ₹{selectedRoomData.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className="text-muted-foreground">per month</span>
              </div>
              
              <p className="text-muted-foreground">{selectedRoomData.description}</p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Ideal for:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRoomData.idealFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-success/10 text-success rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card">
              <h4 className="text-lg font-semibold text-foreground mb-4">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedRoomData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button className="btn-primary">
                Book {selectedRoomData.name} Now
              </button>
              <button className="btn-secondary">
                Schedule Visit
              </button>
              <button className="text-primary hover:text-primary-glow transition-colors text-center">
                View Virtual Tour →
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Compare Room Types</h2>
            <p className="text-muted-foreground">Detailed comparison of all room types and their features</p>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left p-6 font-semibold text-foreground">Features</th>
                    {roomTypes.map((room) => (
                      <th key={room.id} className="text-center p-6 min-w-48">
                        <div className="space-y-2">
                          <div className="font-bold text-foreground">{room.name}</div>
                          <div className="text-sm text-muted-foreground">{room.subtitle}</div>
                          <div className="space-y-1">
                            <div className="text-xl font-bold text-primary">
                              ₹{room.price.toLocaleString()}
                            </div>
                            {room.originalPrice > room.price && (
                              <div className="text-sm text-muted-foreground line-through">
                                ₹{room.originalPrice.toLocaleString()}
                              </div>
                            )}
                          </div>
                          {room.popular && (
                            <div className="inline-block bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs">
                              Popular
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.key} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                      <td className="p-6">
                        <div className="flex items-center space-x-3">
                          <feature.icon className="w-5 h-5 text-muted-foreground" />
                          <span className="font-medium text-foreground">{feature.label}</span>
                        </div>
                      </td>
                      {roomTypes.map((room) => (
                        <td key={room.id} className="p-6 text-center">
                          <span className="text-muted-foreground">
                            {room.features[feature.key as keyof typeof room.features]}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-glass-border bg-muted/20">
                    <td className="p-6 font-semibold text-foreground">
                      Action
                    </td>
                    {roomTypes.map((room) => (
                      <td key={room.id} className="p-6 text-center">
                        <div className="space-y-2">
                          <button className="btn-primary text-sm w-full">
                            Book Now
                          </button>
                          <button className="btn-secondary text-sm w-full">
                            View Details
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card text-center">
            <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Terms</h3>
            <p className="text-muted-foreground text-sm">Monthly, quarterly, and yearly payment options available</p>
          </div>
          
          <div className="glass-card text-center">
            <div className="w-12 h-12 bg-secondary-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Premium Service</h3>
            <p className="text-muted-foreground text-sm">24/7 support and maintenance for all room types</p>
          </div>
          
          <div className="glass-card text-center">
            <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Community Living</h3>
            <p className="text-muted-foreground text-sm">Connect with like-minded individuals in all room types</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;