import styled from "styled-components";
import { KcalText, ModalWrap, PriceText } from "@/components/layouts/Layout";
import closeButtonImage from "@/assets/images/closeButton.png";
import testImage from "@/assets/images/MenuImg.png";
import GradiantButton from "@/components/ui/GradiantButton";

const MenuDetailModal = () => {
  return (
    <>
      <ModalWrap style={{ width: "80%", paddingBottom: "120px" }}>
        <ModalHeader>
          <span>Roasted Chickpeas (Spicy or Herb)</span>
          <img src={closeButtonImage} alt="closeButton" />
        </ModalHeader>
        <ModalMainWrapper>
          <img src={testImage} alt="MenuImage" />
          <MenuDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eius
            eveniet eos suscipit, aliquid perspiciatis itaque quas veniam maxime
            nihil nam, corporis a dolorum animi modi voluptatibus!
            Necessitatibus, tempore rerum!
          </MenuDescription>
          <MenuPriceInforWrapper>
            <div>
              <PriceText style={{ fontSize: "4.5vw" }}>€4.50</PriceText>
              <KcalText style={{ fontSize: "2.5vw" }}>300 Kcal</KcalText>
            </div>
            <div
              style={{
                width: "250px",
                height: "80px",
                backgroundColor: "green",
              }}
            >
              test
            </div>
          </MenuPriceInforWrapper>
        </ModalMainWrapper>
        <GradiantButton />
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
