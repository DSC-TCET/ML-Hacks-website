import { Container } from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const links = [
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
    name: "Partners",
    to: "partners",
  },
  {
    name: "FAQ",
    to: "faq",
  },
];

const Navbar = () => {
  // const [data] = useState();

  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav
        className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm"
        style={{ zIndex: "999" }}
      >
        <Container className=" flex justify-between px-10 items-center">
          <img width="100" height="100" src="/logoDark.png" />
          <MenuIcon className="lg:hidden h-10 w-10 cursor-pointer" onClick={() => setOpen(true)} />
          <div className="hidden lg:flex gap-8 text-md">
            {links.map((item) => {
              return (
                <Link
                  to={item.to}
                  smooth={true}
                  duration={300}
                  className="cursor-pointer hover:text-indigo-200 transition "
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </Container>
      </nav>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div className=" flex flex-col pt-10 focus:border-none" >

        {links.map((item) => {
          return (
            <Link
            to={item.to}
              smooth={true}
              duration={300}
              className="cursor-pointer hover:text-indigo-200 transition text-lg px-16 py-2 my-2  text-black"
            >
              {item.name}
            </Link>
          );
        })}
        </div>
      </SwipeableDrawer>
    </header>
  );
};

export default Navbar;
