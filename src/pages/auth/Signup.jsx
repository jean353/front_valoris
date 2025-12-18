import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import './Auth.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        console.log('Signup submitted:', formData);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <h1>Inscription</h1>
                    <p>Créez votre compte Vidalaya</p>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>
                                <User size={20} />
                                Nom complet
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Jean Dupont"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <Mail size={20} />
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="votre@email.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <Lock size={20} />
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <Lock size={20} />
                                Confirmer le mot de passe
                            </label>
                            <input
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button type="submit" className="auth-btn">
                            S'inscrire
                        </button>
                    </form>

                    <p className="auth-footer">
                        Déjà un compte ? <Link to="/login">Se connecter</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
