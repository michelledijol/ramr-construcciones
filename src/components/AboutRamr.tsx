import { useState, useEffect, useRef } from 'react'
// Imports para iconos - reemplazando emojis por iconos profesionales
import { MdConstruction } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { IoHome } from 'react-icons/io5'

// Componente AboutRamr - Descripción de la empresa Ramr
// Este componente muestra la historia y propósito de la empresa de construcción
const AboutRamr = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <section 
      ref={sectionRef}
      id="sobre-ramr" 
      style={{
        background: 'radial-gradient(ellipse at center, #fefcf8 0%, #f8f6f2 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Textura sutil de fondo */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundImage: `
          linear-gradient(90deg, transparent 98%, rgba(205, 163, 73, 0.05) 100%),
          linear-gradient(0deg, transparent 98%, rgba(205, 163, 73, 0.05) 100%)
        `,
        backgroundSize: '30px 30px',
        pointerEvents: 'none'
      }}></div>

      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: '0 2rem',
        position: 'relative',
        zIndex: '1'
      }}>
        {/* Título de la sección */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.2'
          }}>
            Sobre Ramr
          </h2>
          
          {/* Subtítulo emocional */}
          <p style={{
            fontSize: '1.1rem',
            color: '#6b7280',
            marginBottom: '1.5rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            fontStyle: 'italic'
          }}>
            Compromiso, detalle y confianza en cada obra
          </p>
          
          {/* Línea decorativa dorada con fade */}
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #CDA349, #F4D03F, transparent)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(205, 163, 73, 0.3)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-1px',
              left: '0',
              right: '0',
              height: '5px',
              background: 'linear-gradient(90deg, transparent, rgba(205, 163, 73, 0.3), transparent)',
              borderRadius: '3px'
            }}></div>
          </div>
        </div>

        {/* Contenido principal */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease-out 0.2s'
        }}>
          
          {/* Texto descriptivo */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(205, 163, 73, 0.2)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            borderLeft: '4px solid #CDA349'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#4A4A4A',
              lineHeight: '1.9',
              marginBottom: '2rem',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'justify'
            }}>
              En Ramr llevamos años construyendo más que espacios: levantamos <em style={{ 
                fontStyle: 'italic', 
                color: '#CDA349',
                fontWeight: '500'
              }}>hogares donde la vida sucede</em>. 
              Cada proyecto nace del detalle, la técnica y el compromiso que nos caracteriza.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#4A4A4A',
              lineHeight: '1.9',
              fontFamily: 'Inter, sans-serif',
              textAlign: 'justify',
              marginBottom: '1.5rem'
            }}>
              <strong style={{ 
                color: '#2d3748', 
                fontWeight: '600',
                fontSize: '1.15rem'
              }}>
                Nuestro propósito
              </strong> es crear espacios bien construidos, duraderos y pensados 
              para el bienestar de quienes los habitan, manteniendo siempre altos estándares 
              de excelencia en cada detalle.
            </p>
          </div>

          {/* Características destacadas */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}>
            
            {/* Experiencia */}
            <div 
              className="feature-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '2rem',
                background: '#FFFCF9',
                borderRadius: '12px',
                border: '1px solid rgba(205, 163, 73, 0.2)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-3px)'
                (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(205, 163, 73, 0.15)'
                (e.target as HTMLElement).style.background = '#FFFCF9'
                // Animar el ícono
                const icon = (e.target as HTMLElement).querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'rotate(5deg) scale(1.1)'
                  icon.style.filter = 'brightness(1.2)'
                }
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)'
                (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)'
                (e.target as HTMLElement).style.background = '#FFFCF9'
                // Resetear el ícono
                const icon = (e.target as HTMLElement).querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'rotate(0deg) scale(1)'
                  icon.style.filter = 'brightness(1)'
                }
              }}
            >
              <div 
                className="feature-icon"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #CDA349, #F4D03F)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(205, 163, 73, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <MdConstruction style={{ 
                  color: 'white', 
                  width: '1.5rem', 
                  height: '1.5rem',
                  minWidth: '1.5rem',
                  minHeight: '1.5rem',
                  maxWidth: '1.5rem',
                  maxHeight: '1.5rem'
                }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Amplia Experiencia
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Años de trayectoria en el sector
                </p>
              </div>
            </div>

            {/* Calidad */}
            <div 
              className="feature-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '2rem',
                background: '#FFFCF9',
                borderRadius: '12px',
                border: '1px solid rgba(205, 163, 73, 0.2)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-3px)'
                (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(205, 163, 73, 0.15)'
                (e.target as HTMLElement).style.background = '#FFFCF9'
                // Animar el ícono
                const icon = (e.target as HTMLElement).querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'rotate(5deg) scale(1.1)'
                  icon.style.filter = 'brightness(1.2)'
                }
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)'
                (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)'
                (e.target as HTMLElement).style.background = '#FFFCF9'
                // Resetear el ícono
                const icon = (e.target as HTMLElement).querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'rotate(0deg) scale(1)'
                  icon.style.filter = 'brightness(1)'
                }
              }}
            >
              <div 
                className="feature-icon"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #CDA349, #F4D03F)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(205, 163, 73, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <AiFillStar style={{ 
                  color: 'white', 
                  width: '1.5rem', 
                  height: '1.5rem',
                  minWidth: '1.5rem',
                  minHeight: '1.5rem',
                  maxWidth: '1.5rem',
                  maxHeight: '1.5rem'
                }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Excelencia en Detalle
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Altos estándares de calidad
                </p>
              </div>
            </div>

            {/* Compromiso */}
            <div 
              className="feature-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '2rem',
                background: '#FFFCF9',
                borderRadius: '12px',
                border: '1px solid rgba(205, 163, 73, 0.2)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-3px)'
                (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(205, 163, 73, 0.15)'
                (e.target as HTMLElement).style.background = '#FFFCF9'
                // Animar el ícono
                const icon = (e.target as HTMLElement).querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'rotate(5deg) scale(1.1)'
                  icon.style.filter = 'brightness(1.2)'
                }
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)'
                (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)'
                (e.target as HTMLElement).style.background = '#FFFCF9'
                // Resetear el ícono
                const icon = (e.target as HTMLElement).querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'rotate(0deg) scale(1)'
                  icon.style.filter = 'brightness(1)'
                }
              }}
            >
              <div 
                className="feature-icon"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #CDA349, #F4D03F)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 12px rgba(205, 163, 73, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                <IoHome style={{ 
                  color: 'white', 
                  width: '1.5rem', 
                  height: '1.5rem',
                  minWidth: '1.5rem',
                  minHeight: '1.5rem',
                  maxWidth: '1.5rem',
                  maxHeight: '1.5rem'
                }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Bienestar Habitacional
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Espacios pensados para las personas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA sutil */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2.5rem',
          background: '#FFF9F2',
          borderRadius: '20px',
          border: '1px solid rgba(205, 163, 73, 0.2)',
          boxShadow: '0 -20px 30px rgba(0,0,0,0.03)',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.8s ease-out 0.4s'
        }}>
          {/* Línea de continuidad sutil */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(205, 163, 73, 0.4), transparent)',
            borderRadius: '20px 20px 0 0'
          }}></div>
          
          {/* Degradado fino en borde superior */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #CDA349, transparent)',
            borderRadius: '20px 20px 0 0'
          }}></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#4A4A4A',
              marginBottom: '0',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              ¿Quieres ver cómo trabajamos?
            </p>
            <a 
              href="#proyectos"
              style={{
                display: 'inline-block',
                background: '#CDA349',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(192, 150, 0, 0.15)'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.background = 'linear-gradient(90deg, #D4AF37, #E2C675)'
                (e.target as HTMLElement).style.transform = 'translateY(-2px)'
                (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(192, 150, 0, 0.25)'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.background = '#CDA349'
                (e.target as HTMLElement).style.transform = 'translateY(0)'
                (e.target as HTMLElement).style.boxShadow = '0 4px 8px rgba(192, 150, 0, 0.15)'
              }}
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutRamr
