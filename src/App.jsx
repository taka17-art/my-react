import { Header } from "./components/Header/main";
import { Home } from "./components/Home/main";
import { Routes, Route } from "react-router-dom";
import { Detail as ArticleDetail } from "./components/Detail/main";


export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

