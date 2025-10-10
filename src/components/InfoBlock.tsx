import React from 'react'
import Button from './Button'

const InfoBlock = () => {

  return (
    <section id="info-block" style={{
      background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, #ffffff 100%)',
      padding: '6rem 0 4rem 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)'
    }}>
      {/* Patrón sutil de fondo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.8) 100%)
        `,
        zIndex: 1
      }} />
      
      {/* Contenedor principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        
        {/* Bloque horizontal principal */}
        <div style={{
          background: '#ffffff',
          borderRadius: '0px',
          padding: '3rem 4rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Lado izquierdo - CTA */}
            <div>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '700',
                color: '#2d3748',
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif',
                lineHeight: '1.2'
              }}>
                ¿Listo para construir tu proyecto?
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#4a5568',
                marginBottom: '2rem',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif'
              }}>
                Obras civiles, residenciales e industriales con garantía
              </p>
            </div>
            
            {/* Lado derecho - Métricas y confianza */}
            <div>
              {/* Sello de experiencia */}
              <div style={{
                textAlign: 'center',
                marginBottom: '2rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, #d4af37, #b8860b)',
                borderRadius: '0px',
                color: 'white'
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  ⭐ 20 años de experiencia
                </div>
              </div>
              
              {/* Métricas específicas */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem'
              }}>
                     {/* Años */}
                     <div style={{
                       textAlign: 'center',
                       padding: '2.5rem 1.5rem',
                       background: '#ffffff',
                       border: '1px solid #e2e8f0',
                       borderRadius: '8px',
                       transition: 'all 0.3s ease',
                       cursor: 'pointer',
                       boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
                     }}
                     onMouseOver={(e) => {
                       e.target.style.borderColor = '#d4af37'
                       e.target.style.transform = 'translateY(-4px)'
                       e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.15)'
                     }}
                     onMouseOut={(e) => {
                       e.target.style.borderColor = '#e2e8f0'
                       e.target.style.transform = 'translateY(0)'
                       e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                     }}>
                       {/* Icono reloj arriba */}
                       <div style={{
                         fontSize: '2.5rem',
                         color: '#d4af37',
                         marginBottom: '1.5rem',
                         fontFamily: 'Inter, sans-serif'
                       }}>
                         🕐
                       </div>
                       {/* Número grande debajo */}
                       <div style={{
                         fontSize: '4rem',
                         fontWeight: '300',
                         color: '#1a1a1a',
                         marginBottom: '1rem',
                         fontFamily: 'Inter, sans-serif',
                         lineHeight: '0.9'
                       }}>
                         20+
                       </div>
                       <div style={{
                         fontSize: '0.9rem',
                         color: '#6b7280',
                         fontWeight: '400',
                         textTransform: 'none',
                         letterSpacing: '0.3px',
                         fontFamily: 'Inter, sans-serif',
                         lineHeight: '1.4'
                       }}>
                         años acompañando a clientes
                       </div>
                     </div>
                     
                     {/* Proyectos */}
                     <div style={{
                       textAlign: 'center',
                       padding: '2.5rem 1.5rem',
                       background: '#ffffff',
                       border: '1px solid #e2e8f0',
                       borderRadius: '8px',
                       transition: 'all 0.3s ease',
                       cursor: 'pointer',
                       boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
                     }}
                     onMouseOver={(e) => {
                       e.target.style.borderColor = '#d4af37'
                       e.target.style.transform = 'translateY(-4px)'
                       e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.15)'
                     }}
                     onMouseOut={(e) => {
                       e.target.style.borderColor = '#e2e8f0'
                       e.target.style.transform = 'translateY(0)'
                       e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                     }}>
                       {/* Icono edificio arriba */}
                       <div style={{
                         fontSize: '2.5rem',
                         color: '#d4af37',
                         marginBottom: '1.5rem',
                         fontFamily: 'Inter, sans-serif'
                       }}>
                         🏢
                       </div>
                       {/* Número grande debajo */}
                       <div style={{
                         fontSize: '4rem',
                         fontWeight: '900',
                         color: '#1a1a1a',
                         marginBottom: '0.5rem',
                         fontFamily: 'Playfair Display, serif',
                         lineHeight: '0.9'
                       }}>
                         200+
                       </div>
                       <div style={{
                         fontSize: '0.8rem',
                         color: '#6b7280',
                         fontWeight: '500',
                         textTransform: 'none',
                         letterSpacing: '0.3px',
                         fontFamily: 'Inter, sans-serif',
                         lineHeight: '1.3'
                       }}>
                         obras entregadas en tiempo
                       </div>
                     </div>
                     
                     {/* Satisfacción */}
                     <div style={{
                       textAlign: 'center',
                       padding: '2.5rem 1.5rem',
                       background: '#ffffff',
                       border: '1px solid #e2e8f0',
                       borderRadius: '8px',
                       transition: 'all 0.3s ease',
                       cursor: 'pointer',
                       boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
                     }}
                     onMouseOver={(e) => {
                       e.target.style.borderColor = '#d4af37'
                       e.target.style.transform = 'translateY(-4px)'
                       e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.15)'
                     }}
                     onMouseOut={(e) => {
                       e.target.style.borderColor = '#e2e8f0'
                       e.target.style.transform = 'translateY(0)'
                       e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)'
                     }}>
                       {/* Icono check arriba */}
                       <div style={{
                         fontSize: '2.5rem',
                         color: '#d4af37',
                         marginBottom: '1.5rem',
                         fontFamily: 'Inter, sans-serif'
                       }}>
                         ✅
                       </div>
                       {/* Número grande debajo */}
                       <div style={{
                         fontSize: '4rem',
                         fontWeight: '900',
                         color: '#1a1a1a',
                         marginBottom: '0.5rem',
                         fontFamily: 'Playfair Display, serif',
                         lineHeight: '0.9'
                       }}>
                         100%
                       </div>
                       <div style={{
                         fontSize: '0.8rem',
                         color: '#6b7280',
                         fontWeight: '500',
                         textTransform: 'none',
                         letterSpacing: '0.3px',
                         fontFamily: 'Inter, sans-serif',
                         lineHeight: '1.3'
                       }}>
                         satisfacción en calidad
                       </div>
                     </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default InfoBlock