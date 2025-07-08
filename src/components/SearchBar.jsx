/* SearchBar.jsx */
import { useCallback } from 'react';

export default function SearchBar({ setSearchTerm }) {



    function debounce(callback, delay) {
        let timer;
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(value);
            }, delay);
        };
    }


    const debouncedSearch = useCallback(debounce(setSearchTerm, 500), []);



    return (
        <input
            type="text"
            placeholder="search by country"
            className="search-input"
            onChange={e => debouncedSearch(e.target.value)}
        />
    );
}
