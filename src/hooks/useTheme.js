import { useState, useEffect } from 'react'

/**
 * Custom hook for managing theme state and persistence
 * @returns {Object} - { theme, setTheme, themes }
 */
export const useTheme = () => {
    // Available themes
    const themes = [
        {
            id: 'cyber-cyan',
            name: 'Cyber Cyan',
            colors: ['#00fff7', '#0ea5e9', '#8b5cf6']
        },
        {
            id: 'blockchain',
            name: 'Blockchain Dark',
            colors: ['#00ffff', '#00d9ff', '#4169e1']
        },
        {
            id: 'earth',
            name: 'Earth Tones',
            colors: ['#948578', '#565449', '#d8cfbc']
        },
        {
            id: 'monochrome',
            name: 'Monochrome Elite',
            colors: ['#e5e5e5', '#d4d4d4', '#a3a3a3']
        },
        {
            id: 'gold',
            name: 'Gold Elegance',
            colors: ['#ffd700', '#daa520', '#b8860b']
        },
        {
            id: 'sunset',
            name: 'Sunset Purple',
            colors: ['#d946ef', '#a855f7', '#f472b6']
        }
    ]

    // Get initial theme from localStorage or default to 'cyber-cyan'
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('portfolio-theme')
            return savedTheme || 'cyber-cyan'
        }
        return 'cyber-cyan'
    }

    const [theme, setThemeState] = useState(getInitialTheme)

    // Apply theme to document and save to localStorage
    const setTheme = (newTheme) => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', newTheme)
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('portfolio-theme', newTheme)
        }
        setThemeState(newTheme)
    }

    // Apply theme on mount
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }, [theme])

    return {
        theme,
        setTheme,
        themes
    }
}

export default useTheme
