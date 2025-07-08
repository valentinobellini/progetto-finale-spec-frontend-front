/* FilterSelect.jsx */
export default function FilterSelect({ categoryFilter, setCategoryFilter }) {
    return (
        <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="select-control"
        >
            <option value="">all continents</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>North America</option>
            <option>South America</option>
            <option>Oceania</option>
        </select>
    );
}
