import React from 'react';
import Image from 'next/image';

const Gheeprocesscard = (props) => {
  return (
    <div className={`w-[389px] h-[671px] ${props.data.color} p-3 rounded-xl flex flex-col justify-center items-center transition-transform hover:scale-105`}>
      <div className="m-2">
        <Image src={props.data.imgt} alt="Our Ghee Process" className='w-[393px] h-[280px] transition-transform hover:scale-105' />
      </div>
      <div className="text-center">
        <h3 className="text-[26px] font-bold mt-3 mb-3">{props.data.name}</h3>
        <p className="text-[18px]">{props.data.sub}</p>
      </div>
    </div>
  );
};

export default Gheeprocesscard;
