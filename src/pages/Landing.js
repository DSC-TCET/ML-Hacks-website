import React, { useState } from "react";
import Heading from "../components/Heading";

const Landing = () => {
  const [data] = useState({
    heading: "This is the Heading",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad, reprehenderit blanditiis eveniet nisi",
    button: "Register Now",
  });

  return (
    <div id='home' className='h-screen w-full flex flex-col justify-center'>
      <div className='flex flex-col gap-8 items-center text-center'>
        <Heading>{data.heading}</Heading>
        <p className='text-2xl max-w-xl'>{data.body}</p>
        <button className='text-xl rounded-md py-3 px-5 bg-indigo-600'>
          Register
        </button>
      </div>
    </div>
  );
};

export default Landing;
