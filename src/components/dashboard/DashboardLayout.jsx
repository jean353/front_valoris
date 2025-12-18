import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { PatentProvider } from '../../context/PatentContext';
import './DashboardLayout.css';

export default function DashboardLayout() {
    return (
        <PatentProvider>
            <div className="dashboard-layout">
                <Sidebar />
                <main className="dashboard-main">
                    <Topbar />
                    <div className="dashboard-content">
                        <Outlet />
                    </div>
                </main>
            </div>
        </PatentProvider>
    );
}
