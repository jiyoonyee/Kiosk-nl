import styled from "styled-components";

const GradiantButton = () => {
  return (
    <>
      <ButtonWrap>
        <div>test</div>
        <div>test</div>
      </ButtonWrap>
    </>
  );
};

const ButtonWrap = styled.div`
  width: 100%;
  // 임의값

  position: absolute;
  left: 0;
  /* bottom: 0; */
  transform: translateY(-20%);
  padding: 10px 15px;
  z-index: 1000;
  background: linear-gradient(#85e071 50%, #bbe071);

  & > div {
    font-size: 4vw;
    font-weight: bold;
  }
  &::after {
    content: "";
    height: 100%;
    width: 3%;
    position: absolute;
    background: linear-gradient(#85e071 50%, #bbe071);
    top: 0;
    left: -3%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &::before {
    content: "";
    height: 110%;
    width: 3%;
    position: absolute;
    background: linear-gradient(#85e071 40%, #bbe071);
    top: 0;
    right: -3%;
    z-index: 500;
    /* transform: translateX(99%); */
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default GradiantButton;
