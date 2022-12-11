import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import background from "./assets/background.gif";
import Events from "./pages/Events";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <Container maxWidth='lg'>
      <div
        id='background-gif'
        className='w-screen h-screen fixed top-0 left-0'
        style={{ zIndex: "-999" }}
      >
        <img
          src={background}
          alt='background'
          className='w-full h-full object-contain object-center opacity-60'
        />
      </div>
      <Navbar />
      <Landing />
      <About />
      <Events />
      <Timeline />
    </Container>
  );
}

export default App;
