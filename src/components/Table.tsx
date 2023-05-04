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

interface Props {
  description: string;
  hasCategory?: boolean;
}

function Table({ description, hasCategory }: Props) {
  return (
    <div className="overflow-x-auto mt-6 h-auto max-h-[39rem]">
      <table className="table w-full">
        <thead>
          <tr className="bg-primary">
            <th className="text-center bg-primary text-primary-content">
              Numero
            </th>
            <th className="text-center bg-primary text-primary-content">
              Nombre
            </th>
            <th className="text-center bg-primary text-primary-content">
              Creado
            </th>
            <th className="text-center bg-primary text-primary-content">
              {description}
            </th>
            <th className="text-center bg-primary text-primary-content">ID</th>
            {hasCategory && (
              <th className="text-center bg-primary text-primary-content">
                Categoría
              </th>
            )}
            <th className="text-center bg-primary text-primary-content">
              Acciónes
            </th>
          </tr>
        </thead>
        <tbody>
          {DUMY_DATA.map((item, index) => (
            <tr key={index}>
              <th className="text-center w-10">{index + 1}</th>
              <td className="text-center w-80">{item}</td>
              <td className="text-center w-80">05/12/23</td>
              <td className="text-center w-80">120/280</td>
              <td className="text-center w-80">ID-12341354535</td>
              {hasCategory && <td className="text-center w-80">Cirugía</td>}
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
