import styled from "styled-components";

export const PriceText = styled.div`
  font-weight: bold;
  color: #ff7520;
  text-align: center;
`;

export const KcalText = styled.div`
  font-weight: 600;
  color: #009633;
  text-align: center;
`;

export const GradiantButton = styled.div`
  width: calc(100%);
  // 임의값

  position: absolute;
  left: 0;
  /* bottom: 0; */
  transform: translateY(-20%);
  padding: 10px 15px;

  background: linear-gradient(#85e071 50%, #bbe071);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    font-size: 3vw;
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
