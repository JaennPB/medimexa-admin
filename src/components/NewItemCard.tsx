interface Props {
  title: string;
  description: string;
}

function NewItemCard({ title, description }: Props) {
  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body p-4">
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <label htmlFor="my-modal-1" className="btn btn-primary">
            {description}
          </label>
        </div>
      </div>
    </div>
  );
}

export default NewItemCard;
