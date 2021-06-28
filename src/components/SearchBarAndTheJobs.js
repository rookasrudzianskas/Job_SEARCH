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

    const filterJobs = (jobs, input) => {
        if(input) {
            let filteredJobs = jobs.filter(job => {

                if(job.roleName.toLowerCase().includes(input) || job.type.toLowerCase().includes(input) || job.company.toLowerCase().includes(input) || job.requirements.content.toLowerCase().includes(input)) {
                    return true;
                } else {
                    return false;
                }
            })
            return filteredJobs;
        } else {
            return jobs;
        }
    }

    const pressed = (e) => {
        e.preventDefault();
        getJobs().then(jobs => {
            console.log("👽", jobs)
            let filteredJobsDone = filterJobs(jobs, input);
            console.log(filteredJobsDone)
        })
    }

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
                        <span onClick={pressed}>Find a Job</span>
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
