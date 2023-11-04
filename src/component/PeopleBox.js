import peopleImg from "../images/profile-1.jpg";
const PeopleBox = ({ item }) => {
  return (
    <div className="bg-[#21293c] rounded-lg shadow-md border-2 border-transparent transition-all duration-300  p-5 text-white hover:border-2 hover:border-sky-500">
      <p className="leading-[1.7]">{item.desc}</p>
      <div className="flex items-center gap-3 my-[15px] ">
        <img
          src={peopleImg}
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div>
          <h3>{item.name}</h3>
          <h4 className="text-gray-400 ">{item.jop}</h4>
        </div>
      </div>
    </div>
  );
};

export default PeopleBox;
