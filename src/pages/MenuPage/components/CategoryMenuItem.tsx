import styled from "styled-components";

import { KcalText, PriceText } from "@/components/layouts/Layout";
import { type MenuItemInterface } from "../index";
import { useContext } from "react";

import MenuContext from "@/contexts/MenuContext";

interface CategoryMenuItemProps extends MenuItemInterface {
  updatePopupState: () => void;
}

const CategoryMenuItem: React.FC<CategoryMenuItemProps> = ({
  filename,
  kcal,
  name,
  price,
  product_id,
  updatePopupState,
}) => {
  const selecter = useContext(MenuContext);

  const ItemClickEvent = () => {
    if (product_id) selecter?.$onChange?.(product_id);
    updatePopupState();
  };

  return (
    <>
      <Wrap onClick={ItemClickEvent}>
        <img
          style={{ borderBottom: "1px solid black" }}
          src={import.meta.env.VITE_API_URL + filename}
          alt="sampleImage"
        />
        <MenuInfor>
          <MenuNameText>{name}</MenuNameText>
          <MenuDetailInforWrap>
            <KcalText style={{ fontSize: "1.8vw" }}>{kcal}Kcal</KcalText>
            <PriceText style={{ fontSize: "2.4vw" }}>€{price}</PriceText>
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
  height: 40px;
  font-size: 1.8vw;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;
  padding: 5px 0px;
`;
const MenuDetailInforWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0px 5px;
  padding-bottom: 5px;
`;
export default CategoryMenuItem;
