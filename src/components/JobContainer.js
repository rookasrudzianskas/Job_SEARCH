import React from 'react';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./styles/SearchBarAndTheJobs.css";

const JobContainer = () => {
    return (
        <div className="jobs-container">
            <div className="job-title">
                <div className="top">
                    <img src="https://www.gstatic.com/devrel-devsite/prod/v29345390480661f31f1340a20aede1ba9b8f625badf7470697c2e7672c91fc58/firebase/images/touchicon-180.png" alt=""/>
                    <MoreHorizIcon />
                </div>

                <div className="rolename">
                    <span>Lead Product Design</span>
                </div>

                <div className="description">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur cumque deserunt enim eum labore nostrum quaerat repellat sequi tempora?</span>
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

            <div className="job-title">
                One Job
            </div>

            <div className="job-title">
                One Job
            </div>

            <div className="job-title">
                One Job
            </div>

            <div className="job-title">
                One Job
            </div>

            <div className="job-title">
                One Job
            </div>

            <div className="job-title">
                One Job
            </div>

        </div>
    );
};

export default JobContainer;