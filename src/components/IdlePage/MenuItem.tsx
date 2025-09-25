import styled from "styled-components";
import MenuImg from "@/assets/images/MenuImg.png";
import { PriceText } from "@/components/Layout";

const MenuItem = () => {
  return (
    <>
      <Wrap>
        <MenuImgWrap></MenuImgWrap>
        <MenuName>Morning Boost Smoothie Bowl</MenuName>
        <TextWrap>
          <PriceText style={{ fontSize: "5vw" }}>€4.50</PriceText>
        </TextWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

const MenuImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  /* background-color: blue; */
  border-radius: 2%;
  background-image: url(${MenuImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MenuName = styled.div`
  font-size: 3vw;
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
