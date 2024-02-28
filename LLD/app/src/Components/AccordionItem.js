import React from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border p-2 rounded-md my-6">
      <div
        className="flex justify-between bg-slate-50 p-3 rounded-md shadow-lg font-semibold text-lg cursor-pointer"
        // onClick={() => {
        //   setIsOpen((isOpen) => !isOpen);
        // }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>🔽</span>
      </div>
      {isOpen && <p className="text-lg font-normal">{body}</p>}
    </div>
  );
};

export default AccordionItem;
