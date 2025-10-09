import Header from "./components/layouts/Header";
import { OrderProvider } from "./contexts/OrderProvider";
import IdlePage from "./pages/IdlePage";
import MenuPage from "./pages/MenuPage";
import { Routes, Route, useLocation } from "react-router-dom";
import OrderNumberPage from "./pages/OrderNumberPage";

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
          <Route path="/order_number" element={<OrderNumberPage />} />
        </Routes>
      </OrderProvider>
    </>
  );
};

export default App;
