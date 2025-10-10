import { useEffect, useState } from 'react'
import Button from './Button'
// Imports para iconos - reemplazando emojis por iconos profesionales
import { MdConstruction } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`hero fade-slide-in ${isLoaded ? 'loaded' : ''}`} style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      overflow: 'hidden'
    }}>
      {/* Imagen de fondo - Casa moderna similar a proyectos RAMR */}
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
      
      {/* Overlay degradado sutil de abajo hacia arriba */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.05) 100%)',
        zIndex: 2
      }} />
      
      {/* Overlay degradado sutil solo en la franja central del texto */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        right: '10%',
        bottom: '20%',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 100%)',
        borderRadius: '12px',
        zIndex: 2
      }} />
      
        {/* Contenido principal centrado y limpio */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '2rem 1rem',
          position: 'relative',
          zIndex: 3,
          width: '100%',
          textAlign: 'center'
        }}>
        
        {/* H1 - Claim principal enfocado en hogares con mejor espaciado */}
        <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
          <div className="hero-title" style={{
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            letterSpacing: '1px',
            lineHeight: '1.1',
            padding: '0 1rem',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)'
          }}>
            <div>20 años construyendo hogares</div>
            <div>con garantía y solidez</div>
          </div>
          <div style={{
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, #CDA349, #F4D03F)',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(205, 163, 73, 0.3)'
          }}></div>
        </div>
        
        {/* Subtítulo - Enfoque residencial y civil con mejor contraste */}
        <div className="body-text" style={{
          color: '#e2e8f0',
          marginBottom: '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '400',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
        }}>
          <MdConstruction style={{ 
            width: 'clamp(1.2rem, 3vw, 1.5rem)', 
            height: 'clamp(1.2rem, 3vw, 1.5rem)',
            color: '#d4af37' 
          }} />
          <span>Obras civiles, residenciales e industriales — entregadas a tiempo, siempre con garantía.</span>
        </div>
        
        {/* Servicios de RAMR */}
        <div className="chips-scroll" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto'
        }}>
          <div style={{
            background: '#d4af37',
            color: '#1a1a1a',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            fontWeight: '700',
            border: '2px solid #d4af37',
            textShadow: 'none',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
          }}>
            Construcción Civil
          </div>
          <div 
            className="chip-hover touch-target chip-item"
            style={{
              background: 'transparent',
              color: '#d4af37',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600',
              border: '2px solid #d4af37',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.background = '#d4af37'
              (e.target as HTMLElement).style.color = '#1a1a1a'
              (e.target as HTMLElement).style.textShadow = 'none'
              (e.target as HTMLElement).style.transform = 'scale(1.02)'
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.background = 'transparent'
              (e.target as HTMLElement).style.color = '#d4af37'
              (e.target as HTMLElement).style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.4)'
              (e.target as HTMLElement).style.transform = 'scale(1)'
            }}
          >
            Mantenimientos
          </div>
          <div 
            style={{
              background: 'transparent',
              color: '#d4af37',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600',
              border: '2px solid #d4af37',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#d4af37'
              e.target.style.color = '#1a1a1a'
              e.target.style.textShadow = 'none'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#d4af37'
              e.target.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Tasaciones
          </div>
          <div 
            style={{
              background: 'transparent',
              color: '#d4af37',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600',
              border: '2px solid #d4af37',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#d4af37'
              e.target.style.color = '#1a1a1a'
              e.target.style.textShadow = 'none'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#d4af37'
              e.target.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Diseños
          </div>
          <div 
            style={{
              background: 'transparent',
              color: '#d4af37',
              padding: '0.4rem 0.8rem',
              borderRadius: '20px',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600',
              border: '2px solid #d4af37',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
              fontFamily: 'Inter, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#d4af37'
              e.target.style.color = '#1a1a1a'
              e.target.style.textShadow = 'none'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#d4af37'
              e.target.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Supervisiones
          </div>
        </div>
        
        {/* CTA discreto pero sólido */}
        <div style={{ marginTop: '2rem' }}>
          <Button
            variant="primary"
            href="https://wa.me/18297177552"
            aria-label="Solicitar presupuesto por WhatsApp - Roberto Martínez 1-829-717-7552"
            data-cta="solicitar-presupuesto-hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Presupuesto
          </Button>
          
          
          {/* Microclaim de credibilidad */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#e2e8f0',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
            padding: '0 1rem'
          }}>
            <AiFillStar style={{ 
              color: '#d4af37', 
              width: 'clamp(1rem, 2.5vw, 1.1rem)',
              height: 'clamp(1rem, 2.5vw, 1.1rem)'
            }} />
            <span>+200 proyectos residenciales y civiles entregados con éxito en 20 años de experiencia</span>
          </div>
        </div>
        
      </div>
      
      {/* Indicador de scroll simple */}
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
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.transform = 'translateY(-3px)'
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.transform = 'translateY(0)'
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
    </section>
  )
}

export default Hero