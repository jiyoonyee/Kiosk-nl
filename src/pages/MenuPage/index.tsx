import styled from "styled-components";
import { PageWrapper } from "@/components/layouts/Layout";
import AsideSelector from "./components/AsideSelector";

//image
import All_img from "@/assets/images/category-all.png";
import Breakfast_Img from "@/assets/images/category-breakfast.png";
import Lunch_Img from "@/assets/images/category-lunch.png";
import Sides_Img from "@/assets/images/category-side.png";
import Snacks_Img from "@/assets/images/category-snacks.png";
import Dips_Img from "@/assets/images/category-dip.png";
import Drinks_Img from "@/assets/images/category-drink.png";

const MenuPage = () => {
  return (
    <>
      <PageWrapper style={{ paddingTop: "10vh" }}>
        <MainWrapper>
          <AsideCategory>
            <AsideSelector CategoryName="ALL" ImagePath={All_img} />
            <AsideSelector CategoryName="Breakfast" ImagePath={Breakfast_Img} />
            <AsideSelector
              CategoryName="Lunch & Dinner"
              ImagePath={Lunch_Img}
            />
            <AsideSelector CategoryName="Sides" ImagePath={Sides_Img} />
            <AsideSelector CategoryName="Snacks" ImagePath={Snacks_Img} />
            <AsideSelector CategoryName="Dips" ImagePath={Dips_Img} />
            <AsideSelector CategoryName="Drinks" ImagePath={Drinks_Img} />
          </AsideCategory>
          <MenuWrapper></MenuWrapper>
        </MainWrapper>
      </PageWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #009633;
  @media (max-height: 1000px) {
    & {
      border-bottom: 1px solid #009633;
    }
  }
`;

const AsideCategory = styled.aside`
  width: 15%;
  height: 100%;
  border-right: 2px solid #009633;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (max-height: 1000px) {
    & {
      border-right: 1px solid #009633;
    }
  }
`;

const MenuWrapper = styled.div`
  width: 85%;
  height: 100%;
  background-color: beige;
`;

export default MenuPage;
