import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroBanner from '../components/HeroBanner';
import StatsCards from '../components/StatsCards';
import EventsSection from '../components/EventsSection';
import Analytics from '../components/Analytics';
import AIInsights from '../components/AIInsights';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="page-content">
          <HeroBanner />
          <StatsCards />
          <div className="section-layout">
            <div className="left-col">
              <EventsSection />
              <Analytics />
            </div>
            <div className="right-col">
              <AIInsights />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
