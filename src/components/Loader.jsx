
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
