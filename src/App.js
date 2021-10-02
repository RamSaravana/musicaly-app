import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <Player />
      </section>
    </div>
  );
}

export default App;
