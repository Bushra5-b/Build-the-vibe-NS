import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    name: 'City Walk Concert',
    location: 'City Walk, Jeddah',
    date: '25 May, 2026',
    category: 'Music',
    gradient: 'linear-gradient(135deg, #1f6593, #5eb090)'
  },
  {
    id: 2,
    name: 'Jeddah Gaming Zone',
    location: 'Jeddah Pier',
    date: '01 June, 2026',
    category: 'E-Sports',
    gradient: 'linear-gradient(135deg, #5eb090, #9ece47)'
  },
  {
    id: 3,
    name: 'Beach Festival',
    location: 'Obhur Waterfront',
    date: '15 June, 2026',
    category: 'Family',
    gradient: 'linear-gradient(135deg, #9ece47, #eab2bb)'
  },
  {
    id: 4,
    name: 'Formula Race Experience',
    location: 'Jeddah Corniche Circuit',
    date: '20 June, 2026',
    category: 'Sports',
    gradient: 'linear-gradient(135deg, #eab2bb, #1f6593)'
  }
];

const EventsSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h3 style={styles.title}>Featured Events</h3>
        <button style={styles.viewAll}>View All</button>
      </div>
      <div style={styles.grid}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginBottom: '40px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1e293b',
  },
  viewAll: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1f6593',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  }
};

export default EventsSection;
