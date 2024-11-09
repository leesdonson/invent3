import React from "react";

const About = () => {
  return (
    <div className="w-full mt-[5rem] flex flex-col py-2 px-2">
      <div className="container mx-auto w-full border border-slate-700 p-2">
        <h1 className="text-3xl font-bold text-end p-2 mr-5 w-full">About</h1>
        <p className="text-md font-thin">
          Hi, thank you for checking out this website. Hope you enjoy browsing
          it.
        </p>
        <div className="text-md mt-4">
          This project is a portfolio project build by Krintifa Lab Dev Team to
          showcase their skillsets.
        </div>
        <div className="text-md mt-4 w-full md:w-1/2">
          The website is built with Next.js and TypeScript. Please note that all
          the data showed in this website is fake. We just try to make it look
          like real data. Typically, those are types of data that can be
          extracted and display them on the website base on company sales
          record.
        </div>

        <div className="text-md mt-4 w-full md:w-1/2">
          <span className="text-md font-semibold text-blue-600 block py-2">
            Now available on GitHub!
          </span>{" "}
          We make this project open source so anyone can have access to the
          source code and see all the implemenytation. If you want to check out
          the source code of this project, please click{" "}
          <a
            className="text-blue-600 font-semibold text-md"
            href="https://github.com/leesdonson/invent3"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
