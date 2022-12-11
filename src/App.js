import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import EventCard from "./pages/EventCard";
import Landing from "./pages/Landing";
import Sponser from "./pages/Sponser";

function App() {
  return (
    <Container maxWidth='lg'>
      <Navbar />
      <Landing />
      <About />
      <EventCard />
      <Sponser />
    </Container>
  );
}

export default App;
