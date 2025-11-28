import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
    const bgRef = useRef(null)

    useEffect(() => {
        const bg = bgRef.current
        if (!bg) return

        const particleCount = 20

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'
            particle.style.top = `${Math.random() * 100}%`
            particle.style.left = `${Math.random() * 100}%`
            particle.style.animationDelay = `${Math.random() * 10}s`
            particle.style.animationDuration = `${10 + Math.random() * 10}s`

            // Variación de tamaño para más profundidad
            const size = Math.random() * 3 + 1
            particle.style.width = `${size}px`
            particle.style.height = `${size}px`

            bg.appendChild(particle)
        }

        return () => {
            if (bg) {
                bg.innerHTML = ''
            }
        }
    }, [])

    return (
        <motion.div
            ref={bgRef}
            className="animated-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    )
}

export default AnimatedBackground
