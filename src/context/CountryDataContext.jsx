import { createContext, useState, useEffect, useContext, useMemo } from 'react';

const CountryDataContext = createContext();

export function CountryDataProvider({ children }) {

    // stati per countries/loading/error
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // stati per search/filter/sort
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('title-asc');

    useEffect(() => {

        // fetch baase solo id, title, category
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3001/countryLaws');
                if (!res.ok) throw new Error(`List fetch failed: ${res.status}`);
                const list = await res.json();


                setCountries(list);

                // timer test loading
                // await new Promise(resolve => setTimeout(resolve, 1000));

                // console.log(list);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);



    // gestione search, filter e sort
    const filteredList = useMemo(() => {
        let result = countries;

        if (searchTerm) {
            result = result.filter(c =>
                c.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (categoryFilter) {
            result = result.filter(c => c.category === categoryFilter);
        }

        const [key, direction] = sortOrder.split('-');
        result = [...result].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        return result;
    }, [countries, searchTerm, categoryFilter, sortOrder]);

    return (
        <CountryDataContext.Provider
            value={{
                countries,
                filteredList,
                loading,
                error,
                searchTerm,
                setSearchTerm,
                categoryFilter,
                setCategoryFilter,
                sortOrder,
                setSortOrder,
            }}
        >
            {children}
        </CountryDataContext.Provider>
    );
}

export function useCountryData() {
    const context = useContext(CountryDataContext);
    if (!context) {
        throw new Error('useCountryData must be used within CountryDataProvider');
    }
    return context;
}
