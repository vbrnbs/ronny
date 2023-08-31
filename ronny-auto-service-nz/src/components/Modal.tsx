import { useState } from "react";
import WebcamCapture from "./WebcamCapture";

const Modal = () => {
  // State to control modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to show the modal
  const showModal = () => {
    setModalVisible(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div className="flex w-full justify-center text-center cursor-pointer">
        <button className="" onClick={showModal}>
          {/* Your button content */}
        </button>
      </div>

      {isModalVisible && (
        <dialog
          id="my_modal_3"
          className="modal modal-bottom sm:modal-middle text-left"
        >
          <button className="absolute top-4 right-4" onClick={hideModal}>
            Close
          </button>
          <WebcamCapture />
        </dialog>
      )}
    </div>
  );
};

export default Modal;
