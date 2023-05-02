import React from "react";

function NewItemCard() {
  return (
    <div className="card w-full mt-6 bg-primary text-primary-content mt">
      <div className="card-body">
        <h2 className="card-title">Crear Nuevo Simulador ENARM</h2>
        <div className="card-actions justify-end">
          <button className="btn">Crear Nuevo</button>
        </div>
      </div>
    </div>
  );
}

export default NewItemCard;
