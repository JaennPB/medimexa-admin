import React from "react";

const DUMY_DATA = [
  "ENARM_1",
  "ENARM_2",
  "ENARM_3",
  "ENARM_4",
  "ENARM_5",
  "ENARM_6",
  "ENARM_7",
  "ENARM_8",
];

function Table() {
  return (
    <div className="overflow-x-auto mt-6 h-[36rem]">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-center">Numero</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Creado</th>
            <th className="text-center">Preguntas</th>
            <th className="text-center">ID</th>
            <th className="text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {DUMY_DATA.map((item, index) => (
            <tr>
              <th className="text-center w-10">{index + 1}</th>
              <td className="text-center w-80">{item}</td>
              <td className="text-center w-80">{"05/12/23"}</td>
              <td className="text-center w-80">120/280</td>
              <td className="text-center w-80">ID-12341354535</td>
              <td className="text-center w-80">
                <button className="btn btn-secondary btn-wide">Editar</button>
                <button className="btn btn-accent ml-6">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
