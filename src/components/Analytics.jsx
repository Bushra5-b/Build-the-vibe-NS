import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const visitorData = [
  { name: 'Mon', visitors: 4000 },
  { name: 'Tue', visitors: 3000 },
  { name: 'Wed', visitors: 2000 },
  { name: 'Thu', visitors: 2780 },
  { name: 'Fri', visitors: 1890 },
  { name: 'Sat', visitors: 2390 },
  { name: 'Sun', visitors: 3490 },
];

const zoneData = [
  { name: 'City Walk', value: 400, color: '#1f6593' },
  { name: 'Beach', value: 300, color: '#5eb090' },
  { name: 'Pier', value: 300, color: '#9ece47' },
  { name: 'Gaming', value: 200, color: '#eab2bb' },
];

const Analytics = () => {
  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <h3 style={styles.title}>Visitors per Day</h3>
        <div style={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="visitors" 
                stroke="#1f6593" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#1f6593' }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={styles.title}>Popular Zones</h3>
        <div style={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={zoneData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {zoneData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={styles.legend}>
          {zoneData.map((item, index) => (
            <div key={index} style={styles.legendItem}>
              <div style={{ ...styles.dot, backgroundColor: item.color }}></div>
              <span style={styles.legendText}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '24px',
  },
  chartWrapper: {
    height: '250px',
    width: '100%',
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '16px',
    flexWrap: 'wrap',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  legendText: {
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '500',
  }
};

export default Analytics;
