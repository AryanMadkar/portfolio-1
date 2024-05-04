import React from 'react'
import Sectiontitle from './../../compnents/Sectiontitle';
import {Experiences} from "../../resorces/Experiences"
const Experiencemain = () => {
    const [selecteditem, setSelecteditem] = React.useState(0);

  return (
    <div>
    <Sectiontitle title="Experiences" />
    <div className="flex items-center ">
      <div className="period border-l-2 border-black flex flex-col gap-5 m-[2rem] w-1/2 ">
        {Experiences.map((experience, index) => (
          <div
            className="p-4"
            onClick={() => {
              setSelecteditem(index);
            }}
          >
            <h1
              className={`text-2xl rounded-lg p-[0.5rem] cursor-pointer ${
                selecteditem === index
                  ? `text-cyan-500 bg-slate-800 -ml-2 transition-all border-cyan-500 border-l-4`
                  : `text-white  border-white`
              }`}
            >
              {experience.period}
            </h1>
          </div>
        ))}
      </div>
      <div className="note flex flex-col gap-5 ">
          <h1 className="text-orange-600 text-5xl ">{Experiences[selecteditem].title}</h1>
          <h1 className="text-white text-3xl">{Experiences[selecteditem].company}</h1>
          <p className="font-[poppins]">{Experiences[selecteditem].description}</p>
      </div>
    </div>
  </div>
  )
}

export default Experiencemain