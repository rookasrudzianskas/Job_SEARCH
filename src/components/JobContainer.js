import React from 'react';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./styles/SearchBarAndTheJobs.css";

const JobContainer = (data) => {

    return (
        <div className="jobs-container">
            <div className="job-title">
                <div className="top">
                    <img src={data.logo} alt=""/>
                    <MoreHorizIcon />
                </div>

                <div className="rolename">
                    <span></span>
                </div>

                <div className="description">
                    <span></span>
                </div>

                <div className="buttons">
                    <div className="button apply-now">
                        Apply Now
                    </div>
                    <div className="button">
                        Message
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobContainer;
