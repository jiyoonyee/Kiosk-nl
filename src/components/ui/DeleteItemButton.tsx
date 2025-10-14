import styled from "styled-components";
import DeleteImage from "@/assets/images/garbageIcon.png";
import { useOrder } from "@/hooks/useOrder";

interface DeleteItemButtonProps {
  itemId: number;
}

const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({ itemId }) => {
  const { DeleteOrderItem } = useOrder();

  const DeleteEvent = () => {
    DeleteOrderItem(itemId);
  };

  return (
    <>
      <ButtonWrap onClick={DeleteEvent}>
        <img src={DeleteImage} alt="삭제" />
      </ButtonWrap>
    </>
  );
};

const ButtonWrap = styled.div`
  height: 80%;
  aspect-ratio: 1 / 1;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f84f52;
  & > img {
    width: 60%;
  }
`;

export default DeleteItemButton;
