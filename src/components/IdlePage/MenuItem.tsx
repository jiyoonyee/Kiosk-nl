import styled from "styled-components";
import MenuImg from "@/assets/images/MenuImg.png";
import { PriceText } from "@/components/Layout";

const MenuItem = () => {
  return (
    <>
      <Wrap>
        <img src={MenuImg} alt="" />
        <MenuName>Morning Boost Smoothie Bowl</MenuName>
        <TextWrap>
          <PriceText style={{ fontSize: "6rem" }}>€4.50</PriceText>
        </TextWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  & > img {
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const MenuName = styled.div`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  color: #004f1b;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default MenuItem;
