import styled from "styled-components";
import { PageWrapper } from "@/components/Layout";
import IdleBackground from "@/assets/images/IdleBackground.png";
import CharLogoImg from "@/assets/images/CharLogo.png";
import eatinImg from "@/assets/images/eatin.png";
import takeoutImg from "@/assets/images/takeout.png";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./idlestyle.css";
import { useRef } from "react";
import MenuItem from "@/components/IdlePage/MenuItem";

const IdlePage = () => {
  const test = useRef(null);
  console.log(test);

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <>
      <PageWrapper>
        <IdleBackgroundContainer>
          <img src={CharLogoImg} alt="logo" />
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            style={{ width: "100%" }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={pagination}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <MenuItem />
            </SwiperSlide>
            <SwiperSlide>
              <MenuItem />
            </SwiperSlide>
            <SwiperSlide>
              <MenuItem />
            </SwiperSlide>
            <SwiperSlide>
              <MenuItem />
            </SwiperSlide>
            <SwiperSlide>
              <MenuItem />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
        </IdleBackgroundContainer>
        <OrderWrapper>
          <span>Order Here</span>
          <OrderButton>
            <div>
              <img src={takeoutImg} alt="" />
              <span>Take out</span>
            </div>
            <div>
              <img src={eatinImg} alt="" />
              <span>Eat In</span>
            </div>
          </OrderButton>
        </OrderWrapper>
      </PageWrapper>
    </>
  );
};

const IdleBackgroundContainer = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  &::after {
    width: 100%;
    height: 100%;
    background-image: url(${IdleBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    /* background-color: rgba(128, 128, 128, 0.5); */
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    /* position: relative; */
    z-index: 1;
  }
`;

const OrderWrapper = styled.div`
  width: 100%;
  height: 25%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  font-size: 64px;
  font-weight: bold;
`;

const OrderButton = styled.div`
  width: 80%;
  height: 55%;
  /* background-color: #004f1b; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10000px;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    width: 5px;
    height: 100%;
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & > div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    font-size: 50px;
    color: white;
    font-weight: 600;
    background-color: #004f1b;
    &:active {
      background-color: #002d10;
    }
    & > img {
      height: 50%;
    }
  }
`;

export default IdlePage;
