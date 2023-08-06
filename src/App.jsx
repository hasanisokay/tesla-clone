import Cars from "./components/Cars";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Cars></Cars>
    </div>
  );
};

export default App;