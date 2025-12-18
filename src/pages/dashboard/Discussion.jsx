import { useState } from 'react';
import { Send, User, MoreVertical, ThumbsUp, MessageCircle } from 'lucide-react';
import './Discussion.css';

export default function Discussion() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: "Elie Mike",
            avatar: "https://via.placeholder.com/40",
            content: "Bonjour à tous, je cherche des conseils pour le dépôt d'un brevet international. Des recommandations ?",
            time: "Il y a 2 heures",
            likes: 5,
            replies: 2
        },
        {
            id: 2,
            user: "Lorie",
            avatar: "https://via.placeholder.com/40",
            content: "Je recommande de passer par le PCT (Traité de coopération en matière de brevets). C'est plus simple pour gérer plusieurs pays.",
            time: "Il y a 1 heure",
            likes: 3,
            replies: 0
        }
    ]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const message = {
            id: messages.length + 1,
            user: "Brooklyn Alice",
            avatar: "https://via.placeholder.com/40",
            content: newMessage,
            time: "À l'instant",
            likes: 0,
            replies: 0
        };

        setMessages([...messages, message]);
        setNewMessage("");
    };

    return (
        <div className="discussion-page">
            <div className="discussion-header">
                <div className="header-content blue-gradient">
                    <h2>Discussions</h2>
                    <p>Échangez avec la communauté des inventeurs</p>
                </div>
            </div>

            <div className="discussion-container">
                <div className="discussion-list">
                    {messages.map(msg => (
                        <div key={msg.id} className="message-card">
                            <div className="message-header">
                                <div className="user-info">
                                    <img src={msg.avatar} alt={msg.user} className="user-avatar" />
                                    <div>
                                        <h4>{msg.user}</h4>
                                        <span className="message-time">{msg.time}</span>
                                    </div>
                                </div>
                                <button className="btn-options">
                                    <MoreVertical size={18} />
                                </button>
                            </div>

                            <div className="message-content">
                                <p>{msg.content}</p>
                            </div>

                            <div className="message-actions">
                                <button className="action-btn">
                                    <ThumbsUp size={16} /> {msg.likes} J'aime
                                </button>
                                <button className="action-btn">
                                    <MessageCircle size={16} /> {msg.replies} Réponses
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="new-message-form">
                    <form onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Participez à la discussion..."
                        />
                        <button type="submit" className="btn-send">
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
