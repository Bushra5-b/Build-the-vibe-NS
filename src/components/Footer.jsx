import React from 'react';
import { Twitter, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.left}>
          <h4 style={styles.title}>Jeddah Season</h4>
          <p style={styles.desc}>Experience the vibe of Jeddah through world-class events and entertainment.</p>
          <div style={styles.socials}>
            <Twitter size={20} style={styles.socialIcon} />
            <Instagram size={20} style={styles.socialIcon} />
            <Facebook size={20} style={styles.socialIcon} />
          </div>
        </div>

        <div style={styles.right}>
          <h5 style={styles.subtitle}>Contact Info</h5>
          <div style={styles.contactItem}>
            <Mail size={16} />
            <span>info@jeddahseason.sa</span>
          </div>
          <div style={styles.contactItem}>
            <Phone size={16} />
            <span>+966 12 345 6789</span>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>Made for Jeddah Season • © 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#fff',
    padding: '60px 0 24px 0',
    borderTop: '1px solid #e2e8f0',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 40px',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '40px',
  },
  left: {
    maxWidth: '400px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1f6593',
    marginBottom: '16px',
  },
  desc: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  socials: {
    display: 'flex',
    gap: '16px',
  },
  socialIcon: {
    color: '#64748b',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '8px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#64748b',
  },
  bottom: {
    textAlign: 'center',
    padding: '24px 0',
    borderTop: '1px solid #f1f5f9',
    fontSize: '12px',
    color: '#94a3b8',
  }
};

export default Footer;
