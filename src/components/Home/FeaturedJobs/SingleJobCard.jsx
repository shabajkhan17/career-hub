import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";
const SingleJobCard = ({ job }) => {
  const {
    _id,
    company_name,
    company_logo,
    job_description,
    job_location,
    job_nature,
    job_requirements,
    job_salary,
    job_title,
    job_type,
  } = job || {};
  return (
    <div className="card card-compact bg-base-100 shadow">
      <figure>
        <img src={company_logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="card-actions ">
          <button className="btn btn-outline">{job_type}</button>
          <button className="btn btn-outline">{job_nature}</button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <GrLocation size={20}></GrLocation>
            <p>{job_location}</p>
          </div>
          <div className="flex gap-1">
            <AiOutlineDollarCircle size={20}></AiOutlineDollarCircle>
            <p>Salary: {job_salary}</p>
          </div>
        </div>
      </div>
      <div className="ml-4 mb-2">
        <Link to={`/job/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleJobCard;
