import React from 'react';
import { Star, Users, MapPin, Award, Target, Heart, Shield, Zap } from 'lucide-react';
import heroBuilding from '@/assets/hero-building.jpg';
import commonArea from '@/assets/common-area.jpg';
import amenityGym from '@/assets/amenity-gym.jpg';

const About = () => {
  const milestones = [
    { year: 2018, title: 'Company Founded', description: 'Started with a vision to revolutionize PG accommodation' },
    { year: 2019, title: 'First Property', description: 'Launched Alpha Premium PG with 25 rooms' },
    { year: 2020, title: 'Expansion', description: 'Opened 3 more properties across Gurgaon' },
    { year: 2021, title: 'Premium Services', description: 'Introduced luxury amenities and 24/7 support' },
    { year: 2022, title: 'Digital Innovation', description: 'Launched online booking and smart room features' },
    { year: 2023, title: 'Recognition', description: 'Awarded "Best PG Chain in Gurgaon"' },
    { year: 2024, title: 'Future Ready', description: '6 properties, 500+ satisfied residents' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: commonArea,
      description: 'Visionary leader with 15+ years in hospitality sector'
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Head',
      image: amenityGym,
      description: 'Expert in property management and guest services'
    },
    {
      name: 'Amit Singh',
      position: 'Facilities Manager',
      image: heroBuilding,
      description: 'Ensures world-class amenities and maintenance'
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Comfort First',
      description: 'Creating a home away from home for every resident'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: '24/7 security ensuring peace of mind for all residents'
    },
    {
      icon: Users,
      title: 'Community Living',
      description: 'Fostering connections and building lasting friendships'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously improving with modern technology and services'
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Residents' },
    { icon: MapPin, value: '6', label: 'Properties' },
    { icon: Star, value: '4.8', label: 'Average Rating' },
    { icon: Award, value: '5+', label: 'Awards Won' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold text-foreground">About A One PG</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redefining premium accommodation with world-class facilities, 
            personalized services, and a commitment to creating the perfect living experience.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018, A One PG began with a simple vision: to provide premium 
                paying guest accommodations that feel like home. What started as a single 
                property has grown into a chain of 6 premium facilities across Gurgaon.
              </p>
              <p>
                We understand that finding the right accommodation is about more than just 
                a place to sleep. It's about finding a community, a safe space, and an 
                environment that supports your personal and professional growth.
              </p>
              <p>
                Today, we proudly serve 500+ residents across our properties, maintaining 
                our commitment to quality, safety, and exceptional service that has earned 
                us a 4.8-star rating and multiple industry awards.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={heroBuilding}
              alt="A One PG Building"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-primary-gradient opacity-10 rounded-2xl" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a single property to a chain of premium accommodations
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                    <div className="glass-card">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals behind your exceptional living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-primary-gradient opacity-20 rounded-full group-hover:opacity-10 transition-opacity" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card">
            <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide premium, safe, and comfortable accommodation solutions that 
              enhance the living experience of working professionals and students, 
              while fostering a sense of community and belonging.
            </p>
          </div>

          <div className="glass-card">
            <div className="w-12 h-12 bg-secondary-gradient rounded-xl flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the most trusted and preferred accommodation partner across 
              India, setting new standards for quality, innovation, and customer 
              satisfaction in the paying guest industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;