import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./styles/SearchBarAndTheJobs.css";

const SearchBarAndTheJobs = () => {

    const [input, setInput] = useState('');

    return (
        <div className="searchBarAndTheJobs">
            <div className="search">
                <div className="search__container">
                    <div className="search__inputContainer">
                        <SearchIcon />
                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Filter by title 🚀" name="filter-jobs" type="text" className="filter-jobs"/>
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
