import React from "react";

function ModalEdit() {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Continuar editando?</h3>
          <p className="py-4">
            Podrás regresar a completar en cualquier momento.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-3" className="btn w-32">
              No
            </label>
            <label htmlFor="my-modal-3" className="btn w-32 btn-primary">
              Sí
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEdit;
