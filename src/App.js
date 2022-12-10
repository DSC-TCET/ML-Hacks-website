import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";

function App() {
  return (
    <Container maxWidth='lg'>
      <Navbar />
      <Landing />
      <About />
    </Container>
  );
}

export default App;
