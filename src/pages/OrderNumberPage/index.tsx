import { PageWrapper } from "@/components/layouts/Layout";
import { GradiantButton, PriceText } from "@/components/ui/Ui";
import recepitImage from "@/assets/images/recepit.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "@/hooks/useOrder";

const OrderNumberPage = () => {
  const [second, setSecond] = useState(30);
  const navigate = useNavigate();
  const { ResetOrder, orderNumber } = useOrder();
  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    if (second == 0) {
      navigate("/");
      ResetOrder();
    }
    return () => clearInterval(timer);
  }, [second]);

  return (
    <>
      <PageWrapper style={{ paddingTop: "10vh" }}>
        <OrderWrapper>
          <div style={{ fontSize: "9vw", fontWeight: "bold" }}>
            ORDER COMPLETE!
          </div>
          <div style={{ fontSize: "7vw", fontWeight: "bold" }}>
            Check your{" "}
            <PriceText style={{ display: "inline" }}>NUMBER</PriceText>
          </div>
          <RecepitContainer>
            <img src={recepitImage} alt="recepit image" />
            <div>{orderNumber}</div>
          </RecepitContainer>

          <GradiantButton
            onClick={() => {
              navigate("/");
              ResetOrder();
            }}
            style={{ width: "50%", borderRadius: "10px" }}
            $sideWidth={0}
            $bottomMargin="-300%"
          >
            <span>Return to Home</span>
            <PriceText>{second}s</PriceText>
          </GradiantButton>
        </OrderWrapper>
      </PageWrapper>
    </>
  );
};

const OrderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 100px;
`;

const RecepitContainer = styled.div`
  width: 100%;
  height: 60%;

  position: relative;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40vw;
  font-weight: 600;
  & > img {
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`;

export default OrderNumberPage;
