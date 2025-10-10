import { useState, useEffect } from 'react'
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
      title: "Galería de Villas Modernas",
      category: "residencial",
      image: "/villafoto1.png",
      description: "Colección de villas residenciales con diseño contemporáneo, materiales premium y acabados de primera calidad.",
      features: ["5 Villas Únicas", "Diseño Contemporáneo", "Materiales Premium", "Acabados de Lujo"],
      price: "Proyectos Completados",
      status: "Completado",
      gallery: [
        "/villafoto1.png",
        "/villafoto2.png", 
        "/villafoto3.png",
        "/villafoto4.png",
        "/villafoto5.png"
      ]
    },
    {
      id: 2,
      title: "Edificio Residencial #35",
      category: "residencial",
      image: "/images/edificio-35.jpg.png",
      description: "Edificio residencial moderno de 4-5 pisos con diseño contemporáneo, materiales premium y acabados de primera calidad.",
      features: ["4-5 Pisos", "Diseño Contemporáneo", "Materiales Premium", "Acabados de Lujo"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 3,
      title: "Villa con Piscina y Amenities",
      category: "residencial",
      image: "/images/villa-piscina.jpg.png",
      description: "Complejo residencial de lujo con piscina, pérgola moderna, comedor exterior y edificio principal de dos pisos.",
      features: ["Piscina de Lujo", "Pérgola Moderna", "Comedor Exterior", "Iluminación Estratégica"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 4,
      title: "Casa Moderna #148",
      category: "residencial",
      image: "/images/casa-148.jpg.png",
      description: "Villa moderna con estructura cúbica minimalista, materiales naturales, iluminación estratégica y jardín vertical.",
      features: ["Diseño Minimalista", "Materiales Naturales", "Iluminación LED", "Jardín Vertical"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 5,
      title: "Casa Contemporánea #146",
      category: "residencial",
      image: "/images/casa-146.jpg.png",
      description: "Residencia de lujo con puerta pivotante de madera, ventanales de doble altura y diseño arquitectónico imponente.",
      features: ["Puerta Pivotante", "Ventanales Doble Altura", "Diseño Arquitectónico", "Acabados Premium"],
      price: "Proyecto Completado",
      status: "Completado"
    },
    {
      id: 6,
      title: "Villa Residencial #186",
      category: "residencial",
      image: "/images/villa-186.jpg.png",
      description: "Casa moderna de dos pisos con escalera flotante iluminada, materiales contrastantes y diseño contemporáneo de alta gama.",
      features: ["Escalera Flotante", "Iluminación LED", "Materiales Contrastantes", "Diseño Contemporáneo"],
      price: "Proyecto Completado",
      status: "Completado"
    }
  ]

  const filters = [
    { key: 'todos', label: 'Todos los Proyectos' },
    { key: 'residencial', label: 'Residencial' }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="proyectos" className="section" style={{ 
      background: 'radial-gradient(circle at top, #FFFDF8 0%, #FFFFFF 80%)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Título de sección clásico */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            Proyectos que definen nuestro sello arquitectónico
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#4a5568', lineHeight: '1.7' }}>
            Explora los proyectos que transforman espacios y reflejan nuestra pasión por el detalle
          </p>
        </div>

        {/* Filtros con diseño clásico */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          marginBottom: '5rem' 
        }}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '6px',
                fontWeight: '500',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeFilter === filter.key 
                  ? 'linear-gradient(90deg, #D4AF37, #E2C675)' 
                  : 'transparent',
                color: activeFilter === filter.key ? '#ffffff' : '#333333',
                boxShadow: activeFilter === filter.key 
                  ? '0 0 0 2px rgba(212,175,55,0.3)' 
                  : 'none',
                border: '1px solid rgba(212,175,55,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== filter.key) {
                  (e.target as HTMLElement).style.background = '#d4af37'
                  (e.target as HTMLElement).style.color = '#1a1a1a'
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)'
                  (e.target as HTMLElement).style.boxShadow = '0 4px 10px rgba(212,175,55,0.25)'
                } else {
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)'
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== filter.key) {
                  (e.target as HTMLElement).style.background = 'transparent'
                  (e.target as HTMLElement).style.color = '#333333'
                  (e.target as HTMLElement).style.transform = 'translateY(0)'
                  (e.target as HTMLElement).style.boxShadow = 'none'
                } else {
                  (e.target as HTMLElement).style.transform = 'translateY(0)'
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
                background: '#ffffff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(0,0,0,0.08)'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.borderWidth = '1px'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)'
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)'
                e.currentTarget.style.borderWidth = '1px'
              }}
            >
              {/* Imagen del proyecto */}
              <div 
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => openLightbox(index)}
              >
                {project.gallery ? (
                  // Galería de múltiples imágenes
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    height: '250px',
                    gap: '2px'
                  }}>
                    {project.gallery.slice(0, 4).map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={img} 
                        alt={`${project.title} ${imgIndex + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          filter: 'brightness(0.95) contrast(1.05) saturate(1.1) sepia(0.1)'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'scale(1.03)'
                          e.target.style.filter = 'brightness(1) contrast(1.1) saturate(1.2) sepia(0.05)'
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'scale(1)'
                          e.target.style.filter = 'brightness(0.95) contrast(1.05) saturate(1.1) sepia(0.1)'
                        }}
                      />
                    ))}
                    {project.gallery.length > 4 && (
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        +{project.gallery.length - 4} más
                      </div>
                    )}
                  </div>
                ) : (
                  // Imagen única
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
                      e.target.style.transform = 'scale(1.03)'
                      e.target.style.filter = 'brightness(1) contrast(1.1) saturate(1.2) sepia(0.05)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)'
                      e.target.style.filter = 'brightness(0.95) contrast(1.05) saturate(1.1) sepia(0.1)'
                    }}
                  />
                )}
                
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
                    background: 'linear-gradient(90deg, #C9A33A, #E2C675)',
                    color: '#ffffff',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                    boxShadow: '0 2px 8px rgba(212,175,55,0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    COMPLETADO
                  </div>
                </div>
              </div>
              
              {/* Contenido del proyecto */}
              <div style={{ padding: '2.5rem 2rem' }}>
                {/* Título */}
                <h3 
                  className="project-title"
                  style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#111111', 
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    lineHeight: '1.3',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#C9A33A'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#111111'
                  }}
                >
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
                  color: '#555555', 
                  marginBottom: '2rem', 
                  lineHeight: '1.6',
                  fontSize: '15px'
                }}>
                  {project.description}
                </p>
                
                {/* Características */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginTop: '12px',
                  marginBottom: '2.5rem' 
                }}>
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      style={{
                        background: '#ffffff',
                        color: '#333333',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        border: '1px solid rgba(212,175,55,0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'linear-gradient(90deg, #D4AF37, #E2C675)'
                        e.target.style.color = '#ffffff'
                        e.target.style.boxShadow = '0 4px 8px rgba(212,175,55,0.25)'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = '#ffffff'
                        e.target.style.color = '#333333'
                        e.target.style.boxShadow = 'none'
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

        
        {/* Cierre narrativo final */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 0',
          marginTop: '2rem'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#5A5A5A',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Cada proyecto, una historia de precisión y diseño.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={filteredProjects.flatMap(p => p.gallery || [p.image])}
        currentIndex={lightboxIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  )
}

export default Projects