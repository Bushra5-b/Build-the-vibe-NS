import React from 'react';
import { Sparkles, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const insights = [
  {
    title: 'Most Popular Event',
    desc: 'City Walk Concert is trending with 45% more engagement this week.',
    icon: TrendingUp,
    color: '#1f6593',
  },
  {
    title: 'Expected Traffic',
    desc: 'Visitor traffic is expected to peak this weekend at Obhur Waterfront.',
    icon: AlertCircle,
    color: '#eab2bb',
  },
  {
    title: 'Recommended Action',
    desc: 'Increase security personnel at Jeddah Pier for the upcoming Gaming Zone event.',
    icon: CheckCircle,
    color: '#5eb090',
  }
];

const AIInsights = () => {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <Sparkles size={20} color="#1f6593" />
        <h3 style={styles.title}>AI Smart Insights</h3>
      </div>
      <div style={styles.grid}>
        {insights.map((insight, index) => (
          <div key={index} style={styles.card}>
            <div style={{ ...styles.iconBox, backgroundColor: `${insight.color}15` }}>
              <insight.icon size={20} color={insight.color} />
            </div>
            <div style={styles.content}>
              <h4 style={styles.insightTitle}>{insight.title}</h4>
              <p style={styles.insightDesc}>{insight.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '24px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
    marginBottom: '40px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    display: 'flex',
    gap: '16px',
    padding: '16px',
    borderRadius: '16px',
    backgroundColor: '#f8fafc',
    border: '1px solid #f1f5f9',
  },
  iconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  insightTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#1e293b',
  },
  insightDesc: {
    fontSize: '13px',
    color: '#64748b',
    lineHeight: '1.5',
  }
};

export default AIInsights;
