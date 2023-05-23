import React from "react";

interface Props {
  label: string;
}

function InputComponent({ label }: Props) {
  return (
    <textarea
      className="textarea textarea-primary mb-10 text-lg h-40"
      placeholder={label}
    ></textarea>
  );
}

export default InputComponent;
