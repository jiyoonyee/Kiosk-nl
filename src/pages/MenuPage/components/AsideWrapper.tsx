import styled from "styled-components";

//image
import All_img from "@/assets/images/category-all.png";
import Breakfast_Img from "@/assets/images/category-breakfast.png";
import Lunch_Img from "@/assets/images/category-lunch.png";
import Sides_Img from "@/assets/images/category-side.png";
import Snacks_Img from "@/assets/images/category-snacks.png";
import Dips_Img from "@/assets/images/category-dip.png";
import Drinks_Img from "@/assets/images/category-drink.png";

import AsideItem from "./AsideItem";

import AsideContext from "@/contexts/AsideContext";

interface CategoryProps {
  value: string;
  $onChange: React.Dispatch<React.SetStateAction<string>>;
}

const AsideWrapper: React.FC<CategoryProps> = ({ value, ...rest }) => {
  const Categorys = [
    { name: "ALL", path: All_img },
    { name: "BreakFast", path: Breakfast_Img },
    { name: "Lunch & Dinner", path: Lunch_Img },
    { name: "Sides", path: Sides_Img },
    { name: "Snacks", path: Snacks_Img },
    { name: "Dips", path: Dips_Img },
    { name: "Drinks", path: Drinks_Img },
  ];
  return (
    <>
      <AsideCategory>
        <AsideContext.Provider value={rest}>
          {Categorys.map((c, i) => (
            <AsideItem
              key={i}
              CategoryName={c.name}
              ImagePath={c.path}
              Selected={value}
            />
          ))}
        </AsideContext.Provider>
      </AsideCategory>
    </>
  );
};

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

export default AsideWrapper;
