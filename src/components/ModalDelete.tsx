import React from "react";

function ModalDelete() {
  return (
    <>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Estás seguro?</h3>
          <p className="py-4">Una vez borrado no se podrá recuperar.</p>
          <div className="modal-action">
            <label htmlFor="my-modal-2" className="btn w-32 btn-ghost">
              No
            </label>
            <label htmlFor="my-modal-2" className="btn w-32 btn-accent">
              Sí
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDelete;
