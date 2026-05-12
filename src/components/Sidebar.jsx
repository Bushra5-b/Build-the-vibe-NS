import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Ticket, 
  Banknote, 
  Sparkles, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Events', icon: Calendar },
    { name: 'Visitors', icon: Users },
    { name: 'Tickets', icon: Ticket },
    { name: 'Revenue', icon: Banknote },
    { name: 'AI Insights', icon: Sparkles },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="sidebar" style={styles.sidebar}>
      <div style={styles.brand}>
        <div style={styles.logoBox}>JS</div>
        <span style={styles.brandName}>Jeddah Season</span>
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <div 
            key={item.name} 
            style={{
              ...styles.menuItem,
              ...(item.active ? styles.activeItem : {})
            }}
          >
            <item.icon size={20} color={item.active ? '#fff' : '#64748b'} />
            <span style={{
              ...styles.menuText,
              ...(item.active ? styles.activeText : {})
            }}>
              {item.name}
            </span>
          </div>
        ))}
      </nav>

      <div style={styles.footer}>
        <p style={styles.footerText}>© 2026 Jeddah Season</p>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: 'var(--sidebar-width)',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#fff',
    borderRight: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 0',
    zIndex: 101,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '0 24px',
    marginBottom: '40px',
  },
  logoBox: {
    width: '32px',
    height: '32px',
    backgroundColor: '#1f6593',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  brandName: {
    fontWeight: '700',
    fontSize: '18px',
    color: '#1e293b',
  },
  nav: {
    flex: 1,
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activeItem: {
    backgroundColor: '#1f6593',
    boxShadow: '0 4px 12px rgba(31, 101, 147, 0.2)',
  },
  menuText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748b',
  },
  activeText: {
    color: '#fff',
  },
  footer: {
    padding: '0 24px',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: '12px',
    color: '#94a3b8',
  }
};

export default Sidebar;
