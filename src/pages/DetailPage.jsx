// src/pages/DetailPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FavoriteButton from '../components/FavoriteButton';
import CompareButton from '../components/CompareButton';

export default function DetailPage() {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch singolo paese
    useEffect(() => {
        async function fetchDetails() {
            try {
                const res = await fetch(`http://localhost:3001/countryLaws/${id}`);
                if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
                const data = await res.json();
                // console.log(data);

                setCountry(data.countrylaw);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchDetails();
    }, [id]);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error: {error.message}</div>;
    if (!country) return <div>country not found</div>;

    return (
        <div className="detail-page">
            <div className="detail-card">
                <h1>{country.title}</h1>

                <div className="detail-description">
                    <p>{country.description}</p>
                </div>


                <div className="detail-wrapper">

                    <div className="l-wrapper">
                        <div className="detail-item">
                            <span>Continent:</span> {country.category}
                        </div>
                        <div className="detail-item">
                            <span>Decriminalization:</span> {country.decriminalizationYear ?? 'n/a'}
                        </div>
                        <div className="detail-item">
                            <span>Marriage status:</span> {country.marriageStatus ?? 'n/a'}
                            {country.marriageYear ? ` (${country.marriageYear})` : ''}
                        </div>
                        <div className="detail-item">
                            <span>Adoption status:</span> {country.adoptionStatus ?? 'n/a'}
                            {country.adoptionYear ? ` (${country.adoptionYear})` : ''}
                        </div></div>

                    <div className="r-wrapper"><div className="detail-item">
                        <span>Anti-discrimination:</span> {country.antiDiscriminationStatus ?? 'n/a'}
                        {country.antiDiscriminationYear ? ` (${country.antiDiscriminationYear})` : ''}
                    </div>
                        <div className="detail-item">
                            <span>Gender recognition:</span> {country.genderRecognitionStatus ?? 'n/a'}
                            {country.genderRecognitionYear ? ` (${country.genderRecognitionYear})` : ''}
                        </div>
                        <div className="detail-item">
                            <span>Trans healthcare:</span> {country.transHealthcareAccess ?? 'n/a'}
                            {country.transHealthcareYear ? ` (${country.transHealthcareYear})` : ''}
                        </div></div></div>


                <div className='button-wrapper'>
                    <FavoriteButton id={country.id} />
                    <CompareButton id={country.id} />
                </div>
            </div>
        </div>
    );
}
