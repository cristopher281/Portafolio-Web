import { motion } from 'framer-motion'
import Card from '../components/Card'

const Offers = () => {
    const services = [
        {
            icon: <i className="fas fa-code"></i>,
            title: 'Desarrollo Web Frontend',
            description: 'Creación de interfaces modernas y responsive con React, HTML5, CSS3 y JavaScript'
        },
        {
            icon: <i className="fas fa-database"></i>,
            title: 'Desarrollo Full Stack',
            description: 'Aplicaciones web completas con frontend, backend y bases de datos'
        },
        {
            icon: <i className="fas fa-microchip"></i>,
            title: 'Automatización IoT',
            description: 'Sistemas de automatización con Arduino, sensores y control remoto'
        },
        {
            icon: <i className="fas fa-project-diagram"></i>,
            title: 'Integración de Sistemas',
            description: 'Conexión de diferentes plataformas y servicios mediante APIs y flujos automáticos'
        }
    ]

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
                        Servicios y Ofertas
                    </motion.h1>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Lo que puedo ofrecer para tu proyecto
                    </motion.p>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                text={service.description}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="cta-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <h2>¿Interesado en trabajar juntos?</h2>
                        <p>Estoy disponible para proyectos freelance y colaboraciones</p>
                        <motion.a
                            href="/contacto"
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contáctame
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default Offers
