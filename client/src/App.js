import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Setting />
    </div>
  );
}

export default App;
