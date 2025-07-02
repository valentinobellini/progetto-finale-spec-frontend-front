import { createContext, useState, useContext, useEffect } from 'react';

const CompareContext = createContext();

// provider paesi selezionati per confronto
export function CompareProvider({ children }) {

    const [selected, setSelected] = useState(() => {
        const stored = localStorage.getItem('compare');
        return stored ? JSON.parse(stored) : [];
    });

    // aggiorna ogni volta che cambiano i selected
    useEffect(() => {
        localStorage.setItem('compare', JSON.stringify(selected));
    }, [selected]);

    // toggla un paese nella selezione: aggiunge o rimuove fino a 2 elementi
    function toggleCountry(id) {
        setSelected(prev => {
            if (prev.includes(id)) {
                // se già selezionato, rimuovi
                return prev.filter(item => item !== id);
            }
            if (prev.length < 2) {
                // se meno di 2, aggiungi
                return [...prev, id];
            }
            // se già 2, sostituisci il primo con il nuovo
            return [prev[1], id];
        });
    }

    // resetta completamente la selezione
    function clearCompare() {
        setSelected([]);
    }

    return (
        <CompareContext.Provider value={{ selected, toggleCountry, clearCompare }}>
            {children}
        </CompareContext.Provider>
    );
}

// hook per consumare il context del confronto
export function useCompare() {
    const context = useContext(CompareContext);
    if (!context) {
        throw new Error('useCompare must be used within a CompareProvider');
    }
    return context;
}

