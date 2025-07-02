import { useFavorites } from '../context/FavoriteContext';

// importa i due PNG (bianco/outline e viola/filled)
import heartEmpty from '../assets/heart-empty.png';
import heartFilled from '../assets/heart-filled.png';

export default function FavoriteButton({ id }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(id);

    function handleClick(e) {
        e.stopPropagation();
        toggleFavorite(id);
    }

    return (
        <button
            className="icon-button"
            onClick={handleClick}
            aria-label={isFavorite ? 'Remove favorite' : 'Add to favorite'}
        >
            <img
                src={isFavorite ? heartFilled : heartEmpty}
                alt=""
                className="icon"
            />
        </button>
    );
}