import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
    const plans = [
        {
            name: "Découverte",
            price: "0€",
            period: "/mois",
            features: [
                "Recherche de brevets basique",
                "Dépôt de 1 brevet (brouillon)",
                "Accès à la communauté",
                "Support par email"
            ]
        },
        {
            name: "Inventeur",
            price: "29€",
            period: "/mois",
            popular: true,
            features: [
                "Dépôts illimités",
                "Protection juridique avancée",
                "Visibilité prioritaire",
                "Analytics de consultation",
                "Mise en relation partenaires"
            ]
        },
        {
            name: "Entreprise",
            price: "99€",
            period: "/mois",
            features: [
                "Gestion de portefeuille",
                "API d'accès aux données",
                "Support dédié 24/7",
                "Rapports de valorisation",
                "Formation équipes R&D"
            ]
        }
    ];

    return (
        <div className="pricing-page">
            <div className="pricing-header">
                <h1>Tarifs</h1>
                <p>Choisissez le plan qui correspond à vos besoins</p>
            </div>

            <div className="pricing-container">
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className="popular-badge">Populaire</div>}
                        <h3>{plan.name}</h3>
                        <div className="price">
                            <span className="amount">{plan.price}</span>
                            <span className="period">{plan.period}</span>
                        </div>
                        <ul className="features-list">
                            {plan.features.map((feature, i) => (
                                <li key={i}>
                                    <Check size={20} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Link to="/signup" className="pricing-btn">
                            Commencer
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
