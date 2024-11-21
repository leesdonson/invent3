import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-full mt-[5rem] flex flex-col py-2 px-2">
      <div className="container mx-auto w-full border border-slate-700 p-4 rounded-md">
        <h1 className="text-3xl font-bold text-end p-2 mr-5 w-full">About</h1>
        <p className="text-md font-medium">
          Hi, thank you for checking out this website. Hope you enjoy browsing
          it.
        </p>
        <div className="text-md mt-4">
          This project is a portfolio project build by{" "}
          <span className="text-lg font-bold text-blue-800">Krintifa Lab</span>{" "}
          Dev Team.
        </div>
        <div className="text-md mt-4 w-full md:w-1/2">
          <p className="w-full">
            The website is built with Next.js and TypeScript. Next.js is a
            modern web framework for building production ready software
            applications that perform on the web. It is a full stack framework,
            that is: you can build the entire system using just Next.js for
            frontend interfaces and for the backend implementations.
          </p>
        </div>

        <div className="text-md mt-4 w-full md:w-1/2">
          <span className="text-md font-semibold text-blue-600 block py-2">
            Now available on GitHub!
          </span>{" "}
          We make this as an open source project so anyone can have access to
          the source code and see all the implemenytation. If you want to check
          out the source code of this project, please click{" "}
          <a
            className="text-blue-600 font-semibold text-md"
            href="https://github.com/leesdonson/invent3"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
        </div>
        <div className="mt-5">
          <h2 className="text-md font-bold text-slate-700">
            How To Use the App
          </h2>
          <div className="mt-2 w-full md:w-1/2">
            <p className="text-md p-2 mt-2">
              This app provides a simple authentication system where users must
              login first to access the app, using the credentials provided.
            </p>
            <p className="text-md p-2">
              We have made is available the{" "}
              <span className="font-bold">username</span> and a{" "}
              <span className="font-bold">password</span> to login to the app
              and you can find them by{" "}
              <Link className="text-blue-900 underline" href="/auth/sign-up">
                navigating to this page.
              </Link>
            </p>
            <p className="text-md p-2">
              After you have successfully logged in, you will be redirected to
              the home page and that is where the adventure begins. You can
              browse through the pages and view stuff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
