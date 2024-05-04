import React from 'react'

const Sectiontitle = ({title}) => {
  return (
    <div className="flex gap-10 items-center px-[2rem] font-[poppins] mt-[2rem]">
      <h1 className="text-4xl text-white font-semibold">{title}</h1>
      <div className="w-[80%] h-[1px] bg-white">

      </div>
    </div>
  )
}

export default Sectiontitle