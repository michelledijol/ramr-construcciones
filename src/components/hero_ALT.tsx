import { useEffect, useState } from 'react'
import Button from './Button'
import { MdConstruction } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const benefits = [
    'Entrega a tiempo',
    'Garantía por escrito',
    'Diseño 3D previo',
    'Sin sobrecostos'
  ]

  return (
    <section className={`hero fade-slide-in ${isLoaded ? 'loaded' : ''}`} style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      overflow: 'hidden'
    }}>
      {/* Imagen de fondo */}
      <div className="hero-image" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }} />
      
      {/* Overlay suave - más transparente para ver la obra */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 100%)',
        zIndex: 2
      }} />
      
      {/* Contenido principal */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: isMobile ? '2rem 1.5rem' : '2rem 1rem',
        position: 'relative',
        zIndex: 3,
        width: '100%',
        textAlign: 'center'
      }}>
        
        {/* Título principal */}
        <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem', marginTop: '1rem' }}>
          <h1 className="hero-title" style={{
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
            letterSpacing: '0.5px',
            lineHeight: '1.2',
            padding: '0 1rem',
            fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3.5rem)'
          }}>
            Construimos el hogar donde vivirán tus mejores momentos
          </h1>
          <div style={{
            width: isMobile ? '80px' : '120px',
            height: '3px',
            background: 'linear-gradient(90deg, #CDA349, #F4D03F)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(205, 163, 73, 0.4)'
          }}></div>
        </div>
        
        {/* Subtítulo */}
        <p className="body-text" style={{
          color: '#f1f5f9',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.7',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '400',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.2rem)',
          padding: '0 1rem'
        }}>
          <MdConstruction style={{ 
            fontSize: isMobile ? '1.3rem' : 'clamp(1.3rem, 3vw, 1.6rem)', 
            color: '#d4af37',
            flexShrink: 0
          }} />
          <span>20 años de experiencia en obras civiles, residenciales e industriales</span>
        </p>
        
        {/* Beneficios clave */}
        <div className="chips-scroll" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: isMobile ? '0.6rem' : '0.75rem',
          marginBottom: isMobile ? '2rem' : '2.5rem',
          maxWidth: '800px',
          margin: '0 auto 2.5rem auto',
          padding: '0 1rem'
        }}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="chip-hover touch-target chip-item"
              style={{
                background: index === 0 ? '#d4af37' : 'rgba(212, 175, 55, 0.15)',
                color: index === 0 ? '#1a1a1a' : '#f1f5f9',
                padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.2rem',
                borderRadius: '24px',
                fontSize: isMobile ? '0.85rem' : 'clamp(0.85rem, 2vw, 0.95rem)',
                fontWeight: index === 0 ? '700' : '600',
                border: `2px solid ${index === 0 ? '#d4af37' : 'rgba(212, 175, 55, 0.4)'}`,
                textShadow: index === 0 ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.5)',
                fontFamily: 'Inter, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.background = '#d4af37'
                e.currentTarget.style.color = '#1a1a1a'
                e.currentTarget.style.textShadow = 'none'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.borderColor = '#d4af37'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                if (index === 0) {
                  e.currentTarget.style.background = '#d4af37'
                  e.currentTarget.style.color = '#1a1a1a'
                  e.currentTarget.style.textShadow = 'none'
                  e.currentTarget.style.borderColor = '#d4af37'
                } else {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)'
                  e.currentTarget.style.color = '#f1f5f9'
                  e.currentTarget.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'
                }
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {benefit}
            </div>
          ))}
        </div>
        
        {/* CTA principal */}
        <div style={{ marginTop: isMobile ? '2rem' : '2.5rem' }}>
          <Button
            variant="primary"
            href="https://wa.me/18297177552"
            aria-label="Solicitar presupuesto por WhatsApp - Roberto Martínez 1-829-717-7552"
            data-cta="solicitar-presupuesto-hero"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: isMobile ? '0.95rem' : '1rem',
              padding: isMobile ? '0.9rem 1.8rem' : '1rem 2rem'
            }}
          >
            Consulta Gratuita - Sin Compromiso
          </Button>
          
          {/* Credibilidad */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#f1f5f9',
            fontSize: isMobile ? '0.85rem' : 'clamp(0.85rem, 2vw, 0.95rem)',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
            padding: '0 1.5rem',
            flexWrap: 'wrap'
          }}>
            <AiFillStar style={{ 
              color: '#d4af37', 
              fontSize: isMobile ? '1.1rem' : 'clamp(1.1rem, 2.5vw, 1.2rem)',
              flexShrink: 0
            }} />
            <span>+200 proyectos entregados con éxito</span>
          </div>
        </div>
        
      </div>
      
      {/* Indicador de scroll */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3
        }}>
          <a 
            href="#servicios" 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#fbbf24',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              width: '1px',
              height: '20px',
              background: '#fbbf24',
              marginBottom: '0.5rem'
            }}></div>
            <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>Scroll</span>
          </a>
        </div>
      )}
    </section>
  )
}

export default Hero