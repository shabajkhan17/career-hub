import React from "react";
import PropTypes from 'prop-types';
const SharedBanner = ({title}) => {
  return (
    <div className="hero h-[300px] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          
        </div>
      </div>
    </div>
  );
};
SharedBanner.propTypes = {
    title: PropTypes.string,
  }
export default SharedBanner;
