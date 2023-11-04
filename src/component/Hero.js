import homeImg from "../images/illustration-intro.png";

import dividerImg from "../images/bg-curvy-desktop.svg";
const Hero = () => {
  return (
    <div className="pt-[200px] bg-[#1c2230]  ">
      <div className="container justify-center items-center flex-col space-y-10">
        <img className="max-w-full w-[750px] mx-auto" src={homeImg} />
        <div className="text-white text-center">
          <h1 className="text-xl md:text-2xl capitalize ">
            web just isn't the same without you. Let's get you back online!
            <br />
            You're not connected
          </h1>
          <p className="w-full md:w-[600px] px-[15px] my-4 mx-auto opacity-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            distinctio perferendis quidem ullam deleniti blanditiis voluptates
            voluptas, laborum praesentium assumenda!
          </p>
          <button className="w-[230px] capitalize transition-all duration-300 bg-[#38bab8] hover:bg-[#349695] rounded-full p-3">
            get started
          </button>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img className="w-full h-full" src={dividerImg} />
      </div>
    </div>
  );
};

export default Hero;
