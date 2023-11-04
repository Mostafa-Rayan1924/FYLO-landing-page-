import { useState } from "react";
import FeatureBox from "../component/FeatureBox";
const Features = () => {
  let [features, setFeatures] = useState([
    {
      id: 1,
      title: "Access from any where 1",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 2,
      title: "Access from any where 2",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 3,
      title: "Access from any where 3",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 4,
      title: "Access from any where 4",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
  ]);
  let featureBox = features.map((item) => {
    return <FeatureBox item={item} />;
  });
  return (
    <div className="py-[100px]">
      <div className="container grid grid-cols-1 md:grid-cols-2  gap-20 text-center">
        {featureBox}
      </div>
    </div>
  );
};

export default Features;
