import React, { useState, useEffect } from 'react'
import Lightbox from './Lightbox'
import Button from './Button'

// Componente Projects - Galería dinámica tipo moodboard
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [isAnimating, setIsAnimating] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsAnimating(false);
    }, 150);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const projects = [
    {
      id: 1,
      title: "Edificio Residencial #35",
      category: "residencial",
      image: "/images/edificio-35.jpg.png",
      description: "Edificio residencial moderno de 4-5 pisos con diseño contemporáneo, materiales premium y acabados de primera calidad.",
      features: ["4-5 Pisos", "Diseño Contemporáneo", "Materiales Premium", "Acabados de Lujo"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 2,
      title: "Villa con Piscina y Amenities",
      category: "residencial",
      image: "/images/villa-piscina.jpg.png",
      description: "Complejo residencial de lujo con piscina, pérgola moderna, comedor exterior y edificio principal de dos pisos.",
      features: ["Piscina de Lujo", "Pérgola Moderna", "Comedor Exterior", "Iluminación Estratégica"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 3,
      title: "Casa Moderna #148",
      category: "residencial",
      image: "/images/casa-148.jpg.png",
      description: "Villa moderna con estructura cúbica minimalista, materiales naturales, iluminación estratégica y jardín vertical.",
      features: ["Diseño Minimalista", "Materiales Naturales", "Iluminación LED", "Jardín Vertical"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 4,
      title: "Casa Contemporánea #146",
      category: "residencial",
      image: "/images/casa-146.jpg.png",
      description: "Residencia de lujo con puerta pivotante de madera, ventanales de doble altura y diseño arquitectónico imponente.",
      features: ["Puerta Pivotante", "Ventanales Doble Altura", "Diseño Arquitectónico", "Acabados Premium"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 5,
      title: "Villa Residencial #186",
      category: "residencial",
      image: "/images/villa-186.jpg.png",
      description: "Casa moderna de dos pisos con escalera flotante iluminada, materiales contrastantes y diseño contemporáneo de alta gama.",
      features: ["Escalera Flotante", "Iluminación LED", "Materiales Contrastantes", "Diseño Contemporáneo"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 6,
      title: "Villa Premium con Piscina",
      category: "residencial",
      image: "/images/villa-piscina.jpg.png",
      description: "Casa de dos pisos con diseño moderno, materiales contrastantes, grandes ventanales y paisajismo exuberante.",
      features: ["2 Pisos", "Ventanales Amplios", "Paisajismo", "Diseño Moderno"],
      price: "Proyecto Completado",
      status: "Completado"
    }
  ]

  const filters = [
    { key: 'todos', label: 'Todos los Proyectos' },
    { key: 'residencial', label: 'Residencial' },
    { key: 'comercial', label: 'Comercial' },
    { key: 'remodelacion', label: 'Remodelación' }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="proyectos" className="section" style={{ backgroundColor: '#ffffff' }}>
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
            Nuestros Proyectos
          </div>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>
            Portfolio de proyectos arquitectónicos que definen el futuro de la construcción
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#4a5568', lineHeight: '1.7' }}>
            Descubre nuestra trayectoria de excelencia a través de proyectos que han transformado el paisaje urbano
          </p>
        </div>

        {/* Filtros con diseño clásico */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          marginBottom: '4rem' 
        }}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeFilter === filter.key 
                  ? '#d4af37' 
                  : 'transparent',
                color: activeFilter === filter.key ? '#1a1a1a' : '#4a5568',
                boxShadow: activeFilter === filter.key 
                  ? '0 4px 15px rgba(212, 175, 55, 0.3)' 
                  : 'none',
                border: '2px solid #d4af37',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== filter.key) {
                  e.target.style.background = '#d4af37'
                  e.target.style.color = '#1a1a1a'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.3)'
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== filter.key) {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#4a5568'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos con diseño tipo moodboard */}
        <div className={`projects-grid ${isAnimating ? 'filter-transition' : ''}`} style={{ 
          marginBottom: '4rem'
        }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`card-hover ${isAnimating ? 'filter-active' : ''}`}
              style={{
                background: '#FAFAFA',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.borderColor = '#d4af37'
                e.currentTarget.style.borderWidth = '2px'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = '#e2e8f0'
                e.currentTarget.style.borderWidth = '1px'
              }}
            >
              {/* Imagen del proyecto */}
              <div 
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    filter: 'brightness(0.95) contrast(1.05) saturate(1.1) sepia(0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.1)'
                    e.target.style.filter = 'brightness(1) contrast(1.1) saturate(1.2) sepia(0.05)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)'
                    e.target.style.filter = 'brightness(0.95) contrast(1.05) saturate(1.1) sepia(0.1)'
                  }}
                />
                
                {/* Overlay sutil para cohesión visual */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.1)',
                  transition: 'background 0.3s ease'
                }} />
                
                {/* Etiqueta de estado sobria */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem'
                }}>
                  <div style={{
                    background: '#1a1a1a',
                    color: '#C5A349',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    COMPLETADO
                  </div>
                </div>
              </div>
              
              {/* Contenido del proyecto */}
              <div style={{ padding: '2.5rem 2rem' }}>
                {/* Título */}
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1a1a1a', 
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  {project.title.split('#').map((part, index) => 
                    index === 0 ? part : (
                      <span key={index}>
                        <span style={{ color: '#d4af37' }}>#{part}</span>
                      </span>
                    )
                  )}
                </h3>
                
                {/* Descripción */}
                <p style={{ 
                  color: '#333333', 
                  marginBottom: '2rem', 
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>
                
                {/* Características */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem', 
                  marginBottom: '2.5rem' 
                }}>
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      style={{
                        background: 'transparent',
                        color: '#4a5568',
                        padding: '0.4rem 0.6rem',
                        borderRadius: '22px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        border: '1px solid #d4af37',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#d4af37'
                        e.target.style.color = '#1a1a1a'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent'
                        e.target.style.color = '#4a5568'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final Elegante */}
        <div style={{
          textAlign: 'center',
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
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '1.5rem',
              fontFamily: 'Playfair Display, serif'
            }}>
              Convertimos su idea en un espacio que perdura
            </h3>
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
                data-cta="iniciar-mi-proyecto-projects"
              >
                Iniciar Mi Proyecto
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={filteredProjects.map(p => p.image)}
        currentIndex={lightboxIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  )
}

export default Projects