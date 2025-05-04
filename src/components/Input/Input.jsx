import React, { useRef } from "react";

const Input = () => {
  const ref = useRef();
  return (
    <>
      <input
        ref={ref}
        className="w-full border-2 rounded outline-0 border-blue-500 pt-2 pb-2 pl-2"
        type="text"
        placeholder="Searching..."
      />
    </>
  );
};

export default Input;
