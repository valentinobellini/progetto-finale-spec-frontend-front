// src/pages/ListPage.jsx
import { useCountryData } from '../context/CountryDataContext';
import SearchBar from '../components/SearchBar';
import FilterSelect from '../components/FilterSelect';
import SortControls from '../components/SortControls';

import CountryTable from '../components/CountryTable';

export default function ListPage() {
    const {
        filteredList,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        categoryFilter,
        setCategoryFilter,
        sortOrder,
        setSortOrder,
    } = useCountryData();

    if (loading) return <div>loading…</div>;
    if (error) return <div>error: {error.message}</div>;

    return (





        <div className='list_page'>
            <div className='text_wrapper'>
                <h2>“Equality in 2025: How Far, How Fast, How Fragile”</h2>
                <div className="text">
                    <p>
                        In the past two decades the <strong>rainbow map</strong> has been redrawn again and again.
                        Almost <span className="number">40</span> countries now celebrate marriage equality and roughly <span className="number">15</span> let trans citizens update their documents with a simple sworn statement.
                        Workplace bias is outlawed in <span className="number">77</span> states, and surveys show that every new reform
                        nudges public support a little higher.
                    </p><br />

                    <p>
                        Yet the <strong>shadow side</strong> of the picture is stark. Consensual same-sex intimacy remains a crime in <span className="number">60</span> nations, and <span className="number">12</span> of them can still impose the death penalty.
                        On a ten-point scale of acceptance the world averages <span className="number">4.6</span>, leaving a gulf between the most
                        welcoming societies (Nordic scores near <span className="number">9</span>) and the least tolerant (below <span className="number">2</span>).
                    </p><br />

                    <p>
                        The <strong>interactive table</strong> below zooms in on <span className="number">50</span> representative countries.
                        <br />
                        Use the filters, sorting tools and side-by-side comparator to trace exactly how laws — <strong>and lived realities</strong> —
                        differ across the globe.
                    </p>
                </div>


            </div>

            <div className="list_section">
                <div className="controls_row">
                    {/* search bar per titolo */}
                    <SearchBar value={searchTerm} setSearchTerm={setSearchTerm} />

                    {/* dropdown per filtro continente */}
                    <FilterSelect value={categoryFilter} onChange={setCategoryFilter} />

                    {/* controlli di ordinamento */}
                    <SortControls value={sortOrder} onChange={setSortOrder} />
                </div>

                {/* tabella dei paesi: passa data via prop */}
                {/* <CountryTable data={filteredList} /> */}

                <CountryTable data={filteredList} />

            </div>
        </div>

    );
}
