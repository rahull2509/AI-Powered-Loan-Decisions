import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function HistoryPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-container"
    >
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: 12 }}>
          Application <span className="gradient-text">History</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto' }}>
          View and download past loan assessment reports.
        </p>
      </div>

      <div className="glass-card" style={{ padding: 48, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <Clock size={48} color="var(--text-muted)" />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-secondary)' }}>No Past Applications Found</h3>
        <p style={{ color: 'var(--text-muted)' }}>You haven't run any loan analysis yet. Head over to the analyzer to get started.</p>
      </div>
    </motion.div>
  );
}
