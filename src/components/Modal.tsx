import React from "react";

interface Props {
  description: string;
}

function Modal({ description }: Props) {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Estás seguro?</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn w-32">
              No
            </label>
            <label htmlFor="my-modal-6" className="btn w-32 btn-primary">
              Sí
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
