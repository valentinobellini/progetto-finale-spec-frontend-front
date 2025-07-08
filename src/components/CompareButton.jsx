
import { IoIosGitCompare } from 'react-icons/io';

import { useCompare } from '../context/CompareContext';
// import scaleEmpty from '../assets/scale-empty.png';
// import scaleFilled from '../assets/scale-filled.png';

export default function CompareButton({ id }) {
    const { selected, toggleCountry } = useCompare();
    const isCompared = selected.includes(id);

    function handleClick(e) {
        e.stopPropagation();
        toggleCountry(id);
        // if (onClick) onClick(e);
    }

    return (
        <button
            onClick={handleClick}
            className="icon-button"
            aria-label={isCompared ? 'Unselect from compare' : 'Select for compare'}
        >
            <IoIosGitCompare
                size={26}
                color={isCompared ? '#ff0909' : '#333'}  // colore diverso se selezionato
            />
        </button>
    );
}
