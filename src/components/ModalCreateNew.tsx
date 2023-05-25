import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  description: string;
  id: "SIM" | "MEXA" | "FLASH";
}

function ModalCreateNew({ description, id }: Props) {
  const router = useRouter();

  function navigateToBuilderHandler() {
    if (id === "SIM") {
      router.push("/builder/nuevo-simulador");
    }

    if (id === "MEXA") {
      router.push("/builder/nuevo-mexaquiz");
    }

    if (id === "FLASH") {
      router.push("/builder/nuevas-flashcards");
    }
  }

  return (
    <>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Estás seguro?</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <label htmlFor="my-modal-1" className="btn w-32">
              No
            </label>
            <label
              htmlFor="my-modal-1"
              className="btn w-32 btn-primary"
              onClick={navigateToBuilderHandler}
            >
              Sí
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCreateNew;
