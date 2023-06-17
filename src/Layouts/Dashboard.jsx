import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={`/`}>
            <img src="https://i.ibb.co/S5xyK9w/Career-Hub.png" alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here  */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-72 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <Link className="mb-4 hover:bg-base-300 py-4 px-2" to={`/dashboard/all-jobs`}>All Jobs</Link>

            <Link className="mb-4 hover:bg-base-300 py-4 px-2" to={`/dashboard/add-jobs`}>Add Jobs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
