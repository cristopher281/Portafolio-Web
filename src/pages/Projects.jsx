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
            icon: <i className="fas fa-water"></i>,
            title: 'Porton Utomatizado',
            category: ['iot'],
            image: '/assets/images/projects/Porton-ESP32.png',
            description: 'Una solución moderna y accesible para controlar su portón desde cualquier lugar. Incluye sensores en tiempo real, apertura y cierre remoto, interfaz web intuitiva y máxima seguridad en cada operación. Ideal para hogares, negocios y propiedades que buscan comodidad, control y automatización sin costos elevados. Fácil de instalar, mantener y adaptar a cualquier tipo de portón.',
            technologies: ['IoT', 'ESP32', 'Sensores', 'Dashboard', 'Automatización']
        },
        {
            id: 2,
            icon: <i className="fas fa-laptop-code"></i>,
            title: 'Biblioteca UML – Catálogo de Recursos Académicos',
            category: ['web'],
            image: '/assets/Gemini_Generated_Image_6ic4td6ic4td6ic4.png',
            description: 'Plataforma web que organiza y presenta una colección de enlaces académicos curados para facilitar investigación y estudio. Permite buscar, explorar y filtrar recursos educativos de forma rápida y accesible.',
            technologies: ['React', 'Node.js', 'MySQL', 'API REST']
        },
        {
            id: 3,
            icon: <i className="fas fa-microchip"></i>,
            title: 'AquaVisor – Plataforma IoT para Monitoreo de Caudal',
            category: ['iot', 'automation'],
            image: '/assets/AcuaVisor.png',
            description: 'Solución avanzada para lectura, análisis y gestión de datos de caudal. Incluye arquitectura con almacenamiento dual, paneles interactivos y herramientas profesionales de informes en tiempo real.',
            technologies: ['Arduino', 'Sensores', 'IoT', 'Automatización']
        }
        ,
        {
            id: 4,
            icon: <i className="fas fa-heartbeat"></i>,
            title: 'Vital-IA — Asistente Online de Bienestar',
            category: ['web', 'iot'],
            image: '/assets/Vital.ia.png',
            description: 'Plataforma web que ofrece asistencia online enfocada en salud integral: bienestar físico, emocional y mental. Combina una interfaz moderna con lógica robusta para brindar apoyo personalizado a usuarios.',
            technologies: ['IA', 'Tyscript', 'React', 'N8n', 'Workflows']
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

                    {/* Grid de Proyectos - uso de la grid específica */}
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="skill-category project-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(0, 255, 247, 0.2)'
                                }}
                                data-category={project.category.join(' ')}
                            >
                                {/* Imagen del proyecto (si existe) */}
                                {project.image && (
                                    <div className="project-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.currentTarget.onerror = null
                                                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23202224%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23e6fff9%22 font-size=%2224%22>Imagen%20no%20disponible</text></svg>'
                                            }}
                                        />
                                        {/* overlay removed to keep image clean */}
                                    </div>
                                )}
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    <motion.span
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {project.icon}
                                    </motion.span>
                                    {' '}{project.title}
                                </motion.h3>

                                <motion.p
                                    style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    {project.description}
                                </motion.p>

                                <div className="skills-list">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className="skill-tag"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: index * 0.1 + techIndex * 0.05,
                                                duration: 0.3
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: '0 5px 15px rgba(0, 255, 247, 0.3)'
                                            }}
                                        >
                                            {tech}
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

export default Projects
