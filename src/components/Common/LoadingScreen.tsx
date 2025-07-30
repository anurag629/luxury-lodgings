import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto animate-glow">
          <span className="text-white font-bold text-2xl">A1</span>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Loading A One PG</h2>
          <p className="text-muted-foreground">Preparing your premium experience...</p>
        </div>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;