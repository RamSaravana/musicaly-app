import "./App.css";
import Navbar from "./components/TopBar/Navbar";
import MainBodyContainer from "./components/mainBody/MainBodyContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainBodyContainer />
      <Footer />
    </div>
  );
}

export default App;
