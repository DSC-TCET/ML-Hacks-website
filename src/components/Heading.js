import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className='serif text-8xl font-bold text-white text-center'>
      {children}
    </h1>
  );
};

export default Heading;
