
import { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoriteContext';
import CountryCard from '../components/CountryCard';

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchFavorites() {
            if (favorites.length === 0) {
                setCountries([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const promises = favorites.map(id => fetch(`http://localhost:3001/countryLaws/${id}`)
                    .then(r => {
                        if (!r.ok) throw new Error(`HTTP ${r.status}`);
                        return r.json();
                    })
                    .then(data => data.countrylaw))
                const results = await Promise.all(promises);
                setCountries(results);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchFavorites();
    }, [favorites])

    if (loading) return <div>Loading…</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (countries.length === 0)
        return <div className='empty_wrapper'><span>No favorite countries selected.</span></div>;


    return (
        <div className='favorites_wrapper'>
            {/* <h1>Favorite Countries</h1> */}

            <div className="favorites-grid">
                {countries.map(country => (
                    <CountryCard
                        key={country.id}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
}







