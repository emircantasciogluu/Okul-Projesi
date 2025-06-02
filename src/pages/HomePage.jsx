import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import ProjectsPost from "./ProjectsPost";

const HomePage = () => {
  return (
    <div className="">
      <div className="mt-4 flex flex-col gap-4 p-36 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="flex items-center justify-between mx-auto max-w-6xl">
          {/* Titles */}
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
              Discover the Innovations of the Future
            </h1>
            <p className="mt-8 text-md md:text-xl">
              Discover innovative ideas, evaluate investment opportunities for
              the future.
            </p>
          </div>
        </div>
        <div className="flex items-center mx-auto max-w-6xl text-black w-full">
          <MainCategories />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 mx-auto max-w-6xl">
        <ProjectsPost />
      </div>
    </div>
  );
};

export default HomePage;
