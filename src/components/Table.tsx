import React from "react";

const DUMY_DATA = ["ENARM_1", "ENARM_2", "ENARM_3", "ENARM_4", "ENARM_5"];

function Table() {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nombre</th>
            <th>Creado</th>
            <th>Preguntas</th>
            <th>ID</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {DUMY_DATA.map((item, index) => (
            <tr className="hover">
              <th>{index + 1}</th>
              <td>{item}</td>
              <td>{"05/12/23"}</td>
              <td>120/280</td>
              <td>ID-12341354535</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-error ml-6">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
