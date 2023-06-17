import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SharedBanner from "../../components/Shared/SharedBanner";
import SingleJob from "../../components/JobDetails/SingleJob";
const JobDetails = () => {
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
  return (
    <div>
      <SharedBanner title={"Job Details"}/>
      <SingleJob job={job}/>
    </div>
  );
};

export default JobDetails;
