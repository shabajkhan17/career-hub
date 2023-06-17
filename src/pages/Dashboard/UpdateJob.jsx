import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/job-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      });
  }, [id]);

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedJob = {};
    for (const field of form) {
      if (field.name) {
        updatedJob[field.name] = field.value;
      }
    }
    console.log(updatedJob);
    fetch(`http://localhost:3000/update-job/${job._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({updatedJob}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    return;
  };
  return (
    <div>
      <div className=" my-6 text-center">
        <h1 className="text-3xl font-bold">Update a Job</h1>
        <p className="text-sm">Fill up the following form to update a job</p>
      </div>
      {/* form starts */}
      <form
        action=""
        className="md:px-12 grid md:grid-cols-2 gap-4"
        onSubmit={handleUpdateJob}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">What is your company name?</span>
          </label>
          <input
            name="company_name"
            defaultValue={job.company_name}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">What is your job-title?</span>
          </label>
          <input
            name="job_title"
            defaultValue={job.job_title}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Salary?</span>
          </label>
          <input
            name="job_salary"
            defaultValue={job.job_salary}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Location?</span>
          </label>
          <input
            name="job_location"
            defaultValue={job.job_location}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Job Description?</span>
          </label>
          <input
            name="job_description"
            defaultValue={job.job_description}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Job Responsibilities?</span>
          </label>
          <input
            name="job_responsibilities"
            defaultValue={job.job_responsibilities}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">educational_requirements?</span>
          </label>
          <input
            name="educational_requirements"
            defaultValue={job.educational_requirements}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">experience_requirements?</span>
          </label>
          <input
            defaultValue={job.experience_requirements}
            name="experience_requirements"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">contact_information?</span>
          </label>
          <input
            defaultValue={job.contact_information}
            name="contact_information"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Company Logo?</span>
          </label>
          <input
            name="company_logo"
            defaultValue={job.company_logo}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Job Type?</span>
          </label>
          <select className="select select-bordered" name="job_type">
            <option selected={job.job_type == "Full-Time"}>Full-Time</option>
            <option selected={job.job_type == "Intern"}>Intern</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Job Nature?</span>
          </label>
          <select className="select select-bordered" name="job_nature">
            <option selected={job.job_nature == "On-site"}>On-site</option>
            <option selected={job.job_nature == "Remote"}>Remote</option>
          </select>
        </div>
        <div className="col-span-2 flex justify-center">
          <input type="submit" className="btn w-52" value={"Update Job"} />
        </div>
      </form>
      {/* form ends */}
    </div>
  );
};

export default UpdateJob;
