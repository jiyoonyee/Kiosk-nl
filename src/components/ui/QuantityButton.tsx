import styled from "styled-components";
import MImage from "@/assets/images/MinusIcon.png";
import PImage from "@/assets/images/PlusIcon.png";

interface countProps {
  ItemQuantity: number;
  updateQuantity: (n: number) => void;
}

const QuantityButton: React.FC<countProps> = ({
  ItemQuantity,
  updateQuantity,
}) => {
  return (
    <>
      <QuantityWrap>
        <CountButtonContainer
          onClick={() => {
            updateQuantity(ItemQuantity - 1);
          }}
        >
          <img src={MImage} alt="빼기" />
        </CountButtonContainer>
        <Counter>{ItemQuantity}</Counter>
        <CountButtonContainer
          onClick={() => {
            updateQuantity(ItemQuantity + 1);
          }}
        >
          <img src={PImage} alt="더하기" />
        </CountButtonContainer>
      </QuantityWrap>
    </>
  );
};

const QuantityWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Counter = styled.div`
  font-size: 4vw;
  font-weight: bold;
`;

const CountButtonContainer = styled.div`
  /* width: 50px; */
  padding: 10px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8cd003;
  border-radius: 10px;
`;

export default QuantityButton;
