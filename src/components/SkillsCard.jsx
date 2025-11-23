import { FaStar, FaEnvelope, FaUserTie } from "react-icons/fa";
import { Link } from "react-router";
import img1 from '../assets/logo.jpg'

const SkillsCard = ({ skill }) => {
  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    category,
  } = skill;

  return (
    <div className="card bg-white shadow-xl my-font my-card">
      <figure>
        <img src={img1} alt={skillName} className="h-52 w-full object-cover" />
      </figure>

      <div className="card-body">
        {/* Category */}
        <span className="badge badge-secondary w-fit">{category}</span>

        {/* Title */}
        <h2 className="card-title text-xl font-semibold">{skillName}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600">{description}</p>

        {/* Provider */}
        <div className="flex items-center gap-2 mt-2">
          <FaUserTie className="text-primary" />
          <span className="font-semibold">{providerName}</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaEnvelope />
          <span>{providerEmail}</span>
        </div>

        {/* Rating & Price */}
        <div className="flex">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{rating}</span>
          </div>

          <p className="text-lg text-right font-medium">Price: ${price}</p>
        </div>

        {/* Slots */}
        <p className="text-sm mt-1">
          Available Slots: <b>{slotsAvailable}</b>
        </p>

        {/* Button */}
        <div className="card-actions mt-4">
          <Link className="btn btn-secondary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
