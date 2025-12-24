import { FaStar } from "react-icons/fa";
import jankarlogo from '../assets/Screenshot 2025-11-27 214104.png';

const TopProviders = () => {

  const topProviders = [
    {
      id: 1,
      name: "Jhankar Mahbub",
      expertise: "Programmer",
      rating: 4.9,
      image: {jankarlogo},
    },
    {
      id: 2,
      name: "Sarah Johnson",
      expertise: "Graphic Design",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      id: 3,
      name: "Michael Brown",
      expertise: "Digital Marketing",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    },
    {
      id: 4,
      name: "Emily Carter",
      expertise: "English Speaking",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ];

  return (
    <>
    <div className="border-t border-dashed border-purple-500"></div>
      <h3 className="text-4xl pt-16 font-bold my-font pb-5 text-purple-500 text-center">Top Providers</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 my-font mb-10 gap-10 container mx-auto">
      {topProviders.map((provider) => (
        <div data-aos="zoom-out" className="relative shadow-xl cursor-pointer rounded-xl p-5 border-2 animated-border transition duration-300 my-card">
          <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-xl p-5 flex flex-col items-center">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <h2 className="text-xl font-semibold text-center mt-4 text-white">
              {provider.name}
            </h2>

            <p className="text-center text-gray-300 text-sm">
              {provider.expertise}
            </p>

            <p className="text-center flex items-center gap-4 text-yellow-400 font-semibold mt-2">
              <FaStar /> {provider.rating}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TopProviders;
