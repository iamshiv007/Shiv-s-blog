import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment } from "react";

const VirtualDom = () => {
  return (
    <Fragment>
      <Head>
        <title>Virtual DOM</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              Virtual DOM in React
            </h1>

            <p className="mt-5">
              When you're working with a web application built using frameworks
              like React, there are often many changes happening in user
              interface(UI). The virtual dom is a concept that helps optimize
              these changes and improve performance.
            </p>

            <p className="font-bold my-3">1. Traditional DOM</p>
            <p className="my-3">
              The document object model(DOM) is representation of the html
              structure of a web page. It defines how elements are organized,
              their attributes and their relationship with each other. Whenever
              there's a change in the application's state or data, the DOM needs
              to be updated to reflect those changes.
            </p>

            <p className="my-3 font-bold">2. Virtual DOM</p>
            <p>
              The virtual DOM is like a lightweight copy or representation of
              actual DOM. It's a javascript object that keeps track of current
              state of the ui. When changes occures in your application, the
              virtual dom is updated instead of directly modifying the actual
              DOM.
            </p>
          </div>

          <div className="layoutBox2">"Ram Ram"</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default VirtualDom;
