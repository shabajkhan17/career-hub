import React from "react";

const AddJobs = () => {
  const handlePostJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const job = {};
    for (const field of form) {
      if (field.name) {
        job[field.name] = field.value;
      }
    }
    console.log(job);
    // post job
    fetch("http://localhost:3000/add-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({job}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className=" my-6 text-center">
        <h1 className="text-3xl font-bold">Add New Job</h1>
        <p className="text-sm">Fill up the following form to post a new job</p>
      </div>
      {/* form starts */}
      <form
        action=""
        className="md:px-12 grid md:grid-cols-2 gap-4"
        onSubmit={handlePostJob}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">What is your company name?</span>
          </label>
          <input
            name="company_name"
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
            <option selected>Full-Time</option>
            <option>Intern</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Job Nature?</span>
          </label>
          <select className="select select-bordered" name="job_nature">
            <option selected>On-site</option>
            <option>Remote</option>
          </select>
        </div>
        <div className="col-span-2 flex justify-center">
          <input type="submit" className="btn w-52" value={"Post Job"} />
        </div>
      </form>
      {/* form ends */}
    </div>
  );
};

export default AddJobs;
