import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
    const footerLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/sobre-mi', label: 'Sobre Mí' },
        { path: '/habilidades', label: 'Habilidades' },
        { path: '/proyectos', label: 'Proyectos' },
        { path: '/ofertas', label: 'Ofertas' },
        { path: '/contacto', label: 'Contacto' }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/" className="logo">
                        <motion.div
                            style={{
                                display: 'inline-block'
                            }}
                            whileHover={{ scale: 1.05, rotate: -3 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img
                                src="/assets/images/logo.jpg"
                                alt="CristopherV"
                                style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }}
                            />
                        </motion.div>
                        <span>CristopherV</span>
                    </Link>

                    <div className="footer-links">
                        {footerLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link to={link.path} className="footer-link">
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="copyright"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    &copy; 2025 Cristopher Valladares. Todos los derechos reservados.
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
