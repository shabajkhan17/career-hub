import { useEffect } from "react";

const CategoryCard = ({ category }) => {
    const {category_image, category_name,category_description} = category || {};
  
  return (
    <div className="card  bg-base-200 ">
      <div className="card-body">
        <img src={category_image} alt="" className="w-1/4"/>
        <h2 className="card-title">{category_name}</h2>
        <p>{category_description}</p>
        
      </div>
    </div>
  );
};

export default CategoryCard;
