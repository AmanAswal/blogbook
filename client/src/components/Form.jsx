const Form = () => {
  return (
    <div className="lg:w-full w-[90vw]">
      <h1 className="text-center text-3xl font-eb mb-5">Create Post</h1>
      <div className="w-[50%] mx-auto">
        <form className="">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="font-eb block text-2xl mb-2 font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              autoFocus
              placeholder="Enter title"
              className="border-gray-300 placeholder:italic border rounded-lg p-2.5 w-full bg-gray-50 focus:ring  focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="font-eb block mb-2 text-2xl font-medium text-gray-900"
            >
              Journal
            </label>
            <textarea
              id="description"
              rows="8"
              className="p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring focus:outline-none placeholder:italic"
              placeholder="Type here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white font-eb bg-blue-700 hover:bg-blue-600 text-lg rounded-lg px-5 py-2.5 text-center"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
