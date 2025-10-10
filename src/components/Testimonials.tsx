import React, { useEffect, useState } from 'react'

// Componente Testimonials - Testimonios de clientes
const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonios');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Propietaria de Villa Residencial",
      content: "RAMR Construcciones superó nuestras expectativas: materiales de primera, atención impecable y una ejecución que convirtió nuestro sueño en realidad.",
      rating: 5,
      project: "Casa Moderna #146"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Inversionista Inmobiliario",
      content: "Trabajo con RAMR desde hace años: entregan siempre a tiempo, con calidad excepcional y un profesionalismo que marca la diferencia en el mercado.",
      rating: 5,
      project: "Complejo Residencial #186"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Arquitecta",
      content: "Como arquitecta, valoro la precisión y calidad. RAMR no solo cumple con los planos, sino que aporta soluciones innovadoras que elevan cada proyecto.",
      rating: 5,
      project: "Casa Contemporánea #148"
    },
    {
      id: 4,
      name: "Roberto Silva",
      role: "Empresario",
      content: "La transparencia en los costos y la comunicación constante durante todo el proceso fueron clave para el éxito de nuestro proyecto. RAMR es sinónimo de confianza.",
      rating: 5,
      project: "Villa Residencial Premium"
    },
    {
      id: 5,
      name: "Laura Fernández",
      role: "Propietaria",
      content: "Desde el primer día, el equipo de RAMR nos hizo sentir parte del proceso. Su dedicación y compromiso con la excelencia se reflejan en cada detalle de nuestra casa.",
      rating: 5,
      project: "Casa Moderna #35"
    },
    {
      id: 6,
      name: "Miguel Torres",
      role: "Desarrollador Inmobiliario",
      content: "RAMR Construcciones es nuestro socio estratégico para todos los proyectos residenciales. Su capacidad de entrega y calidad constante nos ha permitido crecer en el mercado.",
      rating: 5,
      project: "Complejo con Piscina y Amenities"
    }
  ]

  return (
    <section id="testimonios" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Título de sección */}
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
            border: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            Testimonios
          </div>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#1a1a1a', fontFamily: 'Playfair Display, serif' }}>
            Lo que dicen nuestros clientes
          </h2>
          {/* Línea decorativa dorada con animación */}
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #D4AF37, #E2C675)',
            margin: '0 auto 2rem',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.6s ease'
          }}></div>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.25rem', color: '#4a5568', lineHeight: '1.7' }}>
            Cada proyecto deja huella. La satisfacción de nuestros clientes es la mejor prueba de nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 175, 55, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Comillas decorativas */}
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '0',
                fontSize: '8rem',
                color: '#CDA349',
                opacity: '0.06',
                fontFamily: 'Playfair Display, serif',
                lineHeight: '1',
                zIndex: '0'
              }}>
                "
              </div>
              
              <div style={{ position: 'relative', zIndex: '1' }}>
                {/* Rating */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.25rem', 
                  marginBottom: '1.5rem' 
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        background: 'linear-gradient(90deg, #D4AF37, #E2C675)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '1.2rem',
                        letterSpacing: '1px'
                      }}
                    >★</span>
                  ))}
                </div>

                {/* Contenido del testimonio */}
                <p style={{
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  color: '#333',
                  fontSize: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  {testimonial.content}
                </p>

                {/* Línea dorada decorativa */}
                <div style={{
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #D4AF37, #E2C675)',
                  margin: '16px 0',
                  borderRadius: '2px'
                }}></div>

                {/* Información del cliente */}
                <div style={{ paddingTop: '0.5rem' }}>
                  <h4 style={{
                    fontWeight: '700',
                    color: '#111',
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '0.5rem'
                  }}>
                    {testimonial.role}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#C9A33A',
                    fontStyle: 'italic'
                  }}>
                    Proyecto: {testimonial.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frase narrativa de cierre */}
        <div style={{
          textAlign: 'center',
          padding: '2rem 0',
          marginTop: '1.5rem'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#8A8A8A',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            fontStyle: 'italic',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            Cada historia de satisfacción nos inspira a seguir construyendo con excelencia.
          </p>
        </div>

        {/* CTA de testimonios */}
        <div style={{
          textAlign: 'center',
          background: 'white',
          padding: '4rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '2px solid #d4af37'
        }}>
          <h3 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif',
            color: '#1a1a1a'
          }}>
            ¿Listo para ser nuestro próximo caso de éxito?
          </h3>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            color: '#4a5568',
            lineHeight: '1.6'
          }}>
            Únete a la lista de clientes satisfechos que han confiado en RAMR Construcciones
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials