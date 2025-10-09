import QuantityButton from "@/components/ui/QuantityButton";
import { PriceText } from "@/components/ui/Ui";
import { useOrder } from "@/hooks/useOrder";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface OrderItemProps {
  product_id: number;
  quantity: number;
  menuName: string;
  price: number;
}

const OrderItem: React.FC<OrderItemProps> = ({
  product_id,
  menuName,
  price,
  quantity,
}) => {
  const { updateOrder } = useOrder();
  const [itemQuantity, setItemQuantity] = useState(quantity);

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  const UpdataQuantity = (quan: number) => {
    if (quan > 0 && quan < 100) {
      setItemQuantity(quan);
      updateOrder(product_id, quan);
    }
  };
  return (
    <>
      <Wrap>
        <MenuNameContainer>{menuName}</MenuNameContainer>
        <QuantityWrap>
          <PriceText style={{ fontSize: "2.2vw" }}>
            €{(price * itemQuantity).toFixed(2)}
          </PriceText>
          <QuantityButton
            boxSize={4}
            ItemQuantity={itemQuantity}
            updateQuantity={UpdataQuantity}
          />
        </QuantityWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 18%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

const MenuNameContainer = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const QuantityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default OrderItem;
