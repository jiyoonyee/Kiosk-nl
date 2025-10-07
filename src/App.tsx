import Header from "./components/layouts/Header";
import { OrderProvider } from "./contexts/OrderProvider";
import IdlePage from "./pages/IdlePage";
import MenuPage from "./pages/MenuPage";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const locationMainFlag = location.pathname === "/";

  return (
    <>
      <OrderProvider>
        {!locationMainFlag && <Header />}
        <Routes>
          <Route path="/" element={<IdlePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </OrderProvider>
    </>
  );
};

export default App;
