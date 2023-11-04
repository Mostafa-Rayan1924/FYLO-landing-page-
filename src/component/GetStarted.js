const GetStarted = () => {
  return (
    <div className="container relative mb-56">
      <div className="bg-[#21293c] text-white p-[30px] text-center absolute left-1/2 translate-x-[-50%]  top-[100px] w-[865px] max-w-full  ">
        <h2 className="capitalize font-bold text-2xl md:text-4xl">
          get early access today
        </h2>
        <p className=" my-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et
          <br />
          natus soluta.
        </p>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <input
            className="w-full md:w-[70%] h-10 rounded-full px-4 text-black focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="md:w-[30%] w-full   capitalize transition-all duration-300 bg-[#51e6e3] hover:bg-[#67dbda] rounded-full p-2">
            get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
