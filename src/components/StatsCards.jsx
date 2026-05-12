import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Ticket, Banknote, TrendingUp } from 'lucide-react';

const stats = [
  { 
    title: 'Total Events', 
    value: '42', 
    growth: '+12%', 
    icon: Calendar, 
    color: '#1f6593' 
  },
  { 
    title: 'Total Visitors', 
    value: '1.2M', 
    growth: '+8%', 
    icon: Users, 
    color: '#5eb090' 
  },
  { 
    title: 'Tickets Sold', 
    value: '850K', 
    growth: '+24%', 
    icon: Ticket, 
    color: '#9ece47' 
  },
  { 
    title: 'Revenue', 
    value: '$4.5M', 
    growth: '+18%', 
    icon: Banknote, 
    color: '#eab2bb' 
  },
];

const StatsCards = () => {
  return (
    <div style={styles.grid}>
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          whileHover={{ y: -5, boxShadow: '0 12px 20px -5px rgba(0,0,0,0.1)' }}
          style={styles.card}
        >
          <div style={styles.top}>
            <div style={{ ...styles.iconBox, backgroundColor: `${stat.color}15` }}>
              <stat.icon size={24} color={stat.color} />
            </div>
            <div style={styles.growth}>
              <TrendingUp size={14} color="#10b981" />
              <span style={styles.growthText}>{stat.growth}</span>
            </div>
          </div>
          <div style={styles.bottom}>
            <h3 style={styles.value}>{stat.value}</h3>
            <p style={styles.title}>{stat.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  iconBox: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  growth: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#ecfdf5',
    padding: '4px 8px',
    borderRadius: '20px',
  },
  growthText: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#10b981',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
  },
  value: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '4px',
  },
  title: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  }
};

export default StatsCards;
