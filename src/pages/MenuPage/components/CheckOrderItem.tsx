import DeleteItemButton from "@/components/ui/DeleteItemButton";
import QuantityButton from "@/components/ui/QuantityButton";
import { KcalText, PriceText } from "@/components/ui/Ui";
import { useOrder } from "@/hooks/useOrder";
import { useState } from "react";
import styled from "styled-components";

export interface ItemProps {
  menuName: string;
  price: number;
  product_id: number;
  quantity: number;
  kcal: number;
  description: string;
  filePath: string;
}

const CheckOrderItem: React.FC<ItemProps> = ({
  description,
  filePath,
  kcal,
  menuName,
  price,
  product_id,
  quantity,
}) => {
  const [itmeQuantity, setItemQuantity] = useState(quantity);
  const { updateOrder } = useOrder();

  const UpdataQuantity = (quan: number) => {
    if (quan > 0 && quan < 100) {
      setItemQuantity(quan);
      updateOrder(product_id, quan);
    }
  };
  return (
    <>
      <Wrap>
        <ImageContainer
          alt="menuImage"
          src={import.meta.env.VITE_API_URL + filePath}
        />
        <MenuInforWrapper>
          <div style={{ fontSize: "4vw", fontWeight: "bold" }}>{menuName}</div>
          <MenuDetailWrapper>
            <div>{description}</div>

            <div>
              <KcalText style={{ fontSize: "2.5vw" }}>
                {kcal * itmeQuantity}kcal
              </KcalText>
              <PriceText style={{ fontSize: "5vw" }}>
                €{(price * itmeQuantity).toFixed(2)}
              </PriceText>
              <QuantityButton
                updateQuantity={UpdataQuantity}
                boxSize={5}
                ItemQuantity={itmeQuantity}
              />
            </div>
            <DeleteContainer>
              <DeleteItemButton itemId={product_id} />
            </DeleteContainer>
          </MenuDetailWrapper>
        </MenuInforWrapper>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 10px;
  border: 2px solid black;
  overflow: hidden;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-right: 2px solid black;
`;

const MenuInforWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  gap: 10px;
`;

const MenuDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100%;
  position: relative;

  & > div:nth-child(1) {
    font-size: 2vw;
    line-height: 2.1vw;
    font-weight: 500;
    height: 100%;
  }
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    flex-direction: column;
    gap: 5px;
    height: 100%;
  }
`;

const DeleteContainer = styled.div`
  position: absolute;
  display: inline;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 15%;
`;
export default CheckOrderItem;
