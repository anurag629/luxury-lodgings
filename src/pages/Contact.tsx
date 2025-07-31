import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle, AlertCircle, User, Calendar 
} from 'lucide-react';
import commonArea from '@/assets/common-area.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyInterest: '',
    roomType: '',
    moveInDate: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyInterest: '',
        roomType: '',
        moveInDate: '',
        message: ''
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Helpline',
      value: '+91 98765 43210',
      description: 'Call us anytime for immediate assistance',
      action: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'info@aonepg.com',
      description: 'Get detailed responses within 2 hours',
      action: 'mailto:info@aonepg.com'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      value: 'Sector 29, Gurgaon',
      description: 'Visit us for property tours and consultations',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      value: '9:00 AM - 9:00 PM',
      description: 'Monday to Sunday, including holidays',
      action: null
    },
  ];

  const properties = [
    'Alpha Premium PG',
    'Beta Luxury Residence',
    'Gamma Executive PG',
    'Delta Comfort Homes',
    'Epsilon Modern Living',
    'Zeta Student Hub'
  ];

  const faqs = [
    {
      question: 'What documents are required for booking?',
      answer: 'You need a government-issued ID, passport-size photos, and proof of employment/education.'
    },
    {
      question: 'Is there a security deposit?',
      answer: 'Yes, we require a refundable security deposit equal to one month\'s rent.'
    },
    {
      question: 'Can I visit the property before booking?',
      answer: 'Absolutely! We encourage property visits. Schedule a tour through our website or call us.'
    },
    {
      question: 'What is included in the rent?',
      answer: 'Rent includes accommodation, WiFi, housekeeping, security, and basic utilities. Meals are optional.'
    },
    {
      question: 'How do I make payments?',
      answer: 'We accept online transfers, UPI, cards, and cash payments. Monthly advance payment is required.'
    },
    {
      question: 'Is there a notice period for leaving?',
      answer: 'We require 30 days written notice before vacating the accommodation.'
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect accommodation? We're here to help you every step of the way.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
              <p className="text-primary font-medium mb-2">{info.value}</p>
              <p className="text-muted-foreground text-sm mb-4">{info.description}</p>
              {info.action && (
                <a
                  href={info.action}
                  className="text-primary hover:text-primary-glow transition-colors text-sm font-medium"
                >
                  {info.icon === Phone ? 'Call Now' : 
                   info.icon === Mail ? 'Send Email' : 'Get Directions'} →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Book Your Stay</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 hours with available options.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card space-y-6">
              {formStatus === 'success' && (
                <div className="flex items-center space-x-3 p-4 bg-success/10 border border-success/20 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-success">Thank you! We'll contact you within 2 hours.</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Property Interest</label>
                  <select
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select Property</option>
                    {properties.map((property) => (
                      <option key={property} value={property}>{property}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select Room Type</option>
                    <option value="1-sitting">1 Sitting (₹12,000/month)</option>
                    <option value="2-sitting">2 Sitting (₹8,000/month)</option>
                    <option value="3-sitting">3 Sitting (₹6,000/month)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Preferred Move-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input
                    type="date"
                    name="moveInDate"
                    value={formData.moveInDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Additional Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-input rounded-xl border border-glass-border focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Tell us about your specific requirements, preferences, or any questions you have..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our terms and privacy policy. 
                We'll contact you within 2 hours during business hours.
              </p>
            </form>
          </div>

          {/* FAQ & Additional Info */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img
                src={commonArea}
                alt="A One PG Common Area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2">Ready to Visit?</h3>
                <p className="text-white/80 text-sm">Schedule a property tour today</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-card">
                    <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 p-4 glass rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Call Now</div>
                    <div className="text-sm text-muted-foreground">Immediate assistance</div>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center space-x-3 p-4 glass rounded-xl hover:bg-success/10 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-success" />
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Quick chat support</div>
                  </div>
                </a>
                
                <button className="flex items-center space-x-3 p-4 glass rounded-xl hover:bg-accent/10 transition-colors w-full">
                  <Calendar className="w-5 h-5 text-accent" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">Schedule Visit</div>
                    <div className="text-sm text-muted-foreground">Book property tour</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;