import FeaturedJobs from "../../components/Home/FeaturedJobs/FeaturedJobs";
import HeroBanner from "../../components/Home/HeroBanner";
import JobCategory from "../../components/Home/JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <JobCategory />
      <FeaturedJobs />

      <div className="">
        <div className="carousel w-full">
          <div
            id="slide1"
            className="carousel-item relative w-full flex justify-center items-center h-[500px]"
          >
            <p>Hello</p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full flex justify-center items-center h-[500px]"
          >
            <p>Hello2</p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full flex justify-center items-center h-[500px]"
          >
            <p>Hello3</p>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide4"
            className="carousel-item relative w-full flex justify-center items-center h-[500px]"
          >
            <div>
              <p>Hello4</p>
              <p>Hello4</p>
              <p>Hello4</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
