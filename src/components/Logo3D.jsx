import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Logo3D.css'

const Logo3D = () => {
    const sphereRef = useRef(null)

    useEffect(() => {
        const sphere = sphereRef.current
        if (!sphere) return

        let rotationX = 0
        let rotationY = 0
        let animationId

        const animate = () => {
            rotationX += 0.003
            rotationY += 0.005

            if (sphere) {
                sphere.style.transform = `rotateX(${rotationX}rad) rotateY(${rotationY}rad)`
            }

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
        }
    }, [])

    return (
        <motion.div
            className="logo-3d-container"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
            <div className="sphere-wrapper" ref={sphereRef}>
                {/* Círculos externos - órbitas principales */}
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit orbit-3"></div>

                {/* Nodos/esferas en las intersecciones */}
                <div className="node node-top"></div>
                <div className="node node-bottom"></div>
                <div className="node node-left"></div>
                <div className="node node-right"></div>
                <div className="node node-front"></div>
                <div className="node node-back"></div>
                <div className="node node-center"></div>
            </div>
        </motion.div>
    )
}

export default Logo3D
