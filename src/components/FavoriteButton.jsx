import { IoIosStarOutline, IoIosStar } from 'react-icons/io';
import { useFavorites } from '../context/FavoriteContext';


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
            {isFavorite
                ? <IoIosStar size={30} color="#a282fa" />      // stella piena gialla
                : <IoIosStarOutline size={30} color="#333" />  // stella outline
            }
        </button>
    );
}