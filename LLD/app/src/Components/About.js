import React from "react";
import { LANG } from "../utils/langConstants";

const About = ({ lang }) => {
  const langSelect = LANG[lang];
  return (
    <div className="p-2 mx-8 pt-36">
      <div>
        <h1 className="text-2xl font-bold mb-1 mt-6">{langSelect.title}</h1>
        <p>{langSelect.titleDesc}</p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-1 mt-6">{langSelect.mission}</h1>
        <p>{langSelect.missionDesc}</p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-1 mt-6">{langSelect.product}</h1>
        <p>{langSelect.productDesc}</p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-1 mt-6">{langSelect.address}</h1>
        <p>{langSelect.addressDesc}</p>
      </div>
    </div>
  );
};

export default About;
