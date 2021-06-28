import React, {useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./styles/SearchBarAndTheJobs.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import JobContainer from "./JobContainer";

const SearchBarAndTheJobs = () => {

    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    let jobsHTML = "";

    console.log(data);



    const getJobs = () => {
        // working
        // fetch("data.json").then(response => response.json()).then(data => {
        //     console.log(data);
        //     return data;
        // })

       return fetch('./data.json').then(response => response.json()).then(data => {
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
        setData(jobs);

        // data.forEach(job => {
        //     jobsHTML += `
        //     import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
        //
        //          <div className="jobs-container">
        //             <div className="job-title">
        //         <div className="top">
        //             <img src={job.logo} alt=""/>
        //             <MoreHorizIcon />
        //         </div>
        //
        //         <div className="rolename">
        //             <span>{job.roleName}</span>
        //         </div>
        //
        //         <div className="description">
        //             <span>{job.requirements.content}</span>
        //         </div>
        //
        //         <div className="buttons">
        //             <div className="button apply-now">
        //                 Apply Now
        //             </div>
        //             <div className="button">
        //                 Message
        //             </div>
        //         </div>
        //     </div>
        //
        // </div>
        //     `
        // })

        // return jobsHTML;
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
            <div className="something">
                <h3>Showing {data.length} jobs</h3>
            </div>
            </div>

            <div className="jobs-list">
                {data.map(job => (
                    <JobContainer key={job.id} data={job} />
                ))}
                {/*{data.map(job => (*/}
                {/*    <JobContainer key={job.id} data={job} />*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default SearchBarAndTheJobs;
