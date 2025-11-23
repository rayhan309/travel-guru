import { Link, useLoaderData } from "react-router";
import SkillsCard from "./SkillsCard";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeCards = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div className="my-16 container mx-auto">
            <h2 className="text-3xl font-bold text-center text-pink-400">Populer Skills!</h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                {
                data.map(skill => <SkillsCard skill={skill} />)
            }
            </div>

            <Link to={'/allskills'} className="btn btn-secondary my-font mt-10 ml-[46%]"><FaArrowRightLong /> Show All Sills</Link>
        </div>
    );
};

export default HomeCards;