import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.job_categories);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-4xl font-bold text-center">Job Category List</h1>
      <div className=" my-12 grid md:grid-cols-4 gap-3">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
