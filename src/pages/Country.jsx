import { useState, useTransition } from "react"
import { useEffect } from "react"
import { getCountryData } from "../api/postAPI";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countryData, setCountryData] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("All");

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country
    }

    const filterRegion = (country) => {
        if (filter === "All") return country
        return country.region === filter;
    }

    // here is the main logic
    const filterCountries = countryData.filter((country) => searchCountry(country) && filterRegion(country))

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountryData(res.data);
        })
    }, [])

    if (isPending) return <Loader />;

    return (
        <section className="country-section">
            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countryData={countryData}
                setCountryData={setCountryData}
            />
            <ul className="grid grid-four-cols">
                {filterCountries.map((curCountry, index) => {
                    return <CountryCard country={curCountry} key={index} />
                })}
                {filterCountries.length === 0 && <h1>No Data Found</h1>}
            </ul>
        </section>
    )
}