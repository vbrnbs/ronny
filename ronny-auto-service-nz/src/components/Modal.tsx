import Form from "./Form"

const Modal = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => window.my_modal_3.showModal()}
      >
        Book Service
      </button>
      <dialog
        id="my_modal_3"
        className="modal modal-bottom sm:modal-middle text-left"
      >
        <Form />
        
          
      </dialog>
    </div>
  );
};

export default Modal;
