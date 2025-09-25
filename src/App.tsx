import Header from "./components/layouts/Header";
import IdlePage from "./pages/IdlePage";
import MenuPage from "./pages/MenuPage";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const locationMainFlag = location.pathname === "/";

  return (
    <>
      {!locationMainFlag && <Header />}
      <Routes>
        <Route path="/" element={<IdlePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  );
};

export default App;
