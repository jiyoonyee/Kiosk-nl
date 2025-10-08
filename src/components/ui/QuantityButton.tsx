import styled from "styled-components";
import MImage from "@/assets/images/MinusIcon.png";
import PImage from "@/assets/images/PlusIcon.png";

interface countProps {
  ItemQuantity: number;
  boxSize?: number;
  textSize?: number;
  updateQuantity: (n: number) => void;
}

const QuantityButton: React.FC<countProps> = ({
  ItemQuantity,
  updateQuantity,
  textSize,
  boxSize,
}) => {
  return (
    <>
      <QuantityWrap>
        <CountButtonContainer
          size={boxSize ?? null}
          onClick={() => {
            updateQuantity(ItemQuantity - 1);
          }}
        >
          <img src={MImage} alt="빼기" />
        </CountButtonContainer>
        <Counter size={textSize ?? null}>{ItemQuantity}</Counter>
        <CountButtonContainer
          size={boxSize ?? null}
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

interface sizeProps {
  size: number | null;
}

const Counter = styled.div<sizeProps>`
  font-size: ${(props) => (props.size ? props.size : 4)}vw;
  font-weight: bold;
`;

const CountButtonContainer = styled.div<sizeProps>`
  width: ${(props) => (props.size ? props.size : 5)}vw;

  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8cd003;
  border-radius: 10px;
  & > img {
    width: 60%;
    /* height: 100%; */
  }
`;

export default QuantityButton;
