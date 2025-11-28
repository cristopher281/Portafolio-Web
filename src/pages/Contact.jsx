import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'
import { MdEmail, MdBusinessCenter } from 'react-icons/md'

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

        // WhatsApp redirection logic
        const phoneNumber = '50581663656' // User provided number with Honduras country code
        const text = `Hola, soy ${formData.name}. ${formData.message} (Mi correo es: ${formData.email})`
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

        window.open(whatsappUrl, '_blank')

        setIsSubmitting(false)
        setFormData({ name: '', email: '', message: '' })
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
                    <div className="contact-form-container-modern">
                        <form className="contact-form-modern" onSubmit={handleSubmit} autoComplete="off">
                            <div className="form-row">
                                <div className="input-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Introduce tu nombre completo"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="tu.email@ejemplo.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Mensaje</label>
                                <textarea
                                    name="message"
                                    placeholder="Escribe aquí tu mensaje..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-footer">
                                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Redirigiendo...' : 'Enviar Mensaje'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-info-modern">
                        <h3>Canales de Contacto Directo</h3>
                        <div className="contact-details">
                            <a href="mailto:vallecristopher102@gmail.com" className="contact-detail">
                                <span className="contact-icon"><MdEmail /></span>
                                <div>
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">vallecristopher102@gmail.com</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/cristophervalle?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-detail">
                                <span className="contact-icon"><MdBusinessCenter /></span>
                                <div>
                                    <span className="contact-label">LinkedIn</span>
                                    <span className="contact-value">Conecta profesionalmente</span>
                                </div>
                            </a>
                        </div>

                        <h3 className="social-title">Redes Sociales</h3>
                        <div className="contact-social-footer">
                            <a href="https://www.linkedin.com/in/cristophervalle?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
                            <a href="https://github.com/cristopher281" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
                            <a href="#" className="social-link"><FaGlobe /></a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact
