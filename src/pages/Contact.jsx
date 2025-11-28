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

        // Simulación de envío
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
            <section className="section">
                <div className="container">
                    <motion.h1
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contacto
                    </motion.h1>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        ¿Tienes un proyecto en mente? ¡Hablemos!
                    </motion.p>

                    <div className="contact-content">
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label htmlFor="name">Nombre</label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label htmlFor="email">Email</label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="form-group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label htmlFor="message">Mensaje</label>
                                    <motion.textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    ></motion.textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={isSubmitting}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </motion.button>
                            </form>
                        </motion.div>

                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <motion.div
                                className="info-card"
                                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 255, 247, 0.2)' }}
                            >
                                <i className="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>cristopher.valladares@example.com</p>
                            </motion.div>

                            <motion.div
                                className="info-card"
                                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 255, 247, 0.2)' }}
                            >
                                <i className="fab fa-github"></i>
                                <h3>GitHub</h3>
                                <p>github.com/cristopher-valladares</p>
                            </motion.div>

                            <motion.div
                                className="info-card"
                                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 255, 247, 0.2)' }}
                            >
                                <i className="fab fa-linkedin"></i>
                                <h3>LinkedIn</h3>
                                <p>linkedin.com/in/cristopher-valladares</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact
