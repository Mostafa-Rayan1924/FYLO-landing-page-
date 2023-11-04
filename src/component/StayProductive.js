import stay from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";
import "../index.css";
const StayProductive = () => {
  return (
    <div className="py-[100px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <img className="max-w-full" src={stay} />
        <div className="text-white">
          <h3 className="text-2xl md:text-4xl">
            Stay productive
            <br />
            where ever you are
          </h3>
          <p className="my-4 leading-[1.7]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            ipsa qui at quas, aliquid labore repellendus voluptates!
          </p>
          <p className="mb-2.5 leading-[1.7]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            ipsa qui at quas, aliquid labore repellendus voluptates!
          </p>
          <div className="cursor-pointer flex items-center gap-2 capitalize text-[#67dbda] border-b-2 pb-1  w-fit border-[#67dbda]">
            <h4>see how fylo works</h4>
            <img className="w-5 h-5 arrowImg" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayProductive;
