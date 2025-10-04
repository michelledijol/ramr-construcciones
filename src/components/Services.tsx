import React from 'react'
import Button from './Button'

// Componente Services - Diseño consistente y profesional
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Construcción Residencial",
      description: "Hogares de alto estándar con planificación 3D, control de calidad y garantía por escrito.",
      icon: "🏠",
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
      icon: "🏢",
      features: [
        "Ubicación y normativas",
        "Rentabilidad prevista y plazos claros", 
        "Ingeniería de valor", 
        "Entrega llave en mano"
      ]
    },
    {
      id: 3,
      title: "Remodelación Premium",
      description: "Transformaciones precisas, sin sorpresas y con cronograma firme.",
      icon: "🔨",
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
      icon: "📊",
      features: [
        "Análisis de mercado",
        "Due diligence técnica", 
        "Estrategia de inversión", 
        "Seguimiento post-venta"
      ]
    }
  ]

  return (
    <section id="servicios" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Título de sección clásico */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(212, 175, 55, 0.1)',
            color: '#d4af37',
            padding: '0.5rem 1.5rem',
            borderRadius: '0px',
            fontSize: '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '2rem',
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
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>
            Soluciones integrales de construcción y desarrollo inmobiliario
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#4a5568', lineHeight: '1.7' }}>
            Profesionales altamente cualificados para la ejecución de obras compuesto por Ingenieros, Jefes de Obra, Topógrafos, Técnicos, Encargados y Administrativos.
          </p>
        </div>

        {/* Grid de servicios consistente */}
        <div className="services-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card"
              style={{ 
                background: 'white',
                borderRadius: '8px',
                padding: '2.5rem',
                minHeight: '480px',
                boxShadow: '0 6px 20px rgba(0,0,0,.06)',
                transition: 'all 0.3s ease',
                border: '1px solid #d4af37',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,.1)'
                e.currentTarget.style.borderColor = '#b8860b'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,.06)'
                e.currentTarget.style.borderColor = '#d4af37'
              }}
            >
              {/* Icono lineal dorado */}
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                background: 'transparent',
                border: '2px solid #d4af37',
                borderRadius: '12px',
                margin: '0 auto 1.5rem',
                color: '#d4af37'
              }}>
                {service.icon}
              </div>
              
              {/* Título directo */}
              <h3 className="service-title" style={{ 
                fontSize: 'clamp(18px, 2.2vw, 22px)', 
                fontWeight: '700', 
                color: '#1a1a1a', 
                marginBottom: '1rem',
                textAlign: 'center',
                lineHeight: '1.3'
              }}>
                {service.title}
              </h3>
              
              {/* Descripción con más aire */}
              <p style={{ 
                color: '#4a5568', 
                marginBottom: '1.5rem', 
                lineHeight: '1.5',
                textAlign: 'center',
                fontSize: 'clamp(14px, 1.4vw, 16px)'
              }}>
                {service.description}
              </p>
              
              {/* Características con check lineal dorado */}
              <ul style={{ 
                listStyle: 'none', 
                marginBottom: '2rem',
                flex: '1'
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '0.75rem',
                    color: '#374151',
                    fontSize: 'clamp(13px, 1.3vw, 15px)',
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
          marginTop: '4rem',
          padding: '3rem 0',
          borderTop: '2px solid #d4af37',
          borderBottom: '2px solid #d4af37'
        }}>
          <h3 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            color: '#1a1a1a'
          }}>
            ¿Tiene un proyecto en mente?
          </h3>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2.5rem',
            fontWeight: '400',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            color: '#4a5568',
            lineHeight: '1.6'
          }}>
            Transformemos tu visión en una realidad arquitectónica excepcional
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services