import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import Theme from './pages/Theme'

function App() {
    const location = useLocation()

    return (
        <div className="page-wrapper">
            <AnimatedBackground />
            <Header />

            <main className="main-content">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre-mi" element={<About />} />
                        <Route path="/habilidades" element={<Skills />} />
                        <Route path="/proyectos" element={<Projects />} />
                        <Route path="/ofertas" element={<Offers />} />
                        <Route path="/contacto" element={<Contact />} />
                        <Route path="/tema" element={<Theme />} />
                    </Routes>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    )
}

export default App
