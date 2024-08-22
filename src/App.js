import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import Login from "./components/register/Login";
import Register from "./components/register/Register";
import Pnf from "./components/Pnf";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={4000} position={"top-right"} />
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
