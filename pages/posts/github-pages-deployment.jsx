import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import { BlogContext } from "@/contextApi/blogContext";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import MobileNavbar from "@/components/mobileNavbar";

const GithubPagesDeploy = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>React Deployment on Github Pages</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="text-3xl font-bold mt-4 bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
              React Deployment on Github Page
            </h1>

            <div className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
              {" "}
              <strong>Note:- </strong> Before going to deploy a{" "}
              <strong>react app</strong> on Github Pages you should know github
              pages not support packages like <strong>react-router</strong>, so
              you can deploy simple <strong>static site</strong> on github
              pages.
            </div>

            <StepOne myDark={myDark} />
            <StepTwo myDark={myDark} />
            <StepThree myDark={myDark} />
            <StepFour myDark={myDark} />

            <div className="text-center m-5 text-2xl">❤️ Thank You 🙏</div>
          </div>

          <div className="layoutBox2">Hello</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default GithubPagesDeploy;

const StepOne = ({ myDark }) => {
  const codeString = `"homepage": "https://your_github_username.github.io/repo_name",`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        1. Add{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          homepage
        </span>{" "}
        to{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          package.json
        </span>{" "}
        file.
      </div>

      <SyntaxHighlighter language="javascript" style={myDark ? dark : github}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const StepTwo = ({ myDark }) => {
  const codeString1 = `npm install --save gh-pages`;
  const codeString2 = `yarn add gh-pages`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        2. Install{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          gh-pages
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter language="javascript" style={myDark ? dark : github}>
        {codeString1}
      </SyntaxHighlighter>
      <p className="text-center">OR</p>
      <SyntaxHighlighter language="javascript" style={myDark ? dark : github}>
        {codeString2}
      </SyntaxHighlighter>
    </>
  );
};

const StepThree = ({ myDark }) => {
  const codeString = `"predeploy": "npm run build",
"deploy": "gh-pages -d build"`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        3. Add{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          deploy
        </span>{" "}
        to
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          scripts
        </span>{" "}
        in
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          package.json
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter language="javascript" style={myDark ? dark : github}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

const StepFour = ({ myDark }) => {
  const codeString = `npm run deploy`;

  return (
    <>
      <div className="mt-8 mb-3 font-bold text-lg">
        4. Deploy the site by running{" "}
        <span className="text-sm text-bold px-1 dark:bg-zinc-700 bg-zinc-200 rounded-sm">
          npm run deploy
        </span>{" "}
        .
      </div>

      <SyntaxHighlighter language="javascript" style={myDark ? dark : github}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};
