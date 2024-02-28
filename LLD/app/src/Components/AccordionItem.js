import React from "react";

const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black p-2 rounded-md my-2">
      <div
        className="flex justify-between bg-slate-200 p-3 rounded-md font-semibold text-lg cursor-pointer"
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
