import React from 'react'
import Sectiontitle from './../../compnents/Sectiontitle';
const About = () => {
    const skills = ["javaScript", "java", "python", "c++", "c#", "html", "Firebase"];

  return (
    <div className="font-[poppins]">
      <Sectiontitle title="About" />
      <div className="flex mt-[2rem] w-[100%] items-center">
        <div className="h-[70vh] w-1/3  ">
          <dotlottie-player
            src="https://lottie.host/9df3bfde-56a9-48ec-8845-3efedcaf0106/vuoT284e0r.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-2/3 m-[1rem]">
          <p className="text-white">
            In the contemporary landscape, where the digital realm intertwines
            seamlessly with everyday life, coders stand as the architects of
            this virtual world. Their craft, often shrouded in mystique, forms
            the backbone of technological advancement, driving innovation across
            industries and shaping the way we interact with information and each
            other. To truly understand the significance of coders, one must
            delve into their multifaceted role, exploring their skills, impact,
            and the ethos that defines their community.
          </p>
          <p className="text-white">
            At its core, coding is the language of computers, enabling humans to
            communicate their intentions to machines through carefully crafted
            instructions. Coders possess a unique blend of analytical thinking,
            problem-solving prowess, and creativity, allowing them to decipher
            complex problems and translate them into elegant solutions. Their
            toolkit encompasses a plethora of programming languages, each with
            its own syntax and semantics, akin to a painter wielding different
            brushes to create diverse masterpieces. Beyond the mere act of
            writing code, coders are innovators at heart, constantly pushing the
            boundaries of what is possible. They are the trailblazers behind
            groundbreaking technologies such as artificial intelligence,
            blockchain, and virtual reality, ushering in an era of unprecedented
            digital transformation. Through their ingenuity, they tackle
            societal challenges, from healthcare to environmental
            sustainability, harnessing the power of technology for the greater
            good.
          </p>
        </div>
      </div>
      <div className="w-[93%] mt-[2rem] ml-[3rem] h-[2px] bg-white"></div>

      <div className="py-5 ">
        <h1 className="text-black font-bold text-4xl p-[2rem] ">
          Here are a few technologies i've been working on recently:
        </h1>
       <div className="flex flex-wrap text-black font-extrabold cursor-pointer gap-10 mt-5 ml-[2rem] ">
        {skills.map((skill, index) => (
          <div className="border border-cyan-600 rounded-lg py-3 px-5"><h1>{skill}</h1></div>
        ))}</div>
      </div>
    </div>
  )
}

export default About