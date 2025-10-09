import { ModalWrap } from "@/components/layouts/Layout";
import { useOrder } from "@/hooks/useOrder";
import backButton from "@/assets/images/backButton.png";
import styled from "styled-components";
import CheckOrderItem from "./CheckOrderItem";
import { GradiantButton, PriceText } from "@/components/ui/Ui";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

interface OrderListProps {
  updatePopupState: (modalName: string | null) => void;
}

const OrderListModal: React.FC<OrderListProps> = ({ updatePopupState }) => {
  const { orders, total, updateOrderNumber } = useOrder();
  const navigate = useNavigate();
  const [sendState, setSendState] = useState<boolean>(false);

  const sendOrderData = () => {
    if (sendState) return;
    const newItem = orders.map((el) => ({
      product_id: el.product_id,
      quantity: el.quantity,
    }));

    setSendState((prev) => !prev);

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/orders/`, {
        items: newItem,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSendState((prev) => !prev);
          updateOrderNumber(res.data.order_id);
          navigate("/order_number");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <ModalWrap style={{ width: "90%", height: "70%" }}>
        {sendState && (
          <div style={{ fontSize: "4vw", position: "absolute" }}>보내는중</div>
        )}
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

export default OrderListModal;
