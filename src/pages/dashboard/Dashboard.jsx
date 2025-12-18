import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { FileText, TrendingUp, Users, Award, Clock, CheckCircle, Eye, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
    const [stats, setStats] = useState({
        patents: 0,
        views: 0,
        partners: 0,
        score: 0
    });

    useEffect(() => {
        // Animation des statistiques
        const targetStats = { patents: 12, views: 1250, partners: 5, score: 85 };
        const duration = 1500;
        const steps = 50;
        const interval = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setStats({
                patents: Math.floor(targetStats.patents * progress),
                views: Math.floor(targetStats.views * progress),
                partners: Math.floor(targetStats.partners * progress),
                score: Math.floor(targetStats.score * progress)
            });

            if (currentStep >= steps) {
                clearInterval(timer);
                setStats(targetStats);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const weeklyData = [
        { name: 'Lun', value: 40 },
        { name: 'Mar', value: 30 },
        { name: 'Mer', value: 45 },
        { name: 'Jeu', value: 35 },
        { name: 'Ven', value: 55 },
        { name: 'Sam', value: 25 },
        { name: 'Dim', value: 40 },
    ];

    const monthlyData = [
        { name: 'Jan', value: 50 },
        { name: 'Fév', value: 60 },
        { name: 'Mar', value: 80 },
        { name: 'Avr', value: 120 },
        { name: 'Mai', value: 100 },
        { name: 'Juin', value: 140 },
        { name: 'Juil', value: 160 },
        { name: 'Août', value: 180 },
        { name: 'Sep', value: 150 },
        { name: 'Oct', value: 200 },
        { name: 'Nov', value: 220 },
        { name: 'Déc', value: 250 },
    ];

    const patentStatusData = [
        { name: 'En cours', value: 5, color: '#fbbf24' },
        { name: 'Approuvés', value: 4, color: '#4caf50' },
        { name: 'En attente', value: 3, color: '#667eea' },
    ];

    const recentActivities = [
        { id: 1, type: 'patent', title: 'Nouveau brevet déposé', desc: 'Système de filtration d\'eau', time: 'Il y a 2h', icon: FileText, color: 'blue' },
        { id: 2, type: 'view', title: 'Brevet consulté', desc: 'Votre brevet #1234 a été consulté 15 fois', time: 'Il y a 5h', icon: Eye, color: 'green' },
        { id: 3, type: 'message', title: 'Nouveau message', desc: 'Investisseur intéressé par le projet Alpha', time: 'Hier', icon: MessageSquare, color: 'purple' },
        { id: 4, type: 'achievement', title: 'Brevet Validé', desc: 'Brevet #5678 validé par l\'INPI', time: 'Il y a 2 jours', icon: CheckCircle, color: 'orange' },
    ];

    return (
        <div className="dashboard-home">
            {/* Welcome Section */}
            <div className="welcome-section">
                <div className="welcome-content">
                    <h1>Bienvenue sur votre Dashboard</h1>
                    <p>Gérez vos brevets et suivez leur valorisation en temps réel</p>
                </div>
                <Link to="/dashboard/add-patent" className="btn-add-patent">
                    <FileText size={20} />
                    Ajouter un brevet
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card animated">
                    <div className="stat-icon-wrapper gradient-blue">
                        <FileText size={28} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Mes Brevets</p>
                        <h3 className="stat-value">{stats.patents}</h3>
                        <p className="stat-trend positive">
                            <TrendingUp size={16} />
                            +2 ce mois
                        </p>
                    </div>
                </div>

                <div className="stat-card animated" style={{ animationDelay: '0.1s' }}>
                    <div className="stat-icon-wrapper gradient-purple">
                        <Eye size={28} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Vues Totales</p>
                        <h3 className="stat-value">{stats.views}</h3>
                        <p className="stat-trend positive">
                            <TrendingUp size={16} />
                            +150 cette semaine
                        </p>
                    </div>
                </div>

                <div className="stat-card animated" style={{ animationDelay: '0.2s' }}>
                    <div className="stat-icon-wrapper gradient-green">
                        <Users size={28} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Partenaires</p>
                        <h3 className="stat-value">{stats.partners}</h3>
                        <p className="stat-trend">
                            <Clock size={16} />
                            2 en attente
                        </p>
                    </div>
                </div>

                <div className="stat-card animated" style={{ animationDelay: '0.3s' }}>
                    <div className="stat-icon-wrapper gradient-orange">
                        <Award size={28} />
                    </div>
                    <div className="stat-content">
                        <p className="stat-label">Score Innovation</p>
                        <h3 className="stat-value">{stats.score}/100</h3>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${stats.score}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="charts-grid">
                <div className="chart-card">
                    <div className="chart-header-modern">
                        <h4>Activité Hebdomadaire</h4>
                        <p>Consultations de vos brevets</p>
                    </div>
                    <div className="chart-content">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={weeklyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fill: '#7b809a', fontSize: 12 }} />
                                <YAxis tick={{ fill: '#7b809a', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{
                                        background: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                                <defs>
                                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#764ba2" stopOpacity={0.8} />
                                    </linearGradient>
                                </defs>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card">
                    <div className="chart-header-modern">
                        <h4>Progression Annuelle</h4>
                        <p>Évolution de la valorisation</p>
                    </div>
                    <div className="chart-content">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fill: '#7b809a', fontSize: 12 }} />
                                <YAxis tick={{ fill: '#7b809a', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{
                                        background: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#4caf50"
                                    strokeWidth={3}
                                    dot={{ fill: '#4caf50', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card">
                    <div className="chart-header-modern">
                        <h4>Statut des Brevets</h4>
                        <p>Répartition par statut</p>
                    </div>
                    <div className="chart-content">
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={patentStatusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {patentStatusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="pie-legend">
                            {patentStatusData.map((item, index) => (
                                <div key={index} className="legend-item">
                                    <div className="legend-color" style={{ background: item.color }}></div>
                                    <span>{item.name}: {item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activities */}
            <div className="recent-activities">
                <h3>Activités Récentes</h3>
                <div className="activities-list">
                    {recentActivities.map((activity) => {
                        const Icon = activity.icon;
                        return (
                            <div key={activity.id} className="activity-item">
                                <div className={`activity-icon ${activity.color}`}>
                                    <Icon size={20} />
                                </div>
                                <div className="activity-content">
                                    <h4>{activity.title}</h4>
                                    <p>{activity.desc}</p>
                                </div>
                                <span className="activity-time">{activity.time}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
