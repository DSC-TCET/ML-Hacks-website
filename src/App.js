import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <Container maxWidth='lg'>
      <Navbar />
      <Landing />
    </Container>
  );
}

export default App;
