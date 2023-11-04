import icon from "../images/icon-access-anywhere.svg";
const FeatureBox = ({ item }) => {
  return (
    <div className="text-white">
      <img className=" mx-auto" src={icon} />
      <h2 className="my-2.5">{item.title}</h2>
      <p className="opacity-80">{item.desc}</p>
    </div>
  );
};

export default FeatureBox;
