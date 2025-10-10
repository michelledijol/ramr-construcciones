import React, { useState, useEffect } from 'react'
import Button from './Button'
// Imports para iconos - reemplazando emojis por iconos profesionales
import { IoHome } from 'react-icons/io5'
import { MdApartment } from 'react-icons/md'
import { FaHammer } from 'react-icons/fa'
import { IoStatsChart } from 'react-icons/io5'

// Componente Services - Diseño consistente y profesional
const Services = () => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const services = [
    {
      id: 1,
      title: "Construcción Residencial",
      description: "Hogares de alto estándar con planificación 3D, control de calidad y garantía por escrito.",
      icon: <IoHome style={{ color: '#CDA349', width: '2.5rem', height: '2.5rem' }} />,
      features: [
        "Diseño 3D para decidir antes de construir",
        "Materiales certificados", 
        "Garantía extendida", 
        "Eficiencia energética"
      ]
    },
    {
      id: 2,
      title: "Desarrollo Comercial",
      description: "Espacios que maximizan rentabilidad y operatividad desde el día uno.",
      icon: <MdApartment style={{ color: '#CDA349', width: '2.5rem', height: '2.5rem' }} />,
      features: [
        "Ubicación y normativas",
        "Rentabilidad prevista y plazos claros", 
        "Ingeniería de valor", 
        "Entrega llave en mano"
      ]
    },
    {
      id: 3,
      title: "Reformas Premium",
      description: "Transformaciones precisas, sin sorpresas y con cronograma firme.",
      icon: <FaHammer style={{ color: '#CDA349', width: '2.5rem', height: '2.5rem' }} />,
      features: [
        "Auditoría estructural",
        "Presupuesto detallado", 
        "Dirección de obra", 
        "Limpieza y entrega"
      ]
    },
    {
      id: 4,
      title: "Consultoría Inmobiliaria",
      description: "Decisiones de inversión con datos, riesgos y plazos claros.",
      icon: <IoStatsChart style={{ color: '#CDA349', width: '2.5rem', height: '2.5rem' }} />,
      features: [
        "Análisis de mercado",
        "Evaluación técnica previa", 
        "Estrategia de inversión", 
        "Seguimiento post-venta"
      ]
    }
  ]

  return (
    <section id="servicios" className="section" style={{ 
      background: 'radial-gradient(circle at center, #FFFDF8 0%, #FFF9F2 100%)'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : '0 2rem' 
      }}>
        {/* Título de sección clásico */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(212, 175, 55, 0.1)',
            color: '#d4af37',
            padding: '0.5rem 1.5rem',
            borderRadius: '0px',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-1px',
              left: '-1px',
              right: '-1px',
              bottom: '-1px',
              background: 'linear-gradient(45deg, #d4af37, #b8860b, #d4af37)',
              borderRadius: '0px',
              zIndex: -1
            }}></div>
            Nuestros Servicios
          </div>
          <h2 className="section-title" style={{ 
            fontSize: isMobile ? '1.8rem' : '3rem', 
            marginBottom: '1.5rem', 
            color: '#1a1a1a', 
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.2'
          }}>
            Soluciones integrales de construcción y desarrollo inmobiliario
          </h2>
          
          {/* Frase puente narrativa */}
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: '#5A5A5A',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.5',
            fontStyle: 'italic',
            fontWeight: '400',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            En Ramr Construcciones transformamos la experiencia técnica en proyectos que perduran.
          </p>
          
          <p className="section-subtitle" style={{ 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: '#6b7280', 
            lineHeight: '1.7',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Profesionales altamente cualificados para la ejecución de obras compuesto por{' '}
            <span style={{ color: '#CDA349', fontWeight: '500' }}>
              Ingenieros, Jefes de Obra, Topógrafos, Técnicos, Encargados y Administrativos
            </span>.
          </p>
        </div>

        {/* Grid de servicios consistente */}
        <div className="services-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: isMobile ? '1.5rem' : 'clamp(1.5rem, 4vw, 3rem)',
          justifyContent: 'center',
          marginBottom: isMobile ? '3rem' : '4rem',
          maxWidth: '100%'
        }}>
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              style={{ 
                background: 'white',
                borderRadius: '8px',
                padding: isMobile ? '1.5rem' : 'clamp(1.5rem, 4vw, 2.5rem)',
                minHeight: isMobile ? 'auto' : '350px',
                boxShadow: '0 6px 20px rgba(0,0,0,.06)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(212,175,55,0.3)',
                position: 'relative',
                maxWidth: '100%'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,.1)'
                e.currentTarget.style.borderColor = '#b8860b'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,.06)'
                e.currentTarget.style.borderColor = '#d4af37'
              }}
            >
              {/* Icono con fondo circular translúcido */}
              <div 
                className="icon-container"
                style={{ 
                  fontSize: isMobile ? '2rem' : '2.5rem', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isMobile ? '60px' : '70px',
                  height: isMobile ? '60px' : '70px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '50%',
                  margin: '0 0 1.5rem 0',
                  color: '#CDA349',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(212,175,55,0.25)'
                  e.currentTarget.style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                {service.icon}
              </div>
              
              {/* Título directo */}
              <h3 className="service-title" style={{ 
                fontSize: isMobile ? '1.25rem' : 'clamp(18px, 2.2vw, 22px)', 
                fontWeight: '700', 
                color: '#1a1a1a', 
                marginBottom: '1rem',
                textAlign: 'left',
                lineHeight: '1.3'
              }}>
                {service.title}
              </h3>
              
              {/* Descripción con más aire */}
              <p style={{ 
                color: '#5E5E5E', 
                marginBottom: '1.5rem', 
                lineHeight: '1.5',
                textAlign: 'left',
                fontSize: isMobile ? '0.95rem' : 'clamp(14px, 1.4vw, 16px)'
              }}>
                {service.description}
              </p>
              
              {/* Características con check lineal dorado */}
              <ul style={{ 
                listStyle: 'none', 
                marginBottom: '2rem',
                flex: '1',
                textAlign: 'left'
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '0.75rem',
                    color: '#374151',
                    fontSize: isMobile ? '0.9rem' : 'clamp(13px, 1.3vw, 15px)',
                    lineHeight: '1.4'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      background: 'transparent',
                      border: '2px solid #d4af37',
                      borderRadius: '2px',
                      marginRight: '0.75rem',
                      flexShrink: 0,
                      marginTop: '2px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '2px',
                        left: '4px',
                        width: '6px',
                        height: '8px',
                        border: 'solid #d4af37',
                        borderWidth: '0 2px 2px 0',
                        transform: 'rotate(45deg)'
                      }}></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>

        {/* CTA Simple y Limpio */}
        <div style={{
          textAlign: 'center',
          marginTop: isMobile ? '3rem' : '4rem',
          padding: isMobile ? '2rem 0' : '3rem 0',
          borderTop: '2px solid #d4af37',
          borderBottom: '2px solid #d4af37'
        }}>
          <h3 style={{ 
            fontSize: isMobile ? '1.8rem' : '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            color: '#1a1a1a',
            lineHeight: '1.2',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            ¿Tienes un proyecto en mente?
          </h3>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.3rem', 
            marginBottom: '2.5rem',
            fontWeight: '400',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            color: '#4a5568',
            lineHeight: '1.6',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Démosle forma a tu idea con precisión y diseño
          </p>
          
          {/* CTA final con línea de cierre */}
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '1.5rem 1rem' : '2rem',
            background: 'radial-gradient(ellipse at center, #ffffff 0%, #FFFCF8 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            marginTop: '2rem',
            position: 'relative'
          }}>
            {/* Línea dorada superior animada */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: isAnimated ? '60px' : '0px',
              height: '2px',
              background: 'linear-gradient(90deg, #CDA349, #F4D03F)',
              borderRadius: '1px',
              transition: 'width 1s ease-in-out'
            }}></div>
            
            {/* Línea dorada inferior animada */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: isAnimated ? '60px' : '0px',
              height: '2px',
              background: 'linear-gradient(90deg, #CDA349, #F4D03F)',
              borderRadius: '1px',
              transition: 'width 1s ease-in-out'
            }}></div>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#5A5A5A',
              marginBottom: '1.5rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400'
            }}>
              Cada detalle, un paso más cerca de hacerlo realidad.
            </p>
            <Button
              variant="primary"
              href="https://wa.me/18297177552"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar presupuesto por WhatsApp - Roberto Martínez 1-829-717-7552"
              className={`
                bg-gradient-to-r from-[#CDA349] to-[#F4D03F] 
                text-white font-semibold
                ${isMobile ? 'px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'}
                rounded-lg shadow-lg shadow-[#CDA349]/30
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:shadow-[#CDA349]/40
                hover:scale-105 active:scale-95
              `}
              // Los efectos hover ya están manejados por las clases de Tailwind CSS
              // hover:scale-105, hover:shadow-xl, etc.
            >
              Solicitar Presupuesto
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Services