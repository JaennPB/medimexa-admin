import { useRouter } from "next/navigation";
import React from "react";

function ModalSalir() {
  const router = useRouter();

  function saveAndExitHandler() {
    router.push("/simuladores");
  }

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Estás seguro?</h3>
          <p className="py-4">
            Podrás regresar a completar en cualquier momento.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-4" className="btn w-32">
              No
            </label>
            <label
              htmlFor="my-modal-4"
              className="btn w-32 btn-primary"
              onClick={saveAndExitHandler}
            >
              Sí
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSalir;
