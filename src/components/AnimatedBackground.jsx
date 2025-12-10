import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/AnimatedBackground.css'

const AnimatedBackground = () => {
    const bgRef = useRef(null)
    const [currentTheme, setCurrentTheme] = useState('cyber-cyan')

    useEffect(() => {
        // Detect theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    const theme = document.documentElement.getAttribute('data-theme') || 'cyber-cyan'
                    setCurrentTheme(theme)
                }
            })
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })

        // Set initial theme
        const initialTheme = document.documentElement.getAttribute('data-theme') || 'cyber-cyan'
        setCurrentTheme(initialTheme)

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const bg = bgRef.current
        if (!bg) return

        // Clear previous content
        bg.innerHTML = ''

        // Create floating particles (for all themes)
        const particleCount = 30
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'bg-particle'
            particle.style.top = `${Math.random() * 100}%`
            particle.style.left = `${Math.random() * 100}%`
            particle.style.animationDelay = `${Math.random() * 10}s`
            particle.style.animationDuration = `${10 + Math.random() * 10}s`

            const size = Math.random() * 3 + 1
            particle.style.width = `${size}px`
            particle.style.height = `${size}px`

            bg.appendChild(particle)
        }

        // Create geometric shapes based on theme
        createThemeShapes(bg, currentTheme)

        return () => {
            if (bg) {
                bg.innerHTML = ''
            }
        }
    }, [currentTheme])

    const createThemeShapes = (container, theme) => {
        // Create professional geometric elements based on theme
        const shapesCount = 12

        for (let i = 0; i < shapesCount; i++) {
            const shape = document.createElement('div')
            shape.className = `bg-shape bg-shape-${theme}`

            // Random positioning
            shape.style.top = `${Math.random() * 100}%`
            shape.style.left = `${Math.random() * 100}%`

            // Random size (50px to 200px)
            const size = 50 + Math.random() * 150
            shape.style.width = `${size}px`
            shape.style.height = `${size}px`

            // Random animation delay and duration
            shape.style.animationDelay = `${Math.random() * 5}s`
            shape.style.animationDuration = `${15 + Math.random() * 10}s`

            // Random rotation
            shape.style.transform = `rotate(${Math.random() * 360}deg)`

            container.appendChild(shape)
        }

        // Add grid overlay for some themes
        if (['blockchain', 'monochrome', 'gold', 'pure-white', 'minimal-gray'].includes(theme)) {
            const gridOverlay = document.createElement('div')
            gridOverlay.className = `bg-grid bg-grid-${theme}`
            container.appendChild(gridOverlay)
        }
    }

    return (
        <motion.div
            ref={bgRef}
            className={`animated-bg animated-bg-${currentTheme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    )
}

export default AnimatedBackground
