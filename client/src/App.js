import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Single /> */}
      <Write />
    </div>
  );
}

export default App;
