/* FilterSelect.jsx */
export default function FilterSelect({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
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
