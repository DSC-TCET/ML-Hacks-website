import React, { useState } from "react";
import landing from "../assets/landing.png";

const Landing = () => {
  const [data, setData] = useState({
    heading: "This is the Heading",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad, reprehenderit blanditiis eveniet nisi",
    button: "Register Now",
  });

  return (
    <div className='h-screen w-full flex flex-col justify-center'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-blue text-6xl'>{data.heading}</h1>
          <p className='text-xl' style={{ maxWidth: "600px" }}>
            {data.body}
          </p>
          <div>
            <button className='bg-white text-blue font-semibold border-0 rounded-sm py-3 px-4 text-lg'>
              {data.button}
            </button>
          </div>
        </div>
        <div style={{ width: "500px" }}>
          <img src={landing} alt='landing' className='w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
