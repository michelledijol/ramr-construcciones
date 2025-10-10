import React, { useState } from 'react'

// Componente Contact - como el botón de "Contactar" en Instagram
const Contact = () => {
  // Estado para el formulario - como los datos que llenas en una app
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })

  // Estado para el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Función para manejar cambios en el formulario - como escribir un mensaje
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Función para enviar el formulario - como enviar un mensaje
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario (aquí conectarías con tu backend)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Resetear formulario después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      })
    }, 3000)
  }

  // Datos de contacto - como la información del perfil
  const contactInfo = [
    {
      icon: "📞",
      title: "Teléfono",
      details: ["1-829-717-7552"],
      action: "Llamar ahora"
    },
    {
      icon: "📧",
      title: "Email",
      details: ["ramrconstrucciones.srl@gmail.com"],
      action: "Enviar email"
    },
    {
      icon: "👤",
      title: "Contacto",
      details: ["Roberto Martínez", "RAMR Construcciones SRL"],
      action: "WhatsApp"
    },
    {
      icon: "🕒",
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 9:00 - 14:00"],
      action: "Consultar disponibilidad"
    }
  ]

  return (
    <section id="contacto" className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Título de sección */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            ¿Listo para tu próximo <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>proyecto?</span>
          </h2>
          <p className="section-subtitle">
            Contáctanos para una consulta gratuita y descubre cómo podemos hacer realidad tu visión
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto - como el formulario de contacto en una app */}
          <div className="bg-white rounded-2xl p-8 shadow-constructora">
            <h3 className="text-2xl font-bold text-constructora-black mb-6">
              Envíanos un mensaje
            </h3>
            
            {isSubmitted ? (
              // Mensaje de confirmación - como la confirmación de envío
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-constructora-black mb-2">
                  ¡Mensaje enviado!
                </h4>
                <p className="text-constructora-text">
                  Te contactaremos en las próximas 24 horas
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-constructora-black mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-constructora-red focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-constructora-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-constructora-red focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-constructora-black mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-constructora-red focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Tipo de proyecto */}
                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-constructora-black mb-2">
                    Tipo de proyecto *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-constructora-red focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un tipo de proyecto</option>
                    <option value="construccion">Construcción nueva</option>
                    <option value="remodelacion">Remodelación</option>
                    <option value="venta">Compra de propiedad</option>
                    <option value="consultoria">Consultoría inmobiliaria</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-constructora-black mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-constructora-red focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe tu proyecto, presupuesto aproximado, ubicación, etc."
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'btn-primary hover:shadow-constructora-lg'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                </button>
              </form>
            )}
          </div>

          {/* Información de contacto - como la información del perfil */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-constructora-black mb-6">
                Información de contacto
              </h3>
              <p className="text-constructora-text leading-relaxed">
                Estamos aquí para ayudarte con tu próximo proyecto. Contáctanos por cualquier medio y te responderemos lo antes posible.
              </p>
            </div>

            {/* Cards de información - como las historias de información */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-constructora hover:shadow-constructora-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    {/* Icono */}
                    <div className="text-3xl">
                      {info.icon}
                    </div>
                    
                    {/* Contenido */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-constructora-black mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-constructora-text mb-1">
                          {detail}
                        </p>
                      ))}
                      <a 
                        href={
                          info.title === "Teléfono" ? "tel:+18297177552" :
                          info.title === "Email" ? "mailto:ramrconstrucciones.srl@gmail.com" :
                          info.title === "Contacto" ? "https://wa.me/18297177552" :
                          "#"
                        }
                        className="inline-block mt-3 text-constructora-red font-semibold hover:text-constructora-red-dark transition-colors duration-300"
                        target={info.title === "Contacto" ? "_blank" : undefined}
                        rel={info.title === "Contacto" ? "noopener noreferrer" : undefined}
                      >
                        {info.action} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA adicional */}
            <div className="bg-constructora-red rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">
                ¿Necesitas una respuesta rápida?
              </h4>
              <p className="mb-4">
                Llámanos directamente para una consulta inmediata
              </p>
              <a 
                href="tel:+18297177552" 
                className="inline-block bg-white text-constructora-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
