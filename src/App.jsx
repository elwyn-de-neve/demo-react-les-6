import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductOverview from "./pages/ProductOverview.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { useState } from "react";
import Profile from "./pages/Profile.jsx";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <Navbar setAuth={setAuth} auth={auth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductOverview />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route
          path="/profile"
          element={auth ? <Profile /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
