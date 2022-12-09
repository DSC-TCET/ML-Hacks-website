import { Container } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full'>
      <Container className='p-3 flex justify-between items-center'>
        <h1 className='text-2xl inline-block'>LOGO</h1>
        <div className='flex gap-4'>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
