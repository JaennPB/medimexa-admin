import React from "react";

interface Props {
  title: string;
}

function NewItemCard({ title }: Props) {
  return (
    <div className="card w-full bg-primary text-primary-content mt">
      <div className="card-body">
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <button className="btn">Crear Nuevo</button>
        </div>
      </div>
    </div>
  );
}

export default NewItemCard;
