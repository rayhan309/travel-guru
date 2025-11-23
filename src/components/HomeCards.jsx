import { Link, useLoaderData } from "react-router";
import SkillsCard from "./SkillsCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Banner from "../components/Banner";
import TopProviders from "./TopProviders";
import Work from "./work";

const HomeCards = () => {
  const data = useLoaderData();
  return (
    <>
      <Banner />

      <div className="my-16 container mx-auto">
        <h2 className="text-3xl my-font font-bold text-center text-pink-400">
          Populer Skills!
        </h2>

        <div className="border-b border-dashed border-pink-400 mt-3"></div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {data.map((skill) => (
            <SkillsCard key={skill?.skillId} skill={skill} />
          ))}
        </div>

        <Link
          to={"/allskills"}
          className="btn btn-secondary shadow-2xl my-font mt-10 ml-[45%] m-auto"
        >
          <FaArrowRightLong /> Show All Sills
        </Link>
      </div>

      <TopProviders />
      <Work />
    </>
  );
};

export default HomeCards;
