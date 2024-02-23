import React from "react";
import Card from "./Card";
import Maya from "../../public/assets/maya.png";
import Rajesh from "../../public/assets/rajesh.png";
import Sneha from "../../public/assets/sneha.png";

const Clienttestimonials = () => {
  let Client = [
    {
      id: 1,
      name: "Maya S",
      sub: "Nakshatra Farms' A2 Ghee has become a staple in my kitchen! Its rich aroma and taste take me back to my grandmother's cooking. Truly the best ghee I've ever tasted!",
      imgt: Maya,
    },
    {
      id: 2,
      name: "Rajesh P",
      sub: "The Pooja Essentials from Nakshatra Farms have enhanced my spiritual practices. The quality and purity of the ingredients make each ritual more meaningful. I wouldn't trust any other brand for my spiritual needs.",
      imgt: Rajesh,
    },
    {
      id: 3,
      name: "Sneha R",
      sub: "I was skeptical about using Cow Dung Products initially, but Nakshatra Farms changed my perspective completely. Their eco-friendly manure has transformed my garden, and I'm amazed by the results. Thank you for such innovative ... ",
      imgt: Sneha,
    },
  ];

  return (
    <div className="Clienttestimonials h-[831px] pt-[5rem]">
      <div className="text-white text-center">
        <h4 className="text-[20px]">CLIENT TESTIMONIALS</h4>
        <h2 className="text-[36px] font-extrabold">What our clients say</h2>
      </div>
      <div className="flex flex-flow-row justify-around pb-6 gap-8 my-[10rem]">
        {Client.map((obj) => {
          return <Card data={obj} key={obj.id}></Card>;
        })}
      </div>
    </div>
  );
};

export default Clienttestimonials;
