import styled from "styled-components";

interface CategoryProps {
  CategoryName: string;
  ImagePath: string;
}

const AsideSelector: React.FC<CategoryProps> = (props) => {
  return (
    <>
      <Wrap>
        <CategoryImageContainer>
          <img src={props.ImagePath} alt="category image" />
        </CategoryImageContainer>

        <span>{props.CategoryName}</span>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  /* background-color: aliceblue; */
  /* position: relative; */

  & > span {
    max-height: 20px;
    text-align: center;
    font-size: 2.5vw;
    font-weight: bold;
  }
`;

const CategoryImageContainer = styled.div`
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
  }
  & > img {
    width: 50%;
    position: relative;
    z-index: 90;
  }

  @media (max-height: 1000px) {
    & {
      padding: 10px 0px;
    }
  }
`;

export default AsideSelector;
