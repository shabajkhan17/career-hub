import ManImage from "../../assets/images/man.png";

const HeroBanner = () => {
    return (
        <div className="hero min-h-fit bg-base-200">
        <div className="hero-content grid sm:grid-cols-1 md:grid-cols-2">
          <div className="">
            <h1 className="text-5xl font-bold">
              One Step <br />
              Closer To Your <br />
              Dream Job
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img src={ManImage} className="w-4/5 rounded-lg" />
        </div>
      </div>
    );
};

export default HeroBanner;