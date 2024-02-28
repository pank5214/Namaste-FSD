import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionData } from "../utils/constants";

const Accordion = () => {
  const [showIndex, setShowIndex] = useState(null);
  return (
    <div className="w-1/2 m-auto my-16">
      {AccordionData.map((data, index) => (
        <AccordionItem
          key={index}
          title={data.title}
          body={data.body}
          isOpen={index === showIndex ? true : false}
          setIsOpen={() => setShowIndex(index === showIndex ? null : index)}
          // setIsOpen={() => {
          //   index === showIndex ? setShowIndex(null) : setShowIndex(index);
          // }}
        />
      ))}
    </div>
  );
};

export default Accordion;
