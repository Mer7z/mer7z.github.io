import React from "react";

function CVDesc({title, duration, desc}) {
  return (
    <div className="job-exp mb-10">
      <p className="text-xl font-bold lg:w-2/3">
        {title}
      </p>
      <p className="text-xl text-black/50">{duration}</p>
      <p className="text-lg lg:w-1/2 font-sans">
        {desc}
      </p>
    </div>
  );
}

export default CVDesc;
