import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            alert(`¡Gracias por tu mensaje, ${formData.name}! Me pondré en contacto contigo pronto a ${formData.email}.`)
            setFormData({ name: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="section contact-section">
                <div className="container contact-grid">
                    <div className="contact-info-modern">
                        <h2>Iniciemos<br /><span>Comunicación</span></h2>
                        <p>Cuéntame sobre el proyecto o necesidad, estaré feliz de responderte lo antes posible. Tu mensaje es privado y seguro.</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                                <span className="contact-label">mail</span>
                                <span className="contact-value">tuemail@dominio.com</span>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-icon"><i className="material-icons">business_center</i></span>
                                <span className="contact-label">LinkedIn</span>
                                <span className="contact-value">/cristophervalladares</span>
                            </div>
                        </div>
                        <div className="contact-social">
                            {/* Aquí puedes agregar iconos sociales si lo deseas */}
                        </div>
                    </div>
                    <form className="contact-form-modern" onSubmit={handleSubmit} autoComplete="off">
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Escribe tu nombre completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Escribe tu mensaje..."
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact
