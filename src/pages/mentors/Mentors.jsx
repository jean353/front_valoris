import { UserCircle, Star, MapPin } from 'lucide-react';

export default function Mentors() {
    const mentors = [
        { id: 1, name: "Marie Dubois", specialty: "Brevets Pharmaceutiques", rating: 4.9, location: "Paris", students: 150 },
        { id: 2, name: "Jean Martin", specialty: "Électronique & Tech", rating: 4.8, location: "Lyon", students: 120 },
        { id: 3, name: "Sophie Laurent", specialty: "Biotechnologie", rating: 5.0, location: "Toulouse", students: 98 }
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Nos Mentors</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {mentors.map(mentor => (
                    <div key={mentor.id} style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '2rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                        transition: 'transform 0.3s',
                        cursor: 'pointer'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <UserCircle size={64} color="#667eea" />
                            <div>
                                <h3 style={{ margin: 0 }}>{mentor.name}</h3>
                                <p style={{ color: '#64748b', margin: '0.25rem 0' }}>{mentor.specialty}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <Star size={16} fill="#fbbf24" color="#fbbf24" /> {mentor.rating}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <MapPin size={16} /> {mentor.location}
                            </span>
                            <span>{mentor.students} étudiants</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
