import styled from "styled-components";
import DeleteImage from "@/assets/images/garbageIcon.png";
import { useOrder } from "@/hooks/useOrder";

interface DeleteItemButtonProps {
  itemId: number;
  boxSize: string;
}

const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({
  itemId,
  boxSize,
}) => {
  const { DeleteOrderItem } = useOrder();

  const DeleteEvent = () => {
    DeleteOrderItem(itemId);
  };

  return (
    <>
      <ButtonWrap onClick={DeleteEvent} style={{ width: boxSize ?? "40px" }}>
        <img src={DeleteImage} alt="삭제" />
      </ButtonWrap>
    </>
  );
};

const ButtonWrap = styled.div`
  aspect-ratio: 1 / 1;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f84f52;
  & > img {
    /* position: absolute; */
    width: 60%;
  }
`;

export default DeleteItemButton;
