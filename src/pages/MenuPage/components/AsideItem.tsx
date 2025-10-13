import AsideContext from "@/contexts/AsideContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

interface CategoryProps {
  CategoryName: string;
  ImagePath: string;
  Selected: string;
  MenuValue: string;
}

interface SelectProps {
  $active: boolean;
}

const AsideItem: React.FC<CategoryProps> = ({
  CategoryName,
  ImagePath,
  Selected,
  MenuValue,
}) => {
  const group = useContext(AsideContext);
  const [selectState, setSelectState] = useState(false);

  // props값 받을때마다 랜더링해서 코드 실행
  useEffect(() => {
    if (MenuValue === Selected) {
      setSelectState(true);
    } else {
      setSelectState(false);
    }
  }, [Selected]);

  return (
    <>
      <input
        style={{ display: "none" }}
        type="radio"
        name="Category"
        value={MenuValue}
        id={CategoryName}
        onChange={(e) => group.$onChange && group.$onChange(e.target.value)}
      />
      <Wrap htmlFor={CategoryName}>
        <CategoryImageContainer $active={selectState}>
          <img src={ImagePath} alt="category image" />
        </CategoryImageContainer>

        <span>{CategoryName}</span>
      </Wrap>
    </>
  );
};

const Wrap = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  & > span {
    max-height: 20px;
    text-align: center;
    font-size: 2.5vw;
    font-weight: bold;
  }
  @media (max-height: 1500px) {
    & > span {
      font-size: 1.9vw;
    }
  }
  @media (min-width: 1100px) {
    & > span {
      font-size: 1.9vw;
      color: green;
    }
  }
`;

const CategoryImageContainer = styled.div<SelectProps>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;

  &::before {
    position: absolute;
    content: "";
    width: 120%;
    height: 100%;
    background-color: #86c800;
    z-index: 10;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: translateX(${(props) => (props.$active ? "0%" : "-80%")});
    transition: all 0.5s ease-in-out;
  }
  & > img {
    width: 50%;
    position: relative;
    z-index: 90;
    transform: scale(${(props) => (props.$active ? "1.2" : "1")});
    transition: all 0.5s ease-in-out;
  }

  @media (max-height: 1500px) {
    & {
      padding: 10px 0px;
    }
  }
`;

export default AsideItem;
