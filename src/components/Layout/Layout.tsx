import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from '../Common/FloatingActionButton';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Layout;