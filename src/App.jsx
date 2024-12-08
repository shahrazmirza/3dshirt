import Canvas from "./canvas";
import Customiser from "./pages/Customiser";
import Home from "./pages/Home";

function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
      <Home />
      <Canvas />
      <Customiser />
    </main>
  );
}

export default App;
