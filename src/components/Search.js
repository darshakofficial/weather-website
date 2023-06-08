import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, GEO_API_OPTIONS } from "../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {

        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GEO_API_OPTIONS)
                .then((response) => response.json())
                .then((response) => {
                    return {
                        options: response.data.map((city) => {
                            return{
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                            }
                        })
                    
                    }
                })
                .catch((error) => console.error(error));
    };

    const handelOnChange = (searchData) => {
        console.log(`Search data 1 : ${searchData}`);
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handelOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;