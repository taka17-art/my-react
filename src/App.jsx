import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/main";
import { Home } from "./components/Home/main";
import { Detail } from "./components/Detail/main";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

