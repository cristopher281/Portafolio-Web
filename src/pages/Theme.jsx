import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useTheme from '../hooks/useTheme'
import '../styles/ThemeSelector.css'
import '../styles/theme-page.css'

const Theme = () => {
    const { theme, setTheme, themes } = useTheme()

    return (
        <div className="theme-page">
            <div className="container">
                <motion.div
                    className="theme-page-inner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <header className="theme-page-header">
                        <h1>Cambiar Tema</h1>
                        <p>Selecciona un tono para aplicar en toda la web. Los cambios se guardan automáticamente.</p>
                        <Link to="/" className="btn-link">Volver</Link>
                    </header>

                    <section className="theme-page-grid">
                        {themes.map((t) => (
                            <motion.button
                                key={t.id}
                                className={`theme-option large ${theme === t.id ? 'active' : ''}`}
                                onClick={() => setTheme(t.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-pressed={theme === t.id}
                            >
                                <div className="theme-preview large">
                                    {t.colors.map((c, i) => (
                                        <div key={i} className="preview-circle" style={{ backgroundColor: c }} />
                                    ))}
                                </div>
                                <div className="theme-name">{t.name}</div>
                            </motion.button>
                        ))}
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default Theme
