import { use } from "react";
import { FaStar } from "react-icons/fa";

const Students = ({studentsData}) => {

    const students = use(studentsData);
    console.log(students)
  return (
    <section className="py-16 my-font">
      <h2 className="text-3xl md:text-4xl text-purple-400 font-bold  my-font text-center mb-10">
        What Our Students Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-20">
        {students.map((s) => (
          <div
            key={s.id}
            className="shadow-lg rounded-xl p-6 cursor-pointer border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={s.image}
                className="w-16 h-16 rounded-full object-cover"
                alt={s.name}
              />
              <div>
                <h3 className="text-lg font-bold text-pink-400">{s.name}</h3>
                <p className="text-sm text-gray-500">Learned: {s.skill}</p>
              </div>
            </div>

            <p className="text-gray-600 mt-4">{s.comment}</p>

            <div className="flex items-center gap-1 mt-3 text-yellow-500">
              <FaStar />
              <span className="font-semibold">{s.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Students;
