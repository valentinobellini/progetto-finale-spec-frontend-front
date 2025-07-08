/* SortControls.jsx */
export default function SortControls({ sortOrder, setSortOrder }) {
    return (
        <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="select-control"
        >
            <option value="title-asc">title A-Z</option>
            <option value="title-desc">title Z-A</option>
            <option value="category-asc">continent A-Z</option>
            <option value="category-desc">continent Z-A</option>
        </select>
    );
}
