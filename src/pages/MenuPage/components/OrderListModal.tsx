import { ModalWrap } from "@/components/layouts/Layout";
import { useOrder } from "@/hooks/useOrder";
import backButton from "@/assets/images/backButton.png";
import styled from "styled-components";
import CheckOrderItem from "./CheckOrderItem";
import { GradiantButton, PriceText } from "@/components/ui/Ui";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../loadingStyle.css";

interface OrderListProps {
  updatePopupState: (modalName: string | null) => void;
}

const OrderListModal: React.FC<OrderListProps> = ({ updatePopupState }) => {
  const { orders, total, updateOrderNumber } = useOrder();
  const navigate = useNavigate();
  const [sendState, setSendState] = useState(false);
  const [loadingText, setLoadingText] = useState(
    "Sending Processing your order"
  );

  const sendOrderData = () => {
    if (sendState) return;
    const newItem = orders.map((el) => ({
      product_id: el.product_id,
      quantity: el.quantity,
    }));

    setSendState((prev) => !prev);

    let second: number = 0;
    const loadingTextTimer = setInterval(() => {
      second++;
      setLoadingText((prev) => prev + ".");
      if (second === 4) {
        second = 0;
        setLoadingText("Sending Processing your order");
      }
    }, 500);

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/orders/`, {
        items: newItem,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSendState((prev) => !prev);
          updateOrderNumber(res.data.pickup_number);
          navigate("/order_number");
          clearInterval(loadingTextTimer);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {sendState && (
        <LoadingLayout>
          <div className="loader"></div>
          <div
            style={{
              fontSize: "5vw",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            {loadingText}
          </div>
        </LoadingLayout>
      )}
      <ModalWrap style={{ width: "90%", height: "70%" }}>
        <PopupHeader>
          <img
            src={backButton}
            alt="뒤로가기"
            onClick={() => {
              updatePopupState("orderListModal");
            }}
          />
          <div style={{ fontSize: "5vw", fontWeight: "bold" }}>
            Check Your Order
          </div>
        </PopupHeader>
        <ItemListWrap>
          {orders.map((item, i) => (
            <CheckOrderItem
              menuName={item.menuName}
              description={item.description}
              filePath={item.filePath}
              kcal={item.kcal}
              price={item.price}
              product_id={item.product_id}
              quantity={item.quantity}
              key={i}
            />
          ))}
        </ItemListWrap>
        <GradiantButton
          onClick={sendOrderData}
          $bottomMargin="-30%"
          $sideWidth={2}
        >
          <div>Checkout</div>
          <div style={{ textAlign: "center" }}>
            Total :{" "}
            {
              <PriceText style={{ display: "inline" }}>
                €{total.toFixed(2)}
              </PriceText>
            }
          </div>
        </GradiantButton>
      </ModalWrap>
    </>
  );
};

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const ItemListWrap = styled.div`
  width: 100%;
  height: 85%;
  /* background-color: aliceblue; */
  margin-bottom: 50px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const LoadingLayout = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 0px 100px;
`;

export default OrderListModal;
