import { useEffect, useState } from "react";
import { FaEnvelope, FaStar, FaUserTie } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";


const SkillDitailes = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [ditailesCard, setDitailesCard] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    category,
    image,
  } = ditailesCard;

  // filtered data
  useEffect(() => {
    const finedData = data.find((singleCard) => singleCard?.skillId == id);
    setDitailesCard(finedData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data, id]);

  //   enrole handle
  const enroleHandle = () => {
    toast.success("done");
  };
 
  return loading ? (
    <Loader />
  ) : (
    <div className="">
      {/* cards */} 
      <div className="card bg-gradient-to-br from-pink-200 via-purple-400 to-pink-200 p-2 m-2 mt-5 md:mt-14 my-font cursor-pointer">
        <div className="flex flex-col md:flex-row md:gap-7">
          <div className="md:w-[50%] w-full h-[80%]">
            <figure>
              <img
                src={image}
                alt={skillName}
                className="max-h-[550px] w-full rounded-lg object-cover"
              />
            </figure>
          </div>

          <div>
            <div className="card-body space-y-5 mt-7">
              {/* cg */}
              <span className="badge badge-secondary w-fit">{category}</span>

              {/* tl */}
              <h2 className="card-title text-xl font-semibold">{skillName}</h2>

              {/* des */}
              <p className="text-sm text-gray-600">{description}</p>

              {/* pd */}
              <div className="flex items-center gap-2 mt-2">
                <FaUserTie className="text-primary" />
                <span className="font-semibold">{providerName}</span>
              </div>

              {/* em */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaEnvelope />
                <span>{providerEmail}</span>
              </div>

              {/* R & P */}
              <div className="flex">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">{rating}</span>
                </div>

                <p className="text-lg text-right font-medium">
                  Price: ${price}
                </p>
              </div>

              {/* Slots */}
              <p className="text-sm mt-1">
                Available Slots: <b>{slotsAvailable}</b>
              </p>

              {/* Button */}
              <div className="card-actions mt-4">
                <Link
                  to={"/inrole"}
                  className="btn bg-linear-to-r to-purple-500 from-pink-500 border-none text-white w-full"
                  onClick={enroleHandle}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SkillDitailes;
