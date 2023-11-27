import React from "react";
import Overlay from "./Overlay";

type ModalProps = {
  showFormModal: boolean;
  setShowFormModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function FormModal({ showFormModal, setShowFormModal }: ModalProps) {
  return (
    <>
      <Overlay showModal={showFormModal}></Overlay>;
      <div className="form-modal">
        <button
          className="close-modal"
          onClick={() => setShowFormModal(!showFormModal)}
        >
          {showFormModal ? "nascondi" : "mostra"}
        </button>
        <p>FORM MODAL</p>
      </div>
    </>
  );
}

export default FormModal;
