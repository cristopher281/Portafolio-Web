import { motion } from 'framer-motion'

const Card = ({
    icon,
    title,
    text,
    className = '',
    delay = 0,
    children
}) => {
    return (
        <motion.div
            className={`card ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut'
            }}
            whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 255, 247, 0.2)'
            }}
        >
            {icon && (
                <motion.div
                    className="card-icon"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: delay + 0.2,
                        type: 'spring',
                        stiffness: 200
                    }}
                >
                    {icon}
                </motion.div>
            )}

            {title && (
                <motion.h3
                    className="card-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.3 }}
                >
                    {title}
                </motion.h3>
            )}

            {text && (
                <motion.p
                    className="card-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.4 }}
                >
                    {text}
                </motion.p>
            )}

            {children}
        </motion.div>
    )
}

export default Card
