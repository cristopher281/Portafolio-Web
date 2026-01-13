import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
    // Split name into words, then letters to prevent mid-word breaks
    const animatedText = 'Cristopher Valladares'
    const [waveActive, setWaveActive] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setWaveActive(true)
            // remove shortly after to allow retrigger
            setTimeout(() => setWaveActive(false), 700)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    // Create words -> letters structure so words can wrap but letters won't break
    const words = animatedText.split(' ')
    let letterCounter = 0
    const wordSpans = words.map((word, wIdx) => {
        const letters = word.split('').map((char) => {
            const idx = letterCounter
            letterCounter += 1
            return (
                <span
                    key={idx}
                    className="letter"
                    style={{
                        animationDelay: `${idx * 0.04}s`,
                        // CSS custom property for staggered effects
                        ['--letter-index']: idx
                    }}
                >
                    {char}
                </span>
            )
        })

        return (
            <span key={wIdx} className="word">
                {letters}
            </span>
        )
    })

    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Hola, soy <span className={`highlight highlight-animated${waveActive ? ' wave-active' : ''}`}>{wordSpans}</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Desarrollador Web Frontend
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            Estudiante de Ingeniería en Sistemas apasionado por crear experiencias web
                            modernas, interactivas y funcionales. Especializado en desarrollo frontend
                            con enfoque en diseño responsive y animaciones creativas.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/proyectos" className="btn-primary">
                                    Ver Proyectos
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/contacto" className="btn-secondary">
                                    Contactar
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    >
                        <motion.div
                            className="hero-video-wrapper"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="hero-video-glow"></div>
                            <motion.img
                                src="https://vmchtsktrlkminhbiosx.supabase.co/storage/v1/object/sign/portafolio-web/video%20para%20portafolio.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk3OWU5OC0zN2QzLTQyYmYtOTRiMy1kNTRlNjlmYjZlYjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0YWZvbGlvLXdlYi92aWRlbyBwYXJhIHBvcnRhZm9saW8ud2VicCIsImlhdCI6MTc2ODE4NDExOSwiZXhwIjoxNzcwNzc2MTE5fQ.iiSYv-hBOkCUgXWOdUbeqVxRIO9GJGk-xTFbH-GUA2Q"
                                alt="Cristopher Valladares - Portfolio Video"
                                className="hero-video-content"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
