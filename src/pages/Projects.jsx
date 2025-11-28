import { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const filters = [
        { id: 'all', label: 'Todos' },
        { id: 'web', label: 'Web' },
        { id: 'iot', label: 'IoT' },
        { id: 'automation', label: 'Automatización' }
    ]

    const projects = [
        {
            id: 1,
            title: 'Sistema de Acceso Automatizado con Reconocimiento Facial',
            category: ['iot', 'automation'],
            description: 'Sistema completo de control de acceso con Arduino, sensores y reconocimiento facial',
            technologies: ['Arduino', 'Python', 'OpenCV', 'MySQL', 'React'],
            image: '/assets/images/proyecto-acceso.jpg'
        },
        {
            id: 2,
            title: 'Plataforma Web Full Stack',
            category: ['web'],
            description: 'Aplicación web completa con frontend en React y backend personalizado',
            technologies: ['React', 'Node.js', 'MySQL', 'API REST'],
            image: '/assets/images/proyecto-web.jpg'
        },
        {
            id: 3,
            title: 'Prototipo IoT para Competencia Nacional',
            category: ['iot', 'automation'],
            description: 'Sistema IoT funcional desarrollado para competencia académica',
            technologies: ['Arduino', 'Sensores', 'IoT', 'Automatización'],
            image: '/assets/images/proyecto-iot.jpg'
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category.includes(activeFilter))

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
                        Proyectos
                    </motion.h1>

                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Algunos de mis trabajos más destacados
                    </motion.p>

                    {/* Filtros */}
                    <motion.div
                        className="project-filters"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {filters.map((filter, index) => (
                            <motion.button
                                key={filter.id}
                                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                data-filter={filter.id}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Grid de Proyectos */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{
                                    y: -15,
                                    boxShadow: '0 25px 50px rgba(0, 255, 247, 0.3)'
                                }}
                                data-category={project.category.join(' ')}
                            >
                                <motion.div
                                    className="project-image"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={project.image} alt={project.title} />
                                </motion.div>

                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                className="tech-tag"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Projects
