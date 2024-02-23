import React from "react";
import Image from "next/image";
import GheeProcess from "../../public/assets/process.png";
import Gheeprocesscard from "./Gheeprocesscard";
import Milk from "../../public/assets/milk.png"
import Churning from "../../public/assets/churning.png"
import curd from "../../public/assets/curd.png"

const Gheeprocess = () => {

  let Process = [
    {
      id: 1,
      name: "Selection of Quality Milk",
      sub: "The first step in making A2 organic Ghee is to select high-quality milk from cows that produce A2 beta-casein protein. A2 milk is sourced from cows that naturally produce only A2 beta-casein protein, which is believed to be easier to digest for some individuals compared to A1 beta-casein protein found in conventional cow's milk.",
      imgt: Milk,
      color:"bg-[#B76FF0]",
    },
    {
      id: 2,
      name: "Traditional Churning",
      sub: "Once the milk is sourced, it is then boiled and allowed to cool down to room temperature. After cooling, the cream is separated from the milk and churned using traditional methods. Churning helps separate the butterfat from the buttermilk. This process may involve using a hand churn or a mechanical churner, depending on the scale of production.",
      imgt: Churning,
      color:"bg-[#F6CC5E]",
    },
    {
      id: 3,
      name: "Clarification and Straining",
      sub: "The churned butterfat is then gently heated in a pot until it reaches a specific temperature, causing the water content to evaporate, and the milk solids to separate from the pure butterfat. The mixture is simmered until the milk solids caramelize, giving the Ghee its characteristic nutty flavor. The clarified butter is then strained to remove the milk solids, resulting in pure golden Ghee. ",
      imgt: curd,
      color:"bg-[#C4E454]",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <Image src={GheeProcess} alt="Our Ghee Process" />
      </div>
      <p className="mx-auto mt-10 text-lg max-w-screen-sm ">We have a responsibility to inform you about how we produce your Ghee, and it is your right to be aware of our process.</p>
      <div className="flex flex-wrap justify-center my-10 gap-8">
        {Process.map((obj) => {
          return <Gheeprocesscard data={obj} key={obj.id}></Gheeprocesscard>;
        })}
      </div>
    </div>
  );
};

export default Gheeprocess;
