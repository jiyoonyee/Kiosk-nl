import styled from "styled-components";
import { PriceText } from "@/components/ui/Ui";

interface IdleMenuInforProps {
  filename: string;
  name: string;
  price: string;
}

interface MenuImage {
  $filename: string;
}

const IdleMenuItem: React.FC<IdleMenuInforProps> = ({
  filename,
  name,
  price,
}) => {
  return (
    <>
      <Wrap>
        <MenuImgWrap $filename={import.meta.env.VITE_API_URL + filename} />
        <MenuName>{name}</MenuName>
        <TextWrap>
          <PriceText style={{ fontSize: "5vw" }}>€{price}</PriceText>
        </TextWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  @media (max-height: 1000px) {
    & {
      gap: 10px;
    }
  }
  @media (min-height: 2000px) {
    & {
      gap: 40px;
    }
  }
`;

const MenuImgWrap = styled.div<MenuImage>`
  width: 100%;
  aspect-ratio: 1 / 1;
  /* background-color: blue; */
  border-radius: 2%;
  background-image: url(${(props) => props.$filename});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MenuName = styled.div`
  font-size: 3vw;
  text-align: center;
  font-weight: bold;
  color: #004f1b;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default IdleMenuItem;
