import styled from "styled-components";
import { ModalWrap } from "@/components/layouts/Layout";
import { KcalText, PriceText } from "@/components/ui/Ui";
import closeButtonImage from "@/assets/images/closeButton.png";

import { GradiantButton } from "@/components/ui/Ui";
import QuantityButton from "@/components/ui/QuantityButton";
import { useEffect, useState } from "react";
import { useContext } from "react";
import MenuContext from "@/contexts/MenuDetailContext";
import axios from "axios";

import type { MenuItemInterface } from "../index";
import { useOrder } from "@/hooks/useOrder";

interface detailProps {
  updatePopupState: (modalName: string | null) => void;
}

const MenuDetailModal: React.FC<detailProps> = ({ updatePopupState }) => {
  const [quantity, setQuantity] = useState(1);
  const [menuData, setMenuData] = useState<MenuItemInterface>({
    name: "",
    kcal: 0,
    price: "",
    filename: "",
    description: "",
  });
  const { addOrder } = useOrder();

  const UpdataQuantity = (quan: number) => {
    if (quan > 0 && quan < 100) setQuantity(quan);
  };

  const selecter = useContext(MenuContext);

  const orderObject: {
    menuName: string;
    price: number;
    product_id: number;
    quantity: number;
    kcal: number;
    description: string;
    filePath: string;
  } = {
    menuName: "",
    price: 0,
    product_id: 0,
    quantity: 0,
    kcal: 0,
    description: "",
    filePath: "",
  };

  const addOrderTest = () => {
    orderObject.product_id = selecter.MenuId ?? 0;
    orderObject.quantity = quantity;
    orderObject.menuName = menuData.name ?? "";
    orderObject.price = parseFloat(menuData.price ?? "0");
    orderObject.kcal = menuData.kcal ?? 0;
    orderObject.description = menuData.description ?? "";
    orderObject.filePath = menuData.filename ?? "";

    if (orderObject.menuName !== "") {
      addOrder(orderObject);
      updatePopupState("detailModal");
    }
  };

  useEffect(() => {
    const getMenuDetail = (menuId: number | undefined) => {
      if (!menuId) return;

      axios
        .get(`${import.meta.env.VITE_API_URL}/api/product-detail`, {
          params: {
            id: menuId,
          },
        })
        .then((res) => {
          if (res.data[0]) {
            setMenuData({
              name: res.data[0].name,
              kcal: res.data[0].kcal,
              filename: res.data[0].filename,
              price: res.data[0].price,
              description: res.data[0].description,
            });
          }
        });
    };

    getMenuDetail(selecter.MenuId);
  }, [selecter.MenuId]);

  return (
    <>
      <ModalWrap style={{ width: "80%", paddingBottom: "80px" }}>
        <ModalHeader>
          <span>{menuData.name}</span>
          <img
            onClick={() => {
              updatePopupState("detailModal");
            }}
            src={closeButtonImage}
            alt="closeButton"
          />
        </ModalHeader>
        <ModalMainWrapper>
          <img
            src={import.meta.env.VITE_API_URL + menuData.filename}
            alt="MenuImage"
          />
          <MenuDescription>{menuData.description}</MenuDescription>
          <MenuPriceInforWrapper>
            <div>
              <PriceText style={{ fontSize: "4.5vw" }}>
                €{menuData.price}
              </PriceText>
              <KcalText style={{ fontSize: "2.5vw" }}>
                {menuData.kcal} Kcal
              </KcalText>
            </div>
            <QuantityButton
              ItemQuantity={quantity}
              updateQuantity={UpdataQuantity}
            />
          </MenuPriceInforWrapper>
        </ModalMainWrapper>
        <GradiantButton
          $bottomMargin="-20%"
          $sideWidth={3}
          onClick={addOrderTest}
        >
          <div>Add to Order</div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            Total :{" "}
            {menuData && menuData.price ? (
              <PriceText style={{ display: "inline" }}>
                €{(parseFloat(menuData.price) * quantity).toFixed(2)}
              </PriceText>
            ) : (
              <PriceText style={{ display: "inline" }}>€0.00</PriceText>
            )}
          </div>
        </GradiantButton>
      </ModalWrap>
    </>
  );
};

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  & > span {
    font-size: 4vw;
    font-weight: bold;
    word-break: keep-all;
  }
  & > img {
    cursor: pointer;
    width: 4vw;
    aspect-ratio: 1/1;
  }
`;

const ModalMainWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  & > img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

const MenuDescription = styled.p`
  font-size: 2.2vw;
  font-weight: 600;
  line-height: 2.7vw;
  margin-bottom: 20px;
`;

const MenuPriceInforWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  & > div:nth-child(1) {
    display: flex;
    align-items: end;
    gap: 10px;
  }
`;
export default MenuDetailModal;
