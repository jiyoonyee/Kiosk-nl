import styled from "styled-components";
import MenuImage from "@/assets/images/MenuImg.png";
import { KcalText, PriceText } from "@/components/layouts/Layout";

interface MenuInfoProps {
  MenuName?: string;
  MenuKcal?: number;
  MenuPrice?: number;
}

const CategoryMenuItem: React.FC<MenuInfoProps> = () => {
  return (
    <>
      <Wrap>
        <img
          style={{ borderBottom: "1px solid black" }}
          src={MenuImage}
          alt="sampleImage"
        />
        <MenuInfor>
          <MenuNameText>Morning Boost Smoothie Bowl</MenuNameText>
          <MenuDetailInforWrap>
            <KcalText style={{ fontSize: "1.8vw" }}>300Kcal</KcalText>
            <PriceText style={{ fontSize: "2.4vw" }}>€4.50</PriceText>
          </MenuDetailInforWrap>
        </MenuInfor>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  background-color: white;
  box-shadow: 0px 0px 5px 5px #d9d9d9;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  /* height: 10vh; */
  overflow: hidden;
  & > img {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;

const MenuInfor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 5px 5px;
`;
const MenuNameText = styled.div`
  width: 100%;
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  word-break: keep-all;
  padding: 5px 0px;
`;
const MenuDetailInforWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
export default CategoryMenuItem;
