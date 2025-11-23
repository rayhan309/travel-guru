import { useEffect, useState } from "react";
import { FaEnvelope, FaStar, FaUserTie } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

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
    toast.success("done")
  };


  return loading ? (
    <p>Loading....</p>
  ) : (
    <div className="">

      {/* cards */}
      <div className="card bg-white p-2 m-2 my-24 my-font cursor-pointer">
        <div className="flex gap-7">
          <div className="w-[50%] h-[80%]">
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
                  className="btn btn-secondary w-full"
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
