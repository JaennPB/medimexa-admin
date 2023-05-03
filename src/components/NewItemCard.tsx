interface Props {
  title: string;
  description: string;
}

function NewItemCard({ title, description }: Props) {
  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body">
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <button className="btn btn-primary">{description}</button>
        </div>
      </div>
    </div>
  );
}

export default NewItemCard;
