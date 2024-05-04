import React from 'react'
import Sectiontitle from '../../compnents/Sectiontitle'
import { courses } from '../../resorces/Courses'
const Projects = () => {
    const [selecteditem, setSelecteditem] = React.useState(0);
  return (
    <div>
        <Sectiontitle title="Projects"/>

        <div className="flex items-center justify-center gap-10 ">
      <div className="period border-l-2 border-black flex flex-col gap-5 m-[2rem] w-1/3 ">
        {courses.map((experience, index) => (
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
              {experience.title}
            </h1>
          </div>
        ))}
      </div>
      <div className='w-1/3 mr-[1rem] h-auto'>
            <img  src={courses[selecteditem].image} alt="" className="rounded-lg w-full h-full object-cover"/>
      </div>
      <div className="note flex flex-col gap-5 w-1/3 mx-[2rem] ">
          <h1 className="text-orange-600 text-5xl ">{courses[selecteditem].title}</h1>
          
          <p className="font-[poppins]">{courses[selecteditem].description}</p>
      </div>
    </div>
    </div>
  )
}

export default Projects