import React, { useEffect, useState } from "react";
import Table from "../../components/Reusable/Table/Table";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.job_posts));
  }, []);
  // method for deleting a job
  const handleDeleteJob = (_id) => {
    fetch(`http://localhost:3000/delete-a-job/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = jobs.filter((job) => job._id !== _id);
          setJobs(remaining);
          toast.success("Deleted Successfully")
        }
      })
      .catch(err =>{
        console.log(err);
        toast(err.message)
      });
  };
  const heads = [
    { label: "Title", value: "title" },
    { label: "Location", value: "location" },
    { label: "Type", value: "type" },
    { label: "Actions", value: "actions" },
  ];
  return (
    <div>
      <div className=" my-6 text-center">
        <h1 className="text-3xl font-bold">Manage All The Available Jobs</h1>
        <p className="text-sm">Update and Delete available jobs</p>
      </div>
      <Table heads={heads}>
        {jobs?.map((job) => (
          <tr key={job._id}>
            <td>{job.job_title}</td>
            <td>{job.job_location}</td>
            <td>{job.job_type + ", " + job.job_nature}</td>
            <td className="flex gap-2">
              <span onClick={() => handleDeleteJob(job._id)} className="cursor-pointer">
                <RiDeleteBinFill size={20} />
              </span>
              <span>
                <Link to={`/dashboard/update-job/${job._id}`}>
                  <GrUpdate size={20} />
                </Link>
              </span>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default ManageJobs;
