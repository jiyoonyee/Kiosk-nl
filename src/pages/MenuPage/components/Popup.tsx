import styled from "styled-components";
import MenuDetailModal from "./MenuDetailModal";
import OrderListModal from "./OrderListModal";

interface PopupProps {
  modalName: string | null;
  updatePopupState: (modalName: string | null) => void;
}

const Popup: React.FC<PopupProps> = ({ updatePopupState, modalName }) => {
  return (
    <>
      <PopupBackground
        onClick={() => {
          updatePopupState(modalName);
        }}
      ></PopupBackground>
      {modalName === "orderListModal" && (
        <OrderListModal updatePopupState={updatePopupState} />
      )}
      {modalName === "detailModal" && (
        <MenuDetailModal updatePopupState={updatePopupState} />
      )}
    </>
  );
};

const PopupBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Popup;
