import React from "react";
import Image from "next/image";
import Cow from "../../public/assets/cowEllipse.png";

const Card = (props) => {
  return (
    <div>
      <div className="w-[374px] h-[346px] rounded-xl bg-[#EFDDFF] text-center py-auto  border border-[#EFDDFF] transition duration-300 transform hover:border-yellow-400 hover:border-2 hover:scale-105">
        <div className="relative left-[35%] top-[-15%]">
          <Image
            src={props.data.imgt}
            alt="cow-img"
            className="w-[100px] h-[100px]"
          ></Image>
        </div>
        <div className="w-[308px] h-[149px] mx-auto">
          <p className="text-[20px] text-[#3C1D59] my-5 mt-[-2rem]">
            {props.data.name}
          </p>
          <p className="">{props.data.sub}</p>
        </div>
        <div className="relative left-[35%] top-[20%]">
          <Image
            src={Cow}
            alt="cow-img"
            className="w-[100px] h-[100px] rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Card;
