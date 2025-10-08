import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* padding: 0px 10px; */
`;

export const ModalWrap = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  position: fixed;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
