import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, FileText, MessageSquare, BookOpen, Settings, LogOut, Shield } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <aside className="dashboard-sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <Shield size={24} />
                    <span>Vidalaya</span>
                </div>
            </div>

            <div className="sidebar-user">
                <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
                <div className="user-info">
                    <span className="user-name">Brooklyn Alice</span>
                    <span className="user-role">Inventeur</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-section">
                    <Link to="/dashboard" className={`nav-item ${isActive('/dashboard')}`}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/dashboard/add-patent" className={`nav-item ${isActive('/dashboard/add-patent')}`}>
                        <PlusCircle size={20} />
                        <span>Ajouter un brevet</span>
                    </Link>

                    <Link to="/dashboard/my-patents" className={`nav-item ${isActive('/dashboard/my-patents')}`}>
                        <FileText size={20} />
                        <span>Mes brevets</span>
                    </Link>

                    <Link to="/dashboard/discussion" className={`nav-item ${isActive('/dashboard/discussion')}`}>
                        <MessageSquare size={20} />
                        <span>Discussions</span>
                    </Link>
                </div>

                <div className="nav-section bottom">
                    <Link to="/settings" className="nav-item">
                        <Settings size={20} />
                        <span>Paramètres</span>
                    </Link>
                    <button className="nav-item logout-btn">
                        <LogOut size={20} />
                        <span>Déconnexion</span>
                    </button>
                </div>
            </nav>
        </aside>
    );
}
