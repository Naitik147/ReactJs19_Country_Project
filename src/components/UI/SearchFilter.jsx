import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter, countryData, setCountryData }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    const sortCountries = (value) => {
        const sortCountry = [...countryData].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        })
        setCountryData(sortCountry);
    }

    return (
        <section className='section-searchFilter container'>
            <input type="text"
                placeholder='Search'
                value={search}
                className='input'
                onChange={handleInputChange}
            />

            <div>
                <button onClick={() => sortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => sortCountries("des")}>Desc</button>
            </div>

            <div>
                <select
                    className='select-section'
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value={"All"}>All</option>
                    <option value={"Africa"}>Africa</option>
                    <option value={"Americas"}>Americas</option>
                    <option value={"Asia"}>Asia</option>
                    <option value={"Europe"}>Europe</option>
                    <option value={"Oceania"}>Oceania</option>

                </select>
            </div>
        </section>
    )
}

export default SearchFilter
