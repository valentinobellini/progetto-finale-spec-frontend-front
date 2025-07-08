import { useNavigate } from 'react-router-dom';
// import FavoriteButton from './FavoriteButton';
import CompareButton from './CompareButton';
import FavoriteButton from './FavoriteButton';

const rainbow = [
    '#E40303', // red
    '#FF8C00', // orange
    '#FFED00', // yellow
    '#008026', // green
    '#24408E', // blue
    '#732982'  // violet
];
const randomRainbow = () =>
    rainbow[Math.floor(Math.random() * rainbow.length)];


export default function CountryCard({ country }) {


    const navigate = useNavigate();

    // click su tutta la card → naviga
    function handleCardClick() {
        navigate(`/countries/${country.id}`);
    }


    return (
        <div className="country-card"
            onClick={handleCardClick}
            onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = randomRainbow();
                e.currentTarget.style.color = '#FFFFFF';       // testo bianco leggibile
            }}
            onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'inherit';
            }}>

            <div className="card-button">
                <FavoriteButton
                    id={country.id} />

                <CompareButton
                    id={country.id} />
            </div>


            <h2
                className="card-title"

            >
                {country.title}
            </h2>



            {/* dettagli */}
            <p><strong>Continent:</strong> {country.category}</p>

            <p>
                <strong>Decriminalization Year:</strong>{' '}
                {country.decriminalizationYear || 'n/a'}
            </p>

            <p>
                <strong>Marriage Status:</strong> {country.marriageStatus || 'n/a'}{' '}
                {country.marriageYear ? `(${country.marriageYear})` : ''}
            </p>

            <p>
                <strong>Adoption Status:</strong> {country.adoptionStatus || 'n/a'}{' '}
                {country.adoptionYear ? `(${country.adoptionYear})` : ''}
            </p>

            <p>
                <strong>Anti-Discrimination Status:</strong>{' '}
                {country.antiDiscriminationStatus || 'n/a'}{' '}
                {country.antiDiscriminationYear
                    ? `(${country.antiDiscriminationYear})`
                    : ''}
            </p>

            <p>
                <strong>Gender Recognition Status:</strong>{' '}
                {country.genderRecognitionStatus || 'n/a'}{' '}
                {country.genderRecognitionYear
                    ? `(${country.genderRecognitionYear})`
                    : ''}
            </p>

            <p>
                <strong>Trans Healthcare Access:</strong>{' '}
                {country.transHealthcareAccess || 'n/a'}{' '}
                {country.transHealthcareYear ? `(${country.transHealthcareYear})` : ''}
            </p>
        </div>
    );
}
