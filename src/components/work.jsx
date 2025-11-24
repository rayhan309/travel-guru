const Work = () => {
  return (
   <section className="py-16 bg-gray-900/80 mb-10 text-white">
  <div className="max-w-6xl mx-auto px-5 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      How It Works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="animated-card w-full cursor-pointer">
        <div className="relative z-10 flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 flex items-center justify-center bg-pink-500 rounded-full text-white text-xl font-bold animate-bounce">
            1
          </div>
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-gray-300 text-sm text-center">
            Quickly and securely create your SkillSwap account.
          </p>
        </div>
      </div>
      <div className="animated-card w-full cursor-pointer">
        <div className="relative z-10 flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full text-white text-xl font-bold animate-bounce">
            2
          </div>
          <h3 className="text-xl font-semibold">Browse Skills</h3>
          <p className="text-gray-300 text-sm text-center">
            Explore various local providers’ skills on SkillSwap.
          </p>
        </div>
      </div>

      <div className="animated-card w-full cursor-pointer">
        <div className="relative z-10 flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full text-white text-xl font-bold animate-bounce">
            3
          </div>
          <h3 className="text-xl font-semibold">Book a Session</h3>
          <p className="text-gray-300 text-sm text-center">
            Reserve your slot and connect with the provider.
          </p>
        </div>
      </div>

      <div className="animated-card w-full cursor-pointer">
        <div className="relative z-10 flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform duration-700">
          <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full text-white text-xl font-bold animate-bounce">
            4
          </div>
          <h3 className="text-xl font-semibold">Learn & Grow</h3>
          <p className="text-gray-300 text-sm text-center">
            Gain new skills and improve with each session.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Work;
