import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsCard = ({ skill }) => {
  const {
    skillId,
    skillName,
    price,
    rating,
    slotsAvailable,
    description,
    category,
    image,
  } = skill;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); 
  }, []);

  return (
    <div
      data-aos="zoom-in" 
      className="card bg-white shadow-xl my-font my-card cursor-pointer"
    >
      <figure>
        <img src={image} alt={skillName} className="h-52 w-full object-cover" />
      </figure>

      <div className="card-body">
        {/* Category */}
        <span className="badge badge-secondary w-fit">{category}</span>

        {/* Title */}
        <h2 className="card-title text-xl font-semibold">{skillName}</h2>

        {/* des */}
        <p className="text-sm text-gray-600">{description}</p>
        {/* pr */}
        <div className="flex">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{rating}</span>
          </div>

          <p className="text-lg text-right font-medium">Price: ${price}</p>
        </div>

        {/* sl */}
        <p className="text-sm mt-1">
          Available Slots: <b>{slotsAvailable}</b>
        </p>

        {/* Button */}
        <div className="card-actions mt-4">
          <Link
            to={`/skillsDitailes/${skillId}`}
            className="btn btn-secondary w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
