import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={styles.hero}
    >
      <div style={styles.content}>
        <h2 style={styles.title}>Welcome to Jeddah Season Dashboard</h2>
        <p style={styles.subtitle}>
          Manage events, visitors, and tickets in one place. Stay updated with real-time analytics and AI insights.
        </p>
        <button style={styles.button}>
          Explore Events
        </button>
      </div>
      <div style={styles.decoration}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
      </div>
    </motion.div>
  );
};

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1f6593 0%, #5eb090 40%, #9ece47 80%, #eab2bb 100%)',
    borderRadius: '24px',
    padding: '48px',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '32px',
    boxShadow: '0 10px 25px -5px rgba(31, 101, 147, 0.3)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '18px',
    opacity: '0.9',
    marginBottom: '32px',
    lineHeight: '1.6',
  },
  button: {
    backgroundColor: '#fff',
    color: '#1f6593',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  decoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  },
  circle1: {
    position: 'absolute',
    top: '-50px',
    right: '-50px',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
  },
  circle2: {
    position: 'absolute',
    bottom: '-100px',
    right: '100px',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
  }
};

export default HeroBanner;
