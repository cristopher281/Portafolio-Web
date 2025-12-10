import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNavigation } from '../hooks/useNavigation'
import Logo3D from './Logo3D'
import ThemeSelector from './ThemeSelector'

const Header = () => {
    const location = useLocation()
    const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigation()

    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/sobre-mi', label: 'Sobre Mí' },
        { path: '/habilidades', label: 'Habilidades' },
        { path: '/proyectos', label: 'Proyectos' },
        { path: '/ofertas', label: 'Ofertas' }
    ]

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <Logo3D />
                        <span>CristopherV</span>
                    </Link>

                    <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                        >
                            <Link
                                to="/contacto"
                                className="btn-primary"
                                onClick={closeMobileMenu}
                            >
                                Hablemos
                            </Link>
                        </motion.div>
                    </div>

                    {/* Theme Selector */}
                    <ThemeSelector />

                    <motion.button
                        className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </motion.button>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header
