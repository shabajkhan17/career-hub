import React from "react";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const SingleJob = ({ job }) => {
  const {
    id,
    job_description,
    job_location,
    job_nature,
    job_responsibilities,
    job_salary,
    job_title,
    job_type,
    educational_requirements,
    experience_requirements
  } = job || {};
  return (
    <div className="my-10 grid md:grid-cols-3">
      <div className="col-span-2 ">
        <p className="my-4">
          <span className="font-bold">Job Description: </span>
          {job_description}
        </p>
        <p className="my-4">
          <span className="font-bold">Job Responsibilities: </span>
          {job_responsibilities}
        </p>
        <p className="my-4">
          <span className="font-bold">Educational Requirements: </span>
          {educational_requirements}
        </p>
        <p className="my-4">
          <span className="font-bold">Experience Requirements: </span>
          {experience_requirements}
        </p>
      </div>
      <div className="bg-[#9873FF1A] px-3">
        <div className="mb-4">
          <h3 className="text-xl font-bold py-3">Job Details</h3>
          <hr className="mb-2 bg-slate-400 h-1" />
          <div>
            <p className="text-slate-700">
              <span className="font-bold">Salary: </span>
              {job_salary} (Per Year)
            </p>
            <p className="text-slate-700">
              <span className="font-bold">Job Title: </span>
              {job_title}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold py-3">Contact Information</h3>
          <hr className="mb-2 bg-slate-400 h-1" />
          <div>
            <p className="text-slate-700">
              <span className="font-bold">Job Type: </span>
              {job_type + ", " + job_nature}
            </p>
            <p className="text-slate-700">
              <span className="font-bold">Job Location: </span>
              {job_location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleJob.propTypes = {
  job: PropTypes.object,
};
export default SingleJob;
