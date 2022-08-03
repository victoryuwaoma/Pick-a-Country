import React from "react";

export default function SearchBar(props) {
    return (
    <div className="search-wrapper row mt-0 mp-0">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="form-control form-control-lg mx-auto"
                                placeholder="Search for a Country..."
                                value={props.query}
                                size={"100"}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={(e) => props.setQuery(e.target.value)}
                            />
        <span className="sr-only">Search Countries here</span>
        </label>
    </div>
    );
}