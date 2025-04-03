import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Creating from "./pages/Creating";
import Share from "./pages/Share";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const gameId = localStorage.getItem("gameId");
    if (gameId && location.pathname !== `/user/share/${gameId}`) {
      console.log("1st If");
      navigate(`/user/share/${gameId}`, { replace: true });
    }

    if (!gameId && location.pathname.startsWith("/user/share")) {
      console.log("2nd If");
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/name" element={<Name />} />
        <Route path="/user/creating" element={<Creating />} />
        <Route path="/user/share/:gameId" element={<Share />} />
        <Route
          path="/find/:id"
          element={<div className="text-3xl">Home</div>}
        />
        <Route
          path="/player/name"
          element={<div className="text-3xl">Home</div>}
        />
        <Route
          path="/player/playing"
          element={<div className="text-3xl">Home</div>}
        />
        <Route
          path="/player/completed"
          element={<div className="text-3xl">Home</div>}
        />
      </Routes>
    </>
  );
};

export default App;
