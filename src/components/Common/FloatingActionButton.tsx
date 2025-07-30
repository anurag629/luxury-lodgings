import React from 'react';
import { Phone } from 'lucide-react';

const FloatingActionButton = () => {
  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <button
      onClick={handleCall}
      className="btn-floating"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
};

export default FloatingActionButton;