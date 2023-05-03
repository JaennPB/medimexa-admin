import Image from "next/image";
import React from "react";
import plus from "../../assets/plusIcon.png";

interface Props {
  title: string;
}

function NewItemCard({ title }: Props) {
  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body">
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <button className="btn btn-primary">Agregar Nuevo</button>
        </div>
      </div>
    </div>
  );
}

export default NewItemCard;
