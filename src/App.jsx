import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./Layouts/Main";
import JobDetails from "./pages/JobDetails/JobDetails";
import { element } from "prop-types";
import Dashboard from "./Layouts/Dashboard";
import ManageJobs from "./pages/Dashboard/ManageJobs";
import AddJobs from "./pages/Dashboard/AddJobs";
import UpdateJob from "./pages/Dashboard/UpdateJob";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "job/:id",
          element: <JobDetails />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          element: <ManageJobs></ManageJobs>,
          index: true,
        },
        {
          path: "all-jobs",
          element: <ManageJobs />,
          index: true,
        },
        {
          path: "add-jobs",
          element: <AddJobs />,
        },
        {
          path: "update-job/:id",
          element: <UpdateJob />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>No match</h1>,
    },
  ]);

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
