import styled from "styled-components";
import { PageWrapper } from "@/components/layouts/Layout";
import AsdieWrapper from "./components/AsideWrapper";
import CategoryMenuWrapper from "./components/CategoryMenuWrapper";
import shoppingcartImage from "@/assets/images/ShoppingCart.png";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Popup from "./components/Popup";
import { GradiantButton } from "@/components/ui/Ui";
import MenuContext from "@/contexts/MenuContext";
import { useOrder } from "@/hooks/useOrder";
import OrderItem from "./components/OrderItem";

export interface MenuItemInterface {
  product_id?: number;
  available?: boolean;
  kcal?: number;
  price?: string;
  name?: string;
  filename?: string;
  description?: string;
}

interface CategoryItem {
  name: string;
  data: MenuItemInterface[];
}

const MenuPage = () => {
  const [selected, setSelected] = useState("ALL");
  const [menuData, setMenuData] = useState<CategoryItem[] | null>(null);
  const [selectedMenuId, setSelectedMenuId] = useState<number>(0);
  const [popupState, setPopupState] = useState(false);

  const { orders } = useOrder();
  const orderListRef = useRef<HTMLDivElement>(null);

  const updatePopupState = () => {
    setPopupState((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/products-all/`)
      .then((res) => {
        // console.log(res);
        setMenuData(res.data);
      });
    if (orderListRef.current) {
      orderListRef.current.scrollTop = orderListRef.current.scrollHeight;
    }
  }, [orders]);

  return (
    <>
      <PageWrapper style={{ paddingTop: "10vh" }}>
        <MenuContext.Provider
          value={{
            MenuId: selectedMenuId,
          }}
        >
          {popupState && <Popup updatePopupState={updatePopupState} />}
        </MenuContext.Provider>

        <MainWrapper>
          <AsdieWrapper value={selected} $onChange={setSelected} />
          <MenuWrapper>
            {menuData &&
              menuData.map((item, i) => (
                <CategoryMenuWrapper
                  updatePopupState={updatePopupState}
                  $onChange={setSelectedMenuId}
                  name={item.name}
                  data={item.data}
                  key={i}
                />
              ))}
          </MenuWrapper>
        </MainWrapper>
        <MyOrderWrapper>
          <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
            <img
              style={{ width: "4vw", aspectRatio: "1/1" }}
              src={shoppingcartImage}
              alt="쇼핑카트"
            />
            <span style={{ fontSize: "3vw", fontWeight: "bold" }}>
              My Order
            </span>
          </div>
          <MyOrderCheckWrapper>
            <MyOrderMenuList ref={orderListRef}>
              {orders.map((data, i) => (
                <OrderItem
                  menuName={data.menuName ?? ""}
                  price={data.price ?? 0}
                  product_id={data.product_id ?? 0}
                  quantity={data.quantity}
                  key={i}
                />
              ))}
            </MyOrderMenuList>
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <SuggestionDrinkWrapper>
                <span>Would you like to add a drink?</span>
                <SuggetionDrinkItem></SuggetionDrinkItem>
              </SuggestionDrinkWrapper>
              <PaymentWrapper>
                <GradiantButton
                  onClick={() => {
                    console.log(orders);
                  }}
                />
              </PaymentWrapper>
            </div>
          </MyOrderCheckWrapper>
        </MyOrderWrapper>
      </PageWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: end;
  border-bottom: 2px solid #009633;

  @media (max-height: 1000px) {
    & {
      border-bottom: 1px solid #009633;
    }
  }
`;

const MenuWrapper = styled.div`
  width: 85%;
  height: 98%;
  padding-bottom: 10px;
  overflow-y: scroll;
  /* background-color: beige; */
  &::-webkit-scrollbar {
    display: block;
    position: relative;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #009633;
    border-radius: 100000px;
    border: 5px solid #ffffff;
    /* border-right: px solid black; */
  }
  &::-webkit-scrollbar-track {
    /* background-color: #d9d9d9; */
    border-radius: 100000px;
  }
`;

const MyOrderWrapper = styled.div`
  width: 100%;
  height: 30%;
  padding: 20px 30px 0px;
  /* background-color: #eaeaea; */

  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

const MyOrderCheckWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  /* background-color: aliceblue; */
`;

const MyOrderMenuList = styled.div`
  width: 70%;
  max-height: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border: 2px solid black;
  border-bottom: none;
  overflow-y: auto;
  overflow-x: hidden;
  /* transform: translateY(-100px); */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SuggestionDrinkWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  & > span {
    font-size: 1.8vw;
    font-weight: bold;
  }
`;

const SuggetionDrinkItem = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;

const PaymentWrapper = styled.div`
  width: 100%;
  height: 40%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border: 2px solid black;
  border-bottom: none;
  position: relative;
`;

export default MenuPage;
