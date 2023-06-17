import React, { useEffect, useState } from "react";
import SingleJobCard from "./SingleJobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.job_posts);
      });
  }, [limit]);
  return (
    <section className="mb-12">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold ">Featured Jobs</h1>
        <p className="text-sm text-slate-400">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {jobs?.map((job) => (
          <SingleJobCard job={job} key={job.id} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="btn btn-warning"
          onClick={() => {
            limit == 4 ? setLimit(0) : setLimit(4);
          }}
        >
          {limit == 4 ? "See All Jobs" : "Show Few Jobs"}
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
