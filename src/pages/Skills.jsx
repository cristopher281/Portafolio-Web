import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            icon: <i className="fab fa-react"></i>,
            title: 'Desarrollo Web',
            skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
        },
        {
            icon: <i className="fas fa-database"></i>,
            title: 'Backend y Bases de Datos',
            skills: ['MySQL', 'APIs', 'Estructuración de Datos', 'Backend Development']
        },
        {
            icon: <i className="fas fa-microchip"></i>,
            title: 'Automatización y Electrónica',
            skills: ['Arduino', 'IoT', 'Sensores', 'Módulos de Control', 'Automatización']
        },
        {
            icon: <i className="fas fa-project-diagram"></i>,
            title: 'Integraciones',
            skills: ['n8n', 'Flujos Automáticos', 'Sistemas Híbridos', 'Integración IA']
        },
        {
            icon: <i className="fas fa-tools"></i>,
            title: 'Software y Productividad',
            skills: ['GitHub', 'VS Code', 'Git', 'Paquete Office']
        },
        {
            icon: <i className="fas fa-user-friends"></i>,
            title: 'Habilidades Blandas',
            skills: ['Liderazgo', 'Resolución de Problemas', 'Adaptabilidad', 'Pensamiento Analítico', 'Trabajo en Equipo']
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
                        Habilidades Técnicas
                    </motion.h1>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Tecnologías y herramientas que domino y estoy aprendiendo
                    </motion.p>

                    <div className="skills-grid">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="skill-category"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(0, 255, 247, 0.2)'
                                }}
                            >
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    <motion.span
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {category.icon}
                                    </motion.span>
                                    {' '}{category.title}
                                </motion.h3>

                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            className="skill-tag"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.1 + skillIndex * 0.05,
                                                duration: 0.3
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: '0 5px 15px rgba(0, 255, 247, 0.3)'
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Skills
