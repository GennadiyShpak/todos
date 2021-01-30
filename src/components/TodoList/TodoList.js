import { useState } from 'react';
import Modal from '../Modal';

const TodoList = () => {
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button type="button" onClick={togleModal}>
        Add todo
      </button>
      {showModal && <Modal onClose={togleModal} />}
    </>
  );
};

export default TodoList;
