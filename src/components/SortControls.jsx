/* SortControls.jsx */
export default function SortControls({ value, onChange }) {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className="select-control"
        >
            <option value="title-asc">title A-Z</option>
            <option value="title-desc">title Z-A</option>
            <option value="category-asc">continent A-Z</option>
            <option value="category-desc">continent Z-A</option>
        </select>
    );
}
