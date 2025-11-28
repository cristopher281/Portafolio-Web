import { motion } from 'framer-motion'
import Card from '../components/Card'

const About = () => {
    const stats = [
        {
            icon: <i className="fas fa-graduation-cap"></i>,
            title: 'Educación',
            text: 'Ingeniería en Sistemas (2.º año)'
        },
        {
            icon: <i className="fas fa-laptop-code"></i>,
            title: 'Especialidad',
            text: 'Full Stack & IoT/Automatización'
        },
        {
            icon: <i className="fas fa-rocket"></i>,
            title: 'Objetivo',
            text: 'Ingeniero & Desarrollador'
        },
        {
            icon: <i className="fas fa-certificate"></i>,
            title: 'Certificaciones',
            text: 'Inteligencia Artificial - BIG School'
        }
    ]

    const qualities = [
        {
            icon: <i className="fas fa-users-cog"></i>,
            title: 'Liderazgo',
            text: 'Capacidad para liderar proyectos académicos, gestionar equipos y coordinar entregables'
        },
        {
            icon: <i className="fas fa-lightbulb"></i>,
            title: 'Resolución de Problemas',
            text: 'Enfoque analítico para identificar y resolver desafíos técnicos complejos'
        },
        {
            icon: <i className="fas fa-sync-alt"></i>,
            title: 'Adaptabilidad',
            text: 'Flexibilidad para trabajar con diferentes tecnologías y metodologías'
        },
        {
            icon: <i className="fas fa-chart-line"></i>,
            title: 'Pensamiento Analítico',
            text: 'Capacidad para analizar sistemas, optimizar procesos y tomar decisiones técnicas'
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
                        Sobre Mí
                    </motion.h1>

                    <motion.div
                        className="about-intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p>
                            Soy estudiante de Ingeniería en Sistemas con enfoque en el desarrollo de soluciones
                            tecnológicas integrales que combinan software, automatización electrónica e ingeniería aplicada. Mi
                            trabajo se centra en crear sistemas funcionales que resuelvan problemas reales mediante el uso de
                            tecnologías modernas como React, MySQL, APIs y automatización con Arduino/IoT.
                        </p>
                        <p>
                            Me caracterizo por liderar proyectos académicos con visión de producto, gestionando equipos,
                            organizando tareas y transformando conceptos teóricos en soluciones completas, estables y
                            escalables. He desarrollado sistemas de acceso automatizado, plataformas web full stack y prototipos
                            funcionales para competencias nacionales.
                        </p>
                        <p>
                            Busco consolidar mi carrera como ingeniero y desarrollador, aportando mis capacidades en
                            análisis, codificación, integración de hardware y toma de decisiones técnicas para proyectos que
                            requieran innovación, eficiencia y enfoque profesional.
                        </p>
                    </motion.div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                icon={stat.icon}
                                title={stat.title}
                                text={stat.text}
                                className="card-center"
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <motion.h2
                        className="section-title"
                        style={{ marginTop: 'var(--spacing-3xl)' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Certificados y Logros
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Formación continua en tecnologías modernas
                    </motion.p>

                    <div className="about-stats">
                        <motion.div
                            className="certificate-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 255, 247, 0.2)' }}
                        >
                            <img src="/assets/images/foto-certificado.jpg" alt="Certificado de aprendizaje" />
                            <h3>Certificado de Aprendizaje</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Reconocimiento por completar el curso
                            </p>
                        </motion.div>

                        <motion.div
                            className="certificate-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 255, 247, 0.2)' }}
                        >
                            <img src="/assets/images/certificado-ia.jpg" alt="Curso de Iniciación al Desarrollo con IA" />
                            <h3>Desarrollo con IA</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Curso de Iniciación al Desarrollo con IA - BIG school (6 horas)
                            </p>
                        </motion.div>
                    </div>

                    <motion.h2
                        className="section-title"
                        style={{ marginTop: 'var(--spacing-3xl)' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Formación Académica
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Mi trayectoria educativa y desarrollo profesional
                    </motion.p>

                    <div className="about-stats">
                        <Card delay={0}>
                            <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--spacing-md)' }}>
                                <i className="fas fa-university"></i> Ingeniería en Sistemas (En curso – 2.º año)
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                                <strong>Universidad Martín Lutero – Sede Ocotal</strong>
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Formación integral en desarrollo de software, bases de datos, automatización y gestión
                                de proyectos tecnológicos.
                            </p>
                        </Card>

                        <Card delay={0.1}>
                            <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--spacing-md)' }}>
                                <i className="fas fa-robot"></i> Certificación en Inteligencia Artificial
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-sm)' }}>
                                <strong>BIG School – 2025</strong>
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Curso de Iniciación al Desarrollo con IA, enfocado en integración de herramientas de
                                inteligencia artificial en proyectos de desarrollo.
                            </p>
                        </Card>

                        <Card delay={0.2}>
                            <h3 style={{ color: 'var(--primary-cyan)', marginBottom: 'var(--spacing-md)' }}>
                                <i className="fas fa-code"></i> Otros Aprendizajes
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                Trabajo en equipo, desarrollo de proyectos académicos, metodologías prácticas de
                                programación y automatización, liderazgo de equipos técnicos y gestión de entregables.
                            </p>
                        </Card>
                    </div>

                    <motion.h2
                        className="section-title"
                        style={{ marginTop: 'var(--spacing-3xl)' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        ¿Por qué yo?
                    </motion.h2>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Cualidades que me definen como desarrollador
                    </motion.p>

                    <div className="qualities-grid">
                        {qualities.map((quality, index) => (
                            <motion.div
                                key={index}
                                className="quality-card"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(0, 255, 247, 0.2)'
                                }}
                            >
                                <motion.div
                                    className="quality-icon"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {quality.icon}
                                </motion.div>
                                <h3>{quality.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
                                    {quality.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default About
