import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { value: 1000, label: "Business Clients", suffix: "+" },
    { value: 300, label: "Employees", suffix: "+" },
    { value: 200, label: "Product SKUs", suffix: "+" },
    { value: 30, label: "Years of Industry Experience", suffix: "+" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
        stats.forEach((stat, index) => {
          const increment = stat.value / 50; // Animate over 50 steps
          let current = 0;
          
          const interval = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              current = stat.value;
              clearInterval(interval);
            }
            
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }, 40);
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <div style={styles.container}>
      <div style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div style={styles.statItem} key={index}>
            <div style={styles.statValue}>
              {counters[index].toLocaleString()}{stat.suffix}
            </div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '7rem',
    marginRight: '3rem',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #30AFB8 0%, #24888F 50%, #1E6B72 100%)',
    padding: '40px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(48, 175, 184, 0.25)',
    position: 'relative',
    overflow: 'hidden',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    position: 'relative',
    zIndex: 2,
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#ffffff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '-1px',
  },
  statLabel: {
    fontSize: '1.6rem',
    color: '#b8f5f7',
    fontWeight: '500',
    lineHeight: '1.4',
  },
};

export default StatsSection;