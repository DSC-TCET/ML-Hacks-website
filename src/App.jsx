import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import background from "./assets/background.gif";
import Events from "./pages/Events";
import EventTimeline from "./pages/Timeline";
import Sponser from "./pages/Sponser";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <Container maxWidth="lg">
      <div
        id="background-gif"
        className="w-screen h-screen fixed top-0 left-0"
        style={{ zIndex: "-999" }}
      >
        <img
          src={background}
          alt="background"
          className="w-full h-full object-contain object-center opacity-60"
        />
      </div>
      <div className="absolute left-0 h-screen w-screen overflow-x-hidden -z-10">
        <Marquee gradient={false} speed={80} className="absolute top-[15%]">
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden mx-3 bg-orange-400 bg-opacity-30 text-orange-400 px-4 rounded-full
          
          `}
            >
              Machine Learning
            </p>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          direction="right"
          speed={80}
          className="absolute top-[20%]"
        >
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden mx-3 bg-pink-400 bg-opacity-30 text-pink-400 px-4 rounded-full
          
          `}
            >
              Natural Language Processing
            </p>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={80} className="absolute top-[25%]">
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden mx-3 bg-blue-400 bg-opacity-30 text-blue-400 px-4 rounded-full
          
          `}
            >
              Promt Engineering
            </p>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          direction="right"
          speed={80}
          className="absolute top-[35%] "
        >
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden text-9xl opacity-10 font-extrabold px-4 py-0 my-0
          
          `}
            >
              MLHACKS
            </p>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={80} className="absolute top-[45%]">
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden mx-3 bg-yellow-400 bg-opacity-30 text-yellow-400 px-4 rounded-full
          
          `}
            >
              Computer Vision
            </p>
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          direction="right"
          speed={80}
          className=" top-[50%]"
        >
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden mx-3 bg-purple-400 bg-opacity-30 text-purple-400 px-4 rounded-full
          
          `}
            >
              Artificial Intelligence
            </p>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={80} className=" top-[55%]">
          {[...Array(10).keys()].map((i, n) => (
            <p
              className={` overflow-x-hidden mx-3 bg-green-400 bg-opacity-30 text-green-400 px-4 rounded-full
          
          `}
            >
              Transfer Learning
            </p>
          ))}
        </Marquee>
      </div>
      <Navbar />
      <Landing />
      <About />
      <Events />
      <EventTimeline />
      {/* <Sponser /> */}
    </Container>
  );
}

export default App;
