import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [data] = useState([
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Events",
      to: "events",
    },
    {
      name: "Timeline",
      to: "timeline",
    },
    {
      name: "Speakers",
      to: "speakers",
    },
    {
      name: "Sponsors",
      to: "sponsors",
    },
    {
      name: "Partners",
      to: "partners",
    },
    {
      name: "FAQ",
      to: "faq",
    },
  ]);

  return (
    <nav
      className='fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm'
      style={{ zIndex: "999" }}
    >
      <Container className='p-4 flex justify-between items-center'>
        <h1 className='text-2xl inline-block font-bold '>LOGO</h1>
        <div className='flex gap-8 text-md'>
          {data.map((item) => {
            return (
              <Link
                to={item.to}
                smooth={true}
                duration={300}
                className='cursor-pointer hover:text-indigo-200 transition '
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
