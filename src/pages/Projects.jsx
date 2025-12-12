import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const carouselRef = useRef(null)
    const smallScreenRef = useRef(false)


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
            description: 'Una solución moderna y accesible para controlar su portón desde cualquier lugar. Incluye sensores en tiempo real, apertura y cierre remoto, interfaz web intuitiva y máxima seguridad en cada operación. Ideal para hogares, negocios y propiedades que buscan comodidad, control y automatización sin costos elevados. Fácil de instalar, mantener y adaptar a cualquier tipo de portón.',
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
            description: 'Solución avanzada para lectura, análisis y gestión de datos de caudal. Incluye arquitectura con almacenamiento dual, paneles interactivos y herramientas profesionales de informes en tiempo real.',
            technologies: ['Arduino', 'Sensores', 'IoT', 'Automatización']
        },
        {
            id: 4,
            icon: <i className="fas fa-heartbeat"></i>,
            title: 'Vital-IA — Asistente Online de Bienestar',
            category: ['web', 'iot'],
            image: '/assets/Vital.ia.png',
            description: 'Plataforma web que ofrece asistencia online enfocada en salud integral: bienestar físico, emocional y mental. Combina una interfaz moderna con lógica robusta para brindar apoyo personalizado a usuarios.',
            technologies: ['IA', 'Tyscript', 'React', 'N8n', 'Workflows']
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category.includes(activeFilter))

    // Duplicate projects for infinite loop effect (use double to reduce DOM load)
    const duplicatedProjects = [...filteredProjects, ...filteredProjects]

    // Detect small screens and disable tilt to improve performance on mobile
    useEffect(() => {
        const check = () => { smallScreenRef.current = window.innerWidth <= 768 }
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    // Auto-scroll effect
    useEffect(() => {
        if (!carouselRef.current || isPaused || isDragging) return

        const carousel = carouselRef.current
        // Velocidad de desplazamiento automático en píxeles por frame (requestAnimationFrame ~60fps)
        // Incrementado para un auto-scroll más ágil
        const scrollSpeed = 2.5 // pixels per frame
        let animationFrameId

        const autoScroll = () => {
            // reset when we've scrolled half (since we duplicated twice)
            if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = 0
            } else {
                carousel.scrollLeft += scrollSpeed
            }
            animationFrameId = requestAnimationFrame(autoScroll)
        }

        animationFrameId = requestAnimationFrame(autoScroll)

        return () => cancelAnimationFrame(animationFrameId)
    }, [isPaused, isDragging, filteredProjects])

    // Pause auto-scroll when carousel is not visible on screen (saves CPU)
    useEffect(() => {
        const el = carouselRef.current
        if (!el) return
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsPaused(!entry.isIntersecting)
            })
        }, { threshold: 0.1 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    // Drag to scroll handlers
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - carouselRef.current.offsetLeft
        const walk = (x - startX) * 2
        carouselRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
        setScrollLeft(carouselRef.current.scrollLeft)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft
        const walk = (x - startX) * 2
        carouselRef.current.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
    }

    // Navigation arrows
    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -700, behavior: 'smooth' })
        }
    }

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 700, behavior: 'smooth' })
        }
    }

    // Modal handlers
    const openModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
        document.body.style.overflow = 'auto'
    }

    // Handle card click (only open if not dragging)
    const handleCardClick = (project) => {
        // Don't open modal if user was dragging
        if (!isDragging) {
            openModal(project)
        }
    }

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal()
            }
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [isModalOpen])


    // 3D tilt handlers for cards (throttled via requestAnimationFrame)
    const rafMapRef = useRef(new Map())

    const handleCardMouseMove = (e) => {
        const el = e.currentTarget
        // don't run tilt on touch/drag
        if (isDragging || smallScreenRef.current) return
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2
        const dx = (x - cx) / cx
        const dy = (y - cy) / cy
        const rotX = (dy * 7).toFixed(2)
        const rotY = (dx * -7).toFixed(2)

        // throttle style writes with rAF
        const prev = rafMapRef.current.get(el)
        if (prev) cancelAnimationFrame(prev)
        const id = requestAnimationFrame(() => {
            el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`
        })
        rafMapRef.current.set(el, id)
    }

    const handleCardMouseLeaveLocal = (e) => {
        const el = e.currentTarget
        const prev = rafMapRef.current.get(el)
        if (prev) cancelAnimationFrame(prev)
        el.style.transition = 'transform 600ms cubic-bezier(.2,.8,.2,1)'
        el.style.transform = ''
        setTimeout(() => {
            el.style.transition = ''
        }, 700)
    }

    const handleCardMouseEnterLocal = (e) => {
        e.currentTarget.style.transition = 'transform 120ms ease'
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

                    {/* Horizontal Scrolling Carousel */}
                    <div className="projects-carousel-wrapper">

                        <div
                            className="projects-carousel-container"
                            ref={carouselRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={() => {
                                handleMouseLeave()
                                setIsPaused(false)
                            }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onMouseEnter={() => setIsPaused(true)}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        >
                            <div className="projects-carousel-track">
                                {duplicatedProjects.map((project, index) => (
                                    <div
                                        key={`${project.id}-${index}`}
                                        className="skill-category project-card carousel-card"
                                        onMouseMove={handleCardMouseMove}
                                        onMouseLeave={handleCardMouseLeaveLocal}
                                        onMouseEnter={handleCardMouseEnterLocal}
                                        onClick={() => handleCardClick(project)}
                                        data-category={project.category.join(' ')}
                                    >
                                        {/* Imagen del proyecto (si existe) */}
                                        {project.image && (
                                            <div className="project-image-wrapper">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    draggable="false"
                                                    onError={(e) => {
                                                        e.currentTarget.onerror = null
                                                        e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23202224%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23e6fff9%22 font-size=%2224%22>Imagen%20no%20disponible</text></svg>'
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <motion.h3
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: (index % filteredProjects.length) * 0.1 + 0.2 }}
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
                                            transition={{ delay: (index % filteredProjects.length) * 0.1 + 0.3 }}
                                        >
                                            {project.description.substring(0, 120)}...
                                        </motion.p>

                                        <div className="skills-list">
                                            {project.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className="skill-tag"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        delay: (index % filteredProjects.length) * 0.1 + techIndex * 0.05,
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

                                        {/* Click hint */}
                                        <div className="card-click-hint">
                                            <i className="fas fa-search-plus"></i> Click para ver más
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                    </div>

                    {/* Modal for expanded project view */}
                    {isModalOpen && selectedProject && (
                        <motion.div
                            className="card-modal-overlay"
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="card-modal-content"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.9, y: 30 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 30 }}
                            >
                                <button
                                    className="card-modal-close"
                                    onClick={closeModal}
                                    aria-label="Close modal"
                                >
                                    <i className="fas fa-times"></i>
                                </button>

                                <div className="card-modal-body">
                                    {selectedProject.image && (
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="modal-project-image"
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null
                                                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23202224%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23e6fff9%22 font-size=%2224%22>Imagen%20no%20disponible</text></svg>'
                                            }}
                                        />
                                    )}

                                    <div className="modal-project-header">
                                        <div className="modal-project-icon">
                                            {selectedProject.icon}
                                        </div>
                                        <h2 className="modal-project-title">
                                            {selectedProject.title}
                                        </h2>
                                    </div>

                                    <p className="modal-project-description">
                                        {selectedProject.description}
                                    </p>

                                    <div className="modal-technologies">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span key={index} className="modal-tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </section>
        </motion.div>
    )
}

export default Projects
