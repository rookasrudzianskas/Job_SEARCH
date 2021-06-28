import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./styles/SearchBarAndTheJobs.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import JobContainer from "./JobContainer";

const SearchBarAndTheJobs = () => {

    const [input, setInput] = useState('');



    const getJobs = () => {
        // working
        // fetch("data.json").then(response => response.json()).then(data => {
        //     console.log(data);
        //     return data;
        // })

       return fetch('./data.json').then(response => response.json()).then(data => {
            console.log(data);
            return data;
        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }
    useEffect(() => {
        // then we have the jobs, it creates a function, and invokes the another function, which shows something else.
        getJobs().then(data => {
            showJobs(data);
        });

    }, []);

    const showJobs = (jobs) => {
        console.log("Jobs here", jobs);
    }

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

            <div className="jobs-list">
                <h3>Showing 25 jobs</h3>
                <JobContainer />
            </div>
        </div>
    );
};

export default SearchBarAndTheJobs;
