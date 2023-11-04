import { useState } from "react";
import PeopleBox from "./PeopleBox";
import quote from "../images/bg-quotes.png";

const People = () => {
  let [peopleData, setPeopleData] = useState([
    {
      name: "Abdo",
      jop: "photographer",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 1,
      name: "Mostafa",
      jop: "programmer",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 3,
      name: "Rawan",
      jop: "programmer",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      name: "Ahmed",
      jop: "teacher",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 1,
      name: "moaz",
      jop: "teacher",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
    {
      id: 3,
      name: "Farghaly",
      jop: "programmer",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores eius autem reiciendis in nulla esse",
    },
  ]);
  let peopleMap = peopleData.map((item) => {
    return <PeopleBox key={item.id} item={item} />;
  });
  return (
    <div className="py-[100px]  relative">
      <img
        className="absolute left-5 lg:left-[200px] -translate-y-9 -z-10"
        alt="sa"
        src={quote}
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {peopleMap}
      </div>
    </div>
  );
};

export default People;
