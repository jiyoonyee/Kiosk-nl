import styled from "styled-components";
import HeaderImage from "@/assets/images/Logo.png";

const Header = () => {
  return (
    <>
      <Wrap>
        <LogoWrap>
          <img src={HeaderImage} alt="headerlogo" />
        </LogoWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.header`
  width: 100%;
  height: 10%;
  /* background-color: aliceblue; */
  position: fixed;
  top: 0px;
  z-index: 999;
`;

const LogoWrap = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  background: linear-gradient(
    90deg,
    rgba(0, 150, 51, 1) 0%,
    rgba(140, 208, 3, 1) 100%
  );
  border-bottom-right-radius: 10000px;

  & > img {
    transform: translateX(-12%);
    width: 75%;
  }
`;

export default Header;
