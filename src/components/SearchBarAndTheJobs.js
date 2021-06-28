import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBarAndTheJobs = () => {
    return (
        <div className="searchBarAndTheJobs">
            <div className="search">
                <div className="search__container">
                    <div className="search__inputContainer">
                        <SearchIcon />
                        <input placeholder="Filter by title 🚀" name="filter-jobs" type="text" className="filter-jobs"/>
                    </div>

                    <div className="search__buttonContainer">
                        <span>Find a Job</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBarAndTheJobs;
