import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar" style={styles.navbar}>
      <div style={styles.left}>
        <h1 style={styles.logo}>Jeddah Season</h1>
      </div>
      
      <div style={styles.center}>
        <div style={styles.searchBar}>
          <Search size={18} color="#64748b" />
          <input 
            type="text" 
            placeholder="Search events..." 
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.iconButton}>
          <Bell size={20} color="#1e293b" />
          <span style={styles.badge}></span>
        </div>
        <div style={styles.profile}>
          <div style={styles.avatar}>
            <User size={20} color="#fff" />
          </div>
          <span style={styles.userName}>Admin</span>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    height: 'var(--navbar-height)',
    width: 'calc(100% - var(--sidebar-width))',
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    borderBottom: '1px solid #e2e8f0',
    zIndex: 100,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f6593',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: '8px 16px',
    borderRadius: '10px',
    width: '400px',
    gap: '10px',
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    width: '100%',
    fontSize: '14px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  iconButton: {
    position: 'relative',
    cursor: 'pointer',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: '8px',
    height: '8px',
    backgroundColor: '#eab2bb',
    borderRadius: '50%',
    border: '2px solid #fff',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#1f6593',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontWeight: '500',
    fontSize: '14px',
  }
};

export default Navbar;
