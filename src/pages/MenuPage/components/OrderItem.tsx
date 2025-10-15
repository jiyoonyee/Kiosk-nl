import DeleteItemButton from "@/components/ui/DeleteItemButton";
import QuantityButton from "@/components/ui/QuantityButton";
import { PriceText } from "@/components/ui/Ui";
import { useOrder } from "@/hooks/useOrder";
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

  const UpdateQuantity = (quan: number) => {
    if (quan > 0 && quan < 100) {
      updateOrder(product_id, quan);
    }
  };
  return (
    <>
      <Wrap>
        <DeleteItemButton boxSize="5vh" itemId={product_id} />
        <MenuNameContainer>{menuName}</MenuNameContainer>
        <QuantityWrap>
          <PriceText style={{ fontSize: "2.2vw" }}>
            €{(price * quantity).toFixed(2)}
          </PriceText>
          <QuantityButton
            boxSize={4}
            ItemQuantity={quantity}
            updateQuantity={UpdateQuantity}
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
  gap: 10px;
`;

const MenuNameContainer = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

const QuantityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default OrderItem;
