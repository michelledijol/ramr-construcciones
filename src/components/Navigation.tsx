import { useState, useEffect } from 'react'
import Button from './Button'

// Componente de navegación - como la barra superior de Instagram
const Navigation = () => {
  // Estado para el menú móvil - como el menú de opciones en Instagram
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none'
    }}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo elegante */}
          <div>
            <a href="#inicio" style={{ textDecoration: 'none' }}>
              <img 
                src="/logosinfondo.png" 
                alt="RAMR Construcciones" 
                style={{
                  height: '50px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </a>
          </div>

          {/* Menú desktop - como las opciones del perfil */}
          <div className="nav-menu">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </div>

          {/* Botón CTA unificado */}
          <div className="desktop-cta">
            <Button
              variant="outline"
              href="https://wa.me/18297177552"
              aria-label="Solicitar presupuesto por WhatsApp - Roberto Martínez 1-829-717-7552"
              data-cta="solicitar-presupuesto-navbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Botón menú móvil - como el menú hamburguesa */}
          <div className="mobile-menu-btn">
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                color: '#374151',
                cursor: 'pointer'
              }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil - como el menú desplegable */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div style={{ padding: '0.5rem', background: 'white', borderTop: '1px solid #e5e7eb' }}>
              <a href="#inicio" style={{ display: 'block', padding: '0.75rem', color: '#374151', textDecoration: 'none' }}>
                Inicio
              </a>
              <a href="#servicios" style={{ display: 'block', padding: '0.75rem', color: '#374151', textDecoration: 'none' }}>
                Servicios
              </a>
              <a href="#proyectos" style={{ display: 'block', padding: '0.75rem', color: '#374151', textDecoration: 'none' }}>
                Proyectos
              </a>
              <a href="#testimonios" style={{ display: 'block', padding: '0.75rem', color: '#374151', textDecoration: 'none' }}>
                Testimonios
              </a>
              <a href="#contacto" style={{ display: 'block', padding: '0.75rem', color: '#374151', textDecoration: 'none' }}>
                Contacto
              </a>
              <div style={{ padding: '0.75rem' }}>
                <a href="https://wa.me/18297177552" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }} target="_blank" rel="noopener noreferrer" aria-label="Solicitar presupuesto por WhatsApp - Roberto Martínez 1-829-717-7552">
                  Solicitar Presupuesto
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation