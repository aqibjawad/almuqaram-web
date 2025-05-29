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
          const increment = stat.value / 50;
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
      <div style={styles.cardsGrid}>
        {stats.map((stat, index) => (
          <div 
            style={styles.card} 
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = styles.cardHover.background;
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              const value = e.currentTarget.querySelector('.stat-value');
              const label = e.currentTarget.querySelector('.stat-label');
              if (value) value.style.color = '#ffffff';
              if (label) label.style.color = '#b8f5f7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = styles.card.background;
              e.currentTarget.style.transform = styles.card.transform;
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
              const value = e.currentTarget.querySelector('.stat-value');
              const label = e.currentTarget.querySelector('.stat-label');
              if (value) value.style.color = styles.statValue.color;
              if (label) label.style.color = styles.statLabel.color;
            }}
          >
            <div className="stat-value" style={styles.statValue}>
              {counters[index].toLocaleString()}{stat.suffix}
            </div>
            <div className="stat-label" style={styles.statLabel}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '7rem',
    padding: '20px',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: '#ffffff',
    padding: '40px 20px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '2px solid #f0f9ff',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateY(0)',
  },
  cardHover: {
    background: 'linear-gradient(135deg, #30AFB8 0%, #24888F 50%, #1E6B72 100%)',
    transform: 'translateY(-10px)',
    boxShadow: '0 25px 50px rgba(48, 175, 184, 0.4)',
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#1E6B72',
    marginBottom: '10px',
    letterSpacing: '-1px',
    transition: 'color 0.4s ease',
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#64748b',
    fontWeight: '600',
    lineHeight: '1.4',
    transition: 'color 0.4s ease',
  },
};

export default StatsSection;