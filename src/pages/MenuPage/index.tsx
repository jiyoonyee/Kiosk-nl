import styled from "styled-components";
import { PageWrapper } from "@/components/layouts/Layout";
import AsdieWrapper from "./components/AsideWrapper";
import CategoryMenuWrapper from "./components/CategoryMenuWrapper";
import shoppingcartImage from "@/assets/images/ShoppingCart.png";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Popup from "./components/Popup";
import { GradiantButton, KcalText, PriceText } from "@/components/ui/Ui";
import MenuContext from "@/contexts/MenuDetailContext";
import { useOrder } from "@/hooks/useOrder";
import OrderItem from "./components/OrderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiperStyle.css";

// import required modules

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

interface popup {
  state: boolean;
  modalState: string | null;
}

const MenuPage = () => {
  const [selected, setSelected] = useState("ALL");
  const [menuData, setMenuData] = useState<CategoryItem[] | null>(null);
  const [selectedMenuId, setSelectedMenuId] = useState<number>(0);
  const [popupState, setPopupState] = useState<popup>({
    state: false,
    modalState: null,
  });
  const [drinkData, setDrinkData] = useState<MenuItemInterface[] | null>(null);

  const { orders, total } = useOrder();

  const orderListRef = useRef<HTMLDivElement>(null);

  const updatePopupState = (modalName: string | null) => {
    setPopupState({
      ...popupState,
      state: !popupState.state,
      modalState: modalName ?? null,
    });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/products-all/`)
      .then((res) => {
        console.log(res.data);
        setMenuData(res.data);
      });
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/products-category`, {
        params: { category: "Drinks" },
      })
      .then((res) => {
        setDrinkData(res.data);
      });
  }, []);

  useEffect(() => {
    if (orderListRef.current) {
      orderListRef.current.scrollTop = orderListRef.current.scrollHeight;
    }
  }, [orders]);

  const openPayment = () => {
    if (total === 0) {
      alert("you not have order item");
      return;
    }
    updatePopupState("orderListModal");
  };

  return (
    <>
      <PageWrapper style={{ paddingTop: "10vh" }}>
        <MenuContext.Provider
          value={{
            $onChange: setSelectedMenuId,
            MenuId: selectedMenuId,
          }}
        >
          {popupState.state && (
            <Popup
              modalName={popupState.modalState}
              updatePopupState={updatePopupState}
            />
          )}

          <MainWrapper>
            <AsdieWrapper value={selected} $onChange={setSelected} />

            <MenuWrapper>
              {menuData &&
                menuData.map((item, i) => (
                  <CategoryMenuWrapper
                    selected={selected}
                    updatePopupState={updatePopupState}
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
                {orders.length == 0 ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "5vw",
                      fontWeight: "bold",
                    }}
                  >
                    please select menu
                  </div>
                ) : (
                  orders.map((data, i) => (
                    <OrderItem
                      menuName={data.menuName ?? ""}
                      price={data.price ?? 0}
                      product_id={data.product_id ?? 0}
                      quantity={data.quantity}
                      key={i}
                    />
                  ))
                )}
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
                  <SuggetionDrinkItem>
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={30}
                      effect={"fade"}
                      navigation={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[EffectFade, Autoplay]}
                      className="mySwiper drinkSwiper"
                    >
                      {drinkData &&
                        drinkData.map((item, i) => (
                          <SwiperSlide
                            key={i}
                            className="drinkSwiper"
                            onClick={() => {
                              if (item.product_id) {
                                setSelectedMenuId(item.product_id);
                                updatePopupState("detailModal");
                              }
                            }}
                          >
                            <div
                              className="drinkImageContainer"
                              style={{
                                backgroundImage: `url(${
                                  import.meta.env.VITE_API_URL + item.filename
                                })`,
                              }}
                            ></div>
                            <div className="drinkInforWrap">
                              <span className="drinkName">{item.name}</span>
                              <div className="drinkPriceInforWrap">
                                <KcalText style={{ fontSize: "2vw" }}>
                                  {item.kcal}kcal
                                </KcalText>
                                <PriceText style={{ fontSize: "2.5vw" }}>
                                  €{item.price}
                                </PriceText>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </SuggetionDrinkItem>
                </SuggestionDrinkWrapper>
                <PaymentWrapper>
                  <GradiantButton
                    onClick={openPayment}
                    $sideWidth={7}
                    style={{
                      filter: total === 0 ? "grayscale(50%)" : "none",
                      bottom: "0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "2vw",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      Proceed to Payment
                    </span>
                    <PriceText style={{ fontSize: "2.5vw" }}>
                      €{total.toFixed(2)}
                    </PriceText>
                  </GradiantButton>
                </PaymentWrapper>
              </div>
            </MyOrderCheckWrapper>
          </MyOrderWrapper>
        </MenuContext.Provider>
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
  height: 100%;
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
  overflow: hidden;
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
