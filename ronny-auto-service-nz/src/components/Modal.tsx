import WebcamCapture from "./WebcamCapture";

const Modal = () => {
  return (
    <div>
      
        <div className="flex w-full justify-center text-center cursor-pointer">
            <button
        className=""
        onClick={() => window.my_modal_3.showModal()}
      >
                    <div className="flex flex-col rounded-lg border p-36 items-center justify-center">

              <svg
                className="w-[48px] h-[48px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                />
                <path
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
                />
              </svg>
            </div>
              </button>
            </div>
          
      
      <dialog
        id="my_modal_3"
        className="modal modal-bottom sm:modal-middle text-left"
      >
        <WebcamCapture />
        
          
      </dialog>
    </div>
  );
};

export default Modal;
