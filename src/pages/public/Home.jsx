import { Link } from 'react-router-dom';
import { Search, FileText, Shield, TrendingUp, Sparkles, Globe, Lock, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
    const [stats, setStats] = useState({ patents: 0, inventors: 0, consultations: 0, partners: 0 });

    useEffect(() => {
        // Animation des statistiques
        const targetStats = { patents: 1250, inventors: 850, consultations: 15000, partners: 120 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setStats({
                patents: Math.floor(targetStats.patents * progress),
                inventors: Math.floor(targetStats.inventors * progress),
                consultations: Math.floor(targetStats.consultations * progress),
                partners: Math.floor(targetStats.partners * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setStats(targetStats);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <Sparkles size={16} />
                        <span>Plateforme N°1 de Valorisation</span>
                    </div>
                    <h1>
                        Donnez vie à vos <span className="text-highlight">Inventions</span>
                    </h1>
                    <p className="hero-subtitle">
                        La plateforme centrale pour déposer, protéger et valoriser vos brevets technologiques.
                        Connectez vos innovations au monde.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/dashboard/add-patent" className="btn btn-primary">
                            <FileText size={20} />
                            Déposer un brevet
                        </Link>
                        <Link to="/dashboard" className="btn btn-secondary">
                            <Search size={20} />
                            Consulter les brevets
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-number">{stats.patents.toLocaleString()}+</div>
                        <div className="stat-label">Brevets Déposés</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{stats.inventors}+</div>
                        <div className="stat-label">Inventeurs Actifs</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{stats.consultations.toLocaleString()}+</div>
                        <div className="stat-label">Consultations</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">{stats.partners}+</div>
                        <div className="stat-label">Partenaires Industriels</div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="section-header">
                    <h2>Pourquoi Vidalaya ?</h2>
                    <p>Une infrastructure complète pour la réussite de vos innovations</p>
                </div>
                <div className="features-container">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper gradient-purple">
                            <Lock size={32} />
                        </div>
                        <h3>Dépôt Sécurisé</h3>
                        <p>Un processus de dépôt de brevet simplifié et hautement sécurisé pour protéger votre propriété intellectuelle.</p>
                        <Link to="/dashboard/add-patent" className="feature-link">Déposer maintenant →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper gradient-blue">
                            <Globe size={32} />
                        </div>
                        <h3>Visibilité Mondiale</h3>
                        <p>Rendez vos brevets accessibles aux investisseurs et industriels du monde entier.</p>
                        <Link to="/dashboard" className="feature-link">Voir le catalogue →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper gradient-green">
                            <Shield size={32} />
                        </div>
                        <h3>Valorisation</h3>
                        <p>Outils d'analyse et de mise en relation pour transformer vos brevets en opportunités d'affaires.</p>
                        <Link to="/dashboard/analysis" className="feature-link">Analyser →</Link>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper gradient-orange">
                            <Database size={32} />
                        </div>
                        <h3>Base de Données</h3>
                        <p>Accédez à une vaste base de données de brevets pour votre veille technologique.</p>
                        <Link to="/dashboard" className="feature-link">Rechercher →</Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits">
                <div className="benefits-container">
                    <div className="benefits-content">
                        <h2>Valorisez votre propriété intellectuelle</h2>
                        <div className="benefit-list">
                            <div className="benefit-item">
                                <TrendingUp className="benefit-icon" />
                                <div>
                                    <h4>Opportunités Commerciales</h4>
                                    <p>Attirez des partenaires et licenciés potentiels</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <Shield className="benefit-icon" />
                                <div>
                                    <h4>Protection Juridique</h4>
                                    <p>Preuve d'antériorité et documentation sécurisée</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <Search className="benefit-icon" />
                                <div>
                                    <h4>Veille Technologique</h4>
                                    <p>Restez informé des dernières innovations dans votre secteur</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/signup" className="btn btn-primary">Créer un compte</Link>
                    </div>
                    <div className="benefits-visual">
                        <div className="visual-card card-1">
                            <div className="card-icon">📄</div>
                            <div className="card-text">Brevets</div>
                        </div>
                        <div className="visual-card card-2">
                            <div className="card-icon">🤝</div>
                            <div className="card-text">Partenariats</div>
                        </div>
                        <div className="visual-card card-3">
                            <div className="card-icon">🌍</div>
                            <div className="card-text">Impact</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta-content">
                    <h2>Prêt à innover ?</h2>
                    <p>Rejoignez la communauté des inventeurs et donnez à vos brevets la visibilité qu'ils méritent.</p>
                    <div className="cta-buttons">
                        <Link to="/signup" className="btn btn-large btn-white">
                            Commencer gratuitement
                        </Link>
                        <Link to="/pricing" className="btn btn-large btn-outline">
                            Voir les offres
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
