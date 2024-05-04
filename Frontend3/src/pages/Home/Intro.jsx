import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center">
      <div className="h-[87vh] p-[2rem] tracking-tight w-[100%] flex flex-col items-start">
        <h1 className="text-black text-5xl">Hi , I am </h1>
        <h1 className="text-[7rem] text-white">Aryan Dinesh Madkar</h1>
        <h1 className="text-black text-7xl">I build things for the web</h1>

        <p className="text-white font-[poppins] text-[1rem] mt-[3rem]">
          A developer is a technology professional who works on, builds and
          creates software, websites, applications <br></br> and other systems.
          Often, developers require a knowledge of coding to write and debug
          source code for<br></br> applications and software effectively.
        </p>
        <button className="p-[0.5rem] px-[1rem] bg-black rounded-lg text-3xl my-[1rem]">
          Get started
        </button>
      </div>
      <div>
      <div className="h-[80vh]  rounded-xl">
          <dotlottie-player
            src="https://lottie.host/ebbedc54-2ff9-40d8-9a22-737e190384ee/OaPOjoVgFr.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Intro;
