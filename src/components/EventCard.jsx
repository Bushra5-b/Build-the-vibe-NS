import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      style={styles.card}
    >
      <div style={styles.imageWrapper}>
        <div style={{ ...styles.placeholderImage, background: event.gradient }}>
          <span style={styles.categoryTag}>{event.category}</span>
        </div>
        <button style={styles.wishlist}>
          <Heart size={18} color="#ef4444" />
        </button>
      </div>

      <div style={styles.content}>
        <h4 style={styles.name}>{event.name}</h4>
        
        <div style={styles.infoRow}>
          <MapPin size={14} color="#64748b" />
          <span style={styles.infoText}>{event.location}</span>
        </div>
        
        <div style={styles.infoRow}>
          <Calendar size={14} color="#64748b" />
          <span style={styles.infoText}>{event.date}</span>
        </div>

        <div style={styles.actions}>
          <button style={styles.interestedBtn}>Interested</button>
          <button style={styles.bookBtn}>Book Now</button>
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
    transition: 'all 0.3s ease',
  },
  imageWrapper: {
    height: '180px',
    position: 'relative',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTag: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#1e293b',
  },
  wishlist: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  content: {
    padding: '20px',
  },
  name: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '12px',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  infoText: {
    fontSize: '13px',
    color: '#64748b',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '20px',
  },
  interestedBtn: {
    flex: 1,
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    backgroundColor: 'transparent',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    cursor: 'pointer',
  },
  bookBtn: {
    flex: 1,
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#1f6593',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
  }
};

export default EventCard;
