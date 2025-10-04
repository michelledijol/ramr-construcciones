import React, { useEffect } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'calculator' | 'guide';
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, variant }) => {

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);


  if (!isOpen) return null;

  return (
    <div 
      className="popup-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        className="popup-content"
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2.5rem',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          border: '1px solid #d4af37',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6b7280',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#f3f4f6';
            e.currentTarget.style.color = '#1a1a1a';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#6b7280';
          }}
        >
          ×
        </button>

        <div className="popup-message">
          <h2 id="popup-title" style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontFamily: 'Playfair Display, serif'
          }}>
            RAMR Construcciones
          </h2>
          
          <p className="popup-tagline" style={{
            fontSize: '1.4rem',
            color: '#CDA349',
            marginBottom: '1rem',
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: '500',
            fontFamily: 'Playfair Display, serif'
          }}>
            "20 años creando espacios que perduran."
          </p>
          
          <p className="popup-description" style={{
            fontSize: '1.1rem',
            color: '#4a5568',
            marginBottom: '2.5rem',
            textAlign: 'center',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Solidez, garantía y compromiso en cada obra.
          </p>
          
          <div className="popup-cta" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="#contacto" 
              className="btn btn--primary"
              onClick={onClose}
              aria-label="Solicitar presupuesto"
              data-cta="solicitar-presupuesto-popup"
              style={{
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Solicitar Presupuesto
            </a>
            <button 
              type="button" 
              className="btn btn--outline" 
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '2px solid #CDA349',
                color: '#111',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#CDA349';
                e.currentTarget.style.color = '#111';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#111';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Ahora no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
