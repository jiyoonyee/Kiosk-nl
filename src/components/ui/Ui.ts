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

interface buttonProps {
  $bottomMargin?: string;
  $sideWidth: number;
}

export const GradiantButton = styled.div<buttonProps>`
  width: 102%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateY(
      ${(props) => (props.$bottomMargin ? props.$bottomMargin : "-20%")}
    )
    translateX(-50%);
  padding: 10px 15px;

  background: linear-gradient(#85e071 50%, #bbe071);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3vw;
  font-weight: bold;

  &::after {
    content: "";
    height: 100%;
    width: ${(props) => props.$sideWidth}%;
    position: absolute;
    background: linear-gradient(#85e071 50%, #bbe071);
    top: 0;
    left: -${(props) => props.$sideWidth}%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &::before {
    content: "";
    height: 110%;
    width: ${(props) => props.$sideWidth}%;
    position: absolute;
    background: linear-gradient(#85e071 40%, #bbe071);
    top: 0;
    right: -${(props) => props.$sideWidth - 1}%;
    z-index: 500;
    /* transform: translateX(99%); */
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
