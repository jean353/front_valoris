import { createContext, useContext, useState } from 'react';

const PatentContext = createContext();

export function usePatents() {
    return useContext(PatentContext);
}

export function PatentProvider({ children }) {
    const [patents, setPatents] = useState([
        {
            id: 1,
            title: "Système de purification d'eau solaire",
            status: "Déposé",
            date: "2024-03-15",
            description: "Un système innovant utilisant l'énergie solaire pour purifier l'eau dans les zones rurales.",
            category: "Environnement"
        },
        {
            id: 2,
            title: "Algorithme de compression de données IA",
            status: "En examen",
            date: "2024-02-28",
            description: "Nouvelle méthode de compression sans perte utilisant des réseaux de neurones.",
            category: "Technologie"
        }
    ]);

    const addPatent = (patent) => {
        const newPatent = {
            ...patent,
            id: patents.length + 1,
            status: "Brouillon",
            date: new Date().toISOString().split('T')[0]
        };
        setPatents([newPatent, ...patents]);
    };

    return (
        <PatentContext.Provider value={{ patents, addPatent }}>
            {children}
        </PatentContext.Provider>
    );
}
