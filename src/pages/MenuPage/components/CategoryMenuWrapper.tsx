import styled from "styled-components";
import CategoryMenuItem from "./CategoryMenuItem";

const CategoryMenuWrapper = () => {
  return (
    <>
      <Wrap>
        <AllCategoryLine>
          <div></div>
          <div></div>
          <div>Breakfast</div>
        </AllCategoryLine>
        <MenuItemWrap>
          <CategoryMenuItem />
          <CategoryMenuItem />
          <CategoryMenuItem />
          <CategoryMenuItem />
        </MenuItemWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  /* background-color: #dcdcdc66; // test */
  padding: 10px 30px;
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
