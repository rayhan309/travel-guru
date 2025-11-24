import { FaStar } from "react-icons/fa";

const TopProviders = () => {

  const topProviders = [
    {
      id: 1,
      name: "Jhankar Mahbub",
      expertise: "Programmer",
      rating: 4.9,
      image: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/467444869_10160351769061891_3964624160658220491_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HdqrPTmbuRAQ7kNvwFM7k71&_nc_oc=Admw-qXcTE6fF7uaull1p8nEZKf6Wq4YQprFNcbzd0hoKquXh3k_Wfel4ZwdIewt_cs&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=PnxUAC7HsMAsTaMkhWMbyA&oh=00_Afh9IKgTdASN4vtG2YriXpkwHbx09ekaxgxjosqF2SGmXQ&oe=6928DAD0",
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
    <div className="grid grid-cols-4 my-font mb-10 gap-10 container mx-auto">
      {topProviders.map((provider) => (
        <div className="relative shadow-xl cursor-pointer rounded-xl p-5 border-2 animated-border transition duration-300 my-card">
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
  );
};

export default TopProviders;
