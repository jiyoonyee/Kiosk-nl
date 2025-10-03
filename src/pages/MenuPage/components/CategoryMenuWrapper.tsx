import styled from "styled-components";
import CategoryMenuItem from "./CategoryMenuItem";
import { type MenuItemInterface } from "../index";
import MenuContext from "@/contexts/MenuContext";

interface CategroyWrapProps {
  name: string;
  data: MenuItemInterface[];
  $onChange: React.Dispatch<React.SetStateAction<number | null>>;
}

const CategoryMenuWrapper: React.FC<CategroyWrapProps> = ({
  name,
  data,
  ...rest
}) => {
  // console.log(rest);
  return (
    <>
      <Wrap>
        <AllCategoryLine>
          <div></div>
          <div></div>
          <div>{name}</div>
        </AllCategoryLine>
        <MenuItemWrap>
          <MenuContext.Provider value={rest}>
            {data.map((item, i) => (
              <CategoryMenuItem
                available={item.available}
                filename={item.filename}
                name={item.name}
                kcal={item.kcal}
                price={item.price}
                product_id={item.product_id}
                key={i}
              />
            ))}
          </MenuContext.Provider>
        </MenuItemWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  /* background-color: #dcdcdc66; // test */
  padding: 10px 30px;
  padding-right: 20px;
  margin-bottom: 20px;
`;
const AllCategoryLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  & > div:nth-child(1) {
    width: 4vw;
    aspect-ratio: 1 /1;
    border: 2px solid black;
    border-radius: 10000px;
  }
  & > div:nth-child(2) {
    width: 100%;
    height: 2px;
    background-color: black;
  }
  & > div:nth-child(3) {
    font-size: 3vw;
    font-weight: bold;
  }
`;
const MenuItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default CategoryMenuWrapper;
