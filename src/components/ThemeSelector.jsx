import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useTheme from '../hooks/useTheme'
import '../styles/ThemeSelector.css'

const ThemeSelector = () => {
    const { theme, setTheme, themes } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredTheme, setHoveredTheme] = useState(null)

    const handleThemeChange = (themeId) => {
        setTheme(themeId)
        // Optional: close selector after selection
        // setIsOpen(false)
    }

    return (
        <div className="theme-selector-wrapper">
            {/* Toggle Button */}
            <motion.button
                className="theme-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Cambiar tema"
            >
                <i className="fas fa-palette"></i>
            </motion.button>

            {/* Theme Options Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="theme-selector-panel"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="theme-selector-header">
                            <h3>Selecciona un Tema</h3>
                        </div>

                        <div className="theme-options-grid">
                            {themes.map((themeOption) => (
                                <motion.button
                                    key={themeOption.id}
                                    className={`theme-option ${theme === themeOption.id ? 'active' : ''}`}
                                    onClick={() => handleThemeChange(themeOption.id)}
                                    onMouseEnter={() => setHoveredTheme(themeOption.id)}
                                    onMouseLeave={() => setHoveredTheme(null)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`Cambiar a tema ${themeOption.name}`}
                                >
                                    {/* Color Preview Circles */}
                                    <div className="theme-preview">
                                        {themeOption.colors.map((color, index) => (
                                            <div
                                                key={index}
                                                className="preview-circle"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>

                                    {/* Theme Name */}
                                    <span className="theme-name">{themeOption.name}</span>

                                    {/* Active Indicator */}
                                    {theme === themeOption.id && (
                                        <motion.div
                                            className="active-indicator"
                                            layoutId="activeTheme"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        >
                                            <i className="fas fa-check"></i>
                                        </motion.div>
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Tooltip for hovered theme */}
                        {hoveredTheme && (
                            <motion.div
                                className="theme-tooltip"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {themes.find(t => t.id === hoveredTheme)?.name}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ThemeSelector
