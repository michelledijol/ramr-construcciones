import React from 'react'
import Hero from './components/Hero'
import AboutRamr from './components/AboutRamr'
import InfoBlock from './components/InfoBlock'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Navigation from './components/Navigation'
import Popup from './components/Popup'
import StickyCTA from './components/StickyCTA'
import Button from './components/Button'
import { useExitIntent } from './hooks/useExitIntent'

// Componente principal de la aplicación - Diseño tipo moodboard constructora
function App() {
  const { showPopup, popupVariant, closePopup } = useExitIntent();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navegación - Barra superior moderna */}
      <Navigation />
      
      {/* Sección Hero - Banner principal impactante */}
      <section id="inicio">
        <Hero />
      </section>
      
      {/* Sección Sobre Ramr - Descripción de la empresa */}
      <AboutRamr />
      
      {/* Bloque de información horizontal - CTA y métricas */}
      <InfoBlock />
      
      {/* Servicios - Soluciones integrales */}
      <section id="servicios">
        <Services />
      </section>
      
      {/* Proyectos - Portfolio dinámico */}
      <section id="proyectos">
        <Projects />
      </section>
      
      {/* Testimonios - Casos de éxito */}
      <section id="testimonios">
        <Testimonials />
      </section>
      
      {/* Contacto - CTA Final Elegante */}
      <section id="contacto" style={{
        background: 'linear-gradient(180deg, #fff 0%, #fdf9f1 100%)',
        padding: '6rem 0',
        borderTop: '1px solid #CDA349',
        borderBottom: '1px solid #CDA349',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Textura sutil */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(205, 163, 73, 0.03) 100%),
            linear-gradient(0deg, transparent 98%, rgba(205, 163, 73, 0.03) 100%)
          `,
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center', 
          padding: '0 2rem',
          position: 'relative',
          zIndex: '1'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            Convertimos su idea en un espacio que perdura
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            marginBottom: '3rem',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            Su próximo proyecto comienza aquí. Hablemos de construir su visión.
          </p>
          
          {/* Líneas doradas */}
          <div style={{
            position: 'relative',
            margin: '2rem 0'
          }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '-1rem',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '1px',
              background: '#CDA349',
              opacity: '0.6'
            }}></div>
            <div style={{
              position: 'absolute',
              left: '50%',
              bottom: '-1rem',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '1px',
              background: '#CDA349',
              opacity: '0.6'
            }}></div>
          </div>
          
          <div style={{ position: 'relative', marginTop: '2rem' }}>
            <Button
              variant="primary"
              href="#contacto"
              aria-label="Iniciar mi proyecto"
              data-cta="iniciar-mi-proyecto-final"
            >
              Iniciar Mi Proyecto
            </Button>
          </div>
        </div>
      </section>
      
      {/* Sticky CTA Mobile */}
      <StickyCTA />
      
      {/* Popup Exit Intent */}
      <Popup
        isOpen={showPopup}
        onClose={closePopup}
        variant={popupVariant}
      />
    </div>
  )
}

export default App