import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <div className="brand-icon-wrapper">
                        <GraduationCap size={28} />
                    </div>
                    <span className="brand-text">Vidalaya</span>
                </Link>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
                        Accueil
                    </Link>
                    <Link to="/dashboard" className={`navbar-link ${location.pathname.includes('/dashboard') ? 'active' : ''}`}>
                        Espace Brevets
                    </Link>
                    <Link to="/pricing" className={`navbar-link ${location.pathname === '/pricing' ? 'active' : ''}`}>
                        Tarifs
                    </Link>
                    <div className="navbar-auth">
                        <Link to="/login" className="btn-login">
                            Connexion
                        </Link>
                        <Link to="/signup" className="btn-signup">
                            S'inscrire
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
