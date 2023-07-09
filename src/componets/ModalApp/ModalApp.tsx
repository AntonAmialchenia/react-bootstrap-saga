import { FC, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";

interface ModalAppProps {
  show: boolean;
  id: number;
  setShow: (value: SetStateAction<boolean>) => void;
  deletePost: (id: number) => void;
}
export const ModalApp: FC<ModalAppProps> = ({
  show,
  setShow,
  deletePost,
  id,
}) => {
  return (
    <Modal show={show} onHide={() => setShow((prev) => !prev)}>
      <Modal.Header closeButton>
        <Modal.Title>Удаление поста</Modal.Title>
      </Modal.Header>
      <Modal.Body>Вы действительно хотите удалить пост?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow((prev) => !prev)}>
          Нет
        </Button>
        <Button variant="primary" onClick={() => deletePost(id)}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
