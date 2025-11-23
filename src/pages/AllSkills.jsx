import { useLoaderData } from "react-router";
import SkillsCard from "../components/SkillsCard";

const AllSkills = () => {
  const data = useLoaderData();
  console.log(data);

  // search Handle
  const searchHandle = () => {
    alert("hello");
  };

  return (
    <div className="my-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center text-pink-400">
        All Skills!
      </h2>

      <div className="mt-7 flex justify-between items-center">
        <span className="text-xl font-semibold">
          Skills (<span className="text-pink-500">{data.length}</span>) Founds
        </span>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" onChange={searchHandle} placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {data.map((skill) => (
          <SkillsCard skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
