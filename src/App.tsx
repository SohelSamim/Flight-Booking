import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Booking from "./pages/Booking";
import { useEffect, useState } from "react";
function App() {
  const [active, setActive] = useState(false);
  // i am using react router dom for routing
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className={`App ${active && "black"}`}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home active={active} setActive={setActive} />}
          />
          <Route
            path="/search"
            element={<Search active={active} setActive={setActive} />}
          />
          <Route
            path="/Booking"
            element={<Booking active={active} setActive={setActive} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
