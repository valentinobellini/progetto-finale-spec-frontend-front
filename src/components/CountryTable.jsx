import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import CompareButton from './CompareButton';

export default function CountryTable({ data }) {
    if (!data || data.length === 0) return <div className='empty-search'>No countries available</div>;

    return (
        <div className="table-wrapper">
            {/* scrolling viewport */}
            <div className="table-scroll">
                <table className="country-table">
                    <thead>
                        <tr>
                            <th className='corner'>Country</th>
                            <th>Continent</th>
                            <th className="actions-col corner">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(country => (
                            <tr key={country.id}>
                                <td className="country-cell">
                                    <Link to={`/countries/${country.id}`}>{country.title}</Link>
                                </td>
                                <td>{country.category}</td>
                                <td className="actions-cell">
                                    <FavoriteButton id={country.id} />
                                    <CompareButton id={country.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
