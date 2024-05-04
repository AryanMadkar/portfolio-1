import React from "react";
import Sectiontitle from "../../compnents/Sectiontitle";

const Contact = () => {
  const user = {
    name: "Aryan Madkar",
    age: null,
    gender: "Male",
    email: "aryanmadkar80@gmail.com",
    phone: "+91  8779081829",
    country: "INDIA",
  };
  return (
    <div>
      <Sectiontitle title="say Hello" />
      <div className="flex m-[2rem] ml-[4rem] justify-around  mt-[3rem]">
        <div className="flex flex-col ">
          <h1 className="text-white text-3xl">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1>
              <span className="text-black text-3xl">{key}</span>
              <span className="text-white mx-1 text-3xl">:</span>
              <span className="text-cyan-500 text-3xl">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-white text-3xl">{"}"}</h1>
        </div>
        <div className=" h-[50vh] bg-black rounded-full ml-[2rem]">
          <dotlottie-player
            src="  https://lottie.host/99a710c8-2cb5-4f01-9fee-5db4b1acb1c1/7gdu8Bylw3.json"
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

export default Contact;
