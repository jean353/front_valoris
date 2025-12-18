import { usePatents } from '../../context/PatentContext';
import { FileText, Clock, CheckCircle } from 'lucide-react';
import './MyPatents.css';

export default function MyPatents() {
    const { patents } = usePatents();

    const getStatusColor = (status) => {
        switch (status) {
            case 'Déposé': return 'success';
            case 'En examen': return 'warning';
            case 'Brouillon': return 'info';
            default: return 'default';
        }
    };

    return (
        <div className="my-patents-page">
            <div className="patents-header">
                <div className="header-content green-gradient">
                    <h2>Mes Brevets</h2>
                    <p>Gérez et suivez l'état de vos dépôts de brevets</p>
                </div>
            </div>

            <div className="patents-list">
                {patents.map(patent => (
                    <div key={patent.id} className="patent-card">
                        <div className="patent-icon">
                            <FileText size={24} />
                        </div>
                        <div className="patent-info">
                            <h3>{patent.title}</h3>
                            <p className="patent-desc">{patent.description}</p>
                            <div className="patent-meta">
                                <span className="meta-item">
                                    <Clock size={14} /> {patent.date}
                                </span>
                                <span className="meta-item">
                                    Tag: {patent.category}
                                </span>
                            </div>
                        </div>
                        <div className="patent-status">
                            <span className={`status-badge ${getStatusColor(patent.status)}`}>
                                {patent.status === 'Déposé' && <CheckCircle size={14} />}
                                {patent.status}
                            </span>
                        </div>
                    </div>
                ))}

                {patents.length === 0 && (
                    <div className="empty-state">
                        <p>Vous n'avez pas encore de brevets.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
