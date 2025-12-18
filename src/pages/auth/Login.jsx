import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import './Auth.css';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <h1>Connexion</h1>
                    <p>Connectez-vous à votre compte Vidalaya</p>

                    <form onSubmit={handleSubmit} className="auth-form">
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

                        <button type="submit" className="auth-btn">
                            Se connecter
                        </button>
                    </form>

                    <p className="auth-footer">
                        Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
