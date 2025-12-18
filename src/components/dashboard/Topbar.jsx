import { Search, Bell, Settings, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './Topbar.css';

export default function Topbar() {
    const location = useLocation();

    const getPageTitle = () => {
        const path = location.pathname;
        if (path === '/dashboard') return 'Dashboard';
        if (path === '/dashboard/add-patent') return 'Ajouter un brevet';
        if (path === '/dashboard/my-patents') return 'Mes brevets';
        if (path === '/dashboard/discussion') return 'Discussions';
        if (path === '/dashboard/analysis') return 'Analyse';
        return 'Dashboard';
    };

    return (
        <header className="dashboard-topbar">
            <div className="breadcrumb">
                <span className="breadcrumb-path">Pages / {getPageTitle()}</span>
                <h2 className="page-title">{getPageTitle()}</h2>
            </div>

            <div className="topbar-actions">
                <div className="search-bar">
                    <Search size={18} />
                    <input type="text" placeholder="Rechercher..." />
                </div>

                <button className="icon-btn">
                    <User size={18} />
                </button>
                <button className="icon-btn">
                    <Settings size={18} />
                </button>
                <button className="icon-btn">
                    <Bell size={18} />
                </button>
            </div>
        </header>
    );
}
