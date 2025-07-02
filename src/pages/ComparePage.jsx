import { useEffect, useState } from 'react';
import { useCompare } from '../context/CompareContext';


export default function ComparePage() {
    const { selected, clearCompare } = useCompare();
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDetails() {
            if (selected.length < 2) {
                setCountries([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const results = await Promise.all(
                    selected.map(id =>
                        fetch(`http://localhost:3001/countryLaws/${id}`)
                            .then(res => res.json())
                            .then(json => json.countrylaw)
                    )
                );
                setCountries(results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchDetails();
    }, [selected]);

    if (loading) return <div className="compare-page">Loading…</div>;
    if (error) return <div className="compare-page">Error: {error.message}</div>;
    if (countries.length < 2)
        return <div className="empty-compare-page">Select two countries to compare</div>;

    const [A, B] = countries;

    return (
        <div className="compare-page">
            {/* <h1 className="compare-title">Comparison Results</h1> */}

            <div className="compare-container">
                {/* Colonna etichette */}
                <div className="labels-col">
                    <div className="label">Continent</div>
                    <div className="label">Decriminalization Year</div>
                    <div className="label">Marriage Status</div>
                    <div className="label">Marriage Year</div>
                    <div className="label">Adoption Status</div>
                    <div className="label">Adoption Year</div>
                    <div className="label">Anti-Discrimination Status</div>
                    <div className="label">Anti-Discrimination Year</div>
                    <div className="label">Gender Recognition Status</div>
                    <div className="label">Gender Recognition Year</div>
                    <div className="label">Trans Healthcare Access</div>
                    <div className="label">Trans Healthcare Year</div>
                </div>

                {/* Colonna Paese A */}
                <div className="values-col">
                    <div className="country-header">{A.title}</div>
                    <div className="value">{A.category || 'n/a'}</div>
                    <div className="value">{A.decriminalizationYear || 'n/a'}</div>
                    <div className="value">{A.marriageStatus || 'n/a'}</div>
                    <div className="value">{A.marriageYear || 'n/a'}</div>
                    <div className="value">{A.adoptionStatus || 'n/a'}</div>
                    <div className="value">{A.adoptionYear || 'n/a'}</div>
                    <div className="value">{A.antiDiscriminationStatus || 'n/a'}</div>
                    <div className="value">{A.antiDiscriminationYear || 'n/a'}</div>
                    <div className="value">{A.genderRecognitionStatus || 'n/a'}</div>
                    <div className="value">{A.genderRecognitionYear || 'n/a'}</div>
                    <div className="value">{A.transHealthcareAccess || 'n/a'}</div>
                    <div className="value">{A.transHealthcareYear || 'n/a'}</div>
                </div>

                {/* Colonna Paese B */}
                <div className="values-col">
                    <div className="country-header">{B.title}</div>
                    <div className="value">{B.category || 'n/a'}</div>
                    <div className="value">{B.decriminalizationYear || 'n/a'}</div>
                    <div className="value">{B.marriageStatus || 'n/a'}</div>
                    <div className="value">{B.marriageYear || 'n/a'}</div>
                    <div className="value">{B.adoptionStatus || 'n/a'}</div>
                    <div className="value">{B.adoptionYear || 'n/a'}</div>
                    <div className="value">{B.antiDiscriminationStatus || 'n/a'}</div>
                    <div className="value">{B.antiDiscriminationYear || 'n/a'}</div>
                    <div className="value">{B.genderRecognitionStatus || 'n/a'}</div>
                    <div className="value">{B.genderRecognitionYear || 'n/a'}</div>
                    <div className="value">{B.transHealthcareAccess || 'n/a'}</div>
                    <div className="value">{B.transHealthcareYear || 'n/a'}</div>
                </div>
            </div>

            <button className="reset-button" onClick={clearCompare}>
                Reset comparison
            </button>
        </div>
    );
}
