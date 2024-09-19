import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-black-400 sm:text-2xl">
          About Me
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-black-700 font-medium w-[100%]">
          This is about myself.
        </p>
      </div>
      {/* card*/}
      
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-bold sm:text-xl">
                  B.Tech, Information Technology
                </h1>
                <span className=" text-[.9rem] font-bold text-black-500 sm:text-base">
                  Inderprastha Engineering college
                </span>
                <span className=" text-[.9rem] font-bold text-yellow-500 sm:text-base">
                  2021-2025
                </span>
                <p className=" text-[.9rem] text-justify font-bold text-black-700">
                As a 4th-year B.Tech student in Information Technology, I am passionate about harnessing the power of technology to drive innovative solutions and solve complex problems. With a strong foundation in Java, Data Structures and Algorithms (DSA), Android Development, and Full Stack Development, I bring a diverse skill set to the table. My academic journey and hands-on experience have equipped me with the technical expertise and creative problem-solving abilities essential for success in today's dynamic tech landscape.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
  );
};

export default Resume;
