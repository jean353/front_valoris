import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Star } from 'lucide-react';
import './Courses.css';

export default function Courses() {
    const courses = [
        {
            id: 1,
            title: "Introduction aux Brevets",
            description: "Apprenez les fondamentaux de la propriété intellectuelle et des brevets",
            duration: "8 semaines",
            students: 1234,
            rating: 4.8,
            image: "https://via.placeholder.com/400x250"
        },
        {
            id: 2,
            title: "Rédaction de Brevets Avancée",
            description: "Maîtrisez l'art de rédiger des brevets solides et défendables",
            duration: "12 semaines",
            students: 856,
            rating: 4.9,
            image: "https://via.placeholder.com/400x250"
        },
        {
            id: 3,
            title: "Stratégie de Propriété Intellectuelle",
            description: "Développez une stratégie PI efficace pour votre entreprise",
            duration: "10 semaines",
            students: 654,
            rating: 4.7,
            image: "https://via.placeholder.com/400x250"
        }
    ];

    return (
        <div className="courses-page">
            <div className="courses-header">
                <h1>Nos Cours</h1>
                <p>Découvrez nos programmes de formation en propriété intellectuelle</p>
            </div>

            <div className="courses-container">
                <div className="courses-grid">
                    {courses.map(course => (
                        <div key={course.id} className="course-card">
                            <div className="course-image">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className="course-content">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <div className="course-meta">
                                    <span className="meta-item">
                                        <Clock size={16} /> {course.duration}
                                    </span>
                                    <span className="meta-item">
                                        <Users size={16} /> {course.students}
                                    </span>
                                    <span className="meta-item">
                                        <Star size={16} fill="currentColor" /> {course.rating}
                                    </span>
                                </div>
                                <Link to={`/courses/${course.id}`} className="course-btn">
                                    Voir le cours
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
