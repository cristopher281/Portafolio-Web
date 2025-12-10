import { useState, useEffect } from 'react'

export const useNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    // When mobile menu opens, prevent body scroll to avoid layout issues on mobile
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.classList.toggle('menu-open', isMobileMenuOpen)
        }
    }, [isMobileMenuOpen])

    return {
        isScrolled,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu
    }
}
