import DrawerContent from "@/components/DrawerContent";
import InputComponent from "@/components/InputComponent";
import NavBar from "@/components/NavBar";
import React from "react";

type Props = {};

export default function nuevoSimulador({}: Props) {
  return (
    <main className="bg-base-200 h-screen w-screen">
      <DrawerContent>
        <NavBar isBuilder />
        <div className="p-6">
          <div className="card bg-base-100 shadow-xl h-full">
            <div className="card-body">
              <p className="mb-10 text-xl font-bold text-center">
                Simuladores ENARM
              </p>
              <InputComponent label="Pregunta" />
              <div className="w-[100%]">
                <div className="flex justify-between">
                  <span className="label-text text-lg">
                    Subir imagen (opcional)
                  </span>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs mb-10"
                  />
                </div>
                <div className="form-control mb-10">
                  <label className="cursor-pointer label">
                    <span className="label-text text-lg">
                      Es caso seriado? (opcional)
                    </span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-md checkbox-success"
                    />
                  </label>
                </div>
              </div>
              <InputComponent label="Respuesta 1" />
              <InputComponent label="Respuesta 2" />
              <InputComponent label="Respuesta 3" />
              <InputComponent label="Respuesta 4" />
              <span className="label-text text-lg mb-10">
                Respuesta correcta:
              </span>
              <div className="w-[100%]">
                <div className="form-control mb-2">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">Caso 1</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-success"
                      checked
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control mb-2">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">Caso 2</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-success"
                      checked
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control mb-2">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">Caso 3</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-success"
                      checked
                      readOnly
                    />
                  </label>
                </div>
                <div className="form-control mb-2">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">Caso 4</span>
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-success"
                      checked
                      readOnly
                    />
                  </label>
                </div>
              </div>
              <button className="btn btn-success w-[30%] self-end mt-20">
                Guardar caso
              </button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </main>
  );
}
