import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Vidalaya</h3>
                    <p>Plateforme de valorisation et de consultation de brevets technologiques.</p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Navigation</h4>
                    <Link to="/">Accueil</Link>
                    <Link to="/pricing">Tarifs</Link>
                    <Link to="/dashboard">Espace Brevets</Link>
                </div>

                <div className="footer-section">
                    <h4>Ressources</h4>
                    <Link to="/help">Centre d'aide</Link>
                    <Link to="/about">À propos</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <div className="footer-contact">
                        <div className="contact-item">
                            <Mail size={16} />
                            <span>contact@vidalaya.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={16} />
                            <span>+33 1 23 45 67 89</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={16} />
                            <span>Paris, France</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Vidalaya. Tous droits réservés.</p>
                <div className="footer-links">
                    <Link to="/privacy">Politique de confidentialité</Link>
                    <Link to="/terms">Conditions d'utilisation</Link>
                </div>
            </div>
        </footer>
    );
}
