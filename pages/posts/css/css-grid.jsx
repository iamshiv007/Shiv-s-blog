import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import { BlogContext } from "@/contextApi/blogContext";
import Head from "next/head";
import React, { Fragment, useContext } from "react";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import MobileNavbar from "@/components/mobileNavbar";

const CssGrid = () => {
  const { dark: myDark } = useContext(BlogContext);

  return (
    <Fragment>
      <Head>
        <title>CSS Grid</title>
      </Head>
      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="min-h-[92vh] gap-x-7 dark:bg-gray-900 sm:dark:bg-gray-700 transition-all duration-1000 p-4 md:p-8">
          <h1 className="text-3xl font-bold bg-blue-400 dark:bg-blue-800 p-2 rounded-md">
            Css-Grid
          </h1>
          <ExampleOne myDark={myDark} />
          <ExampleTwo myDark={myDark} />
          <ExampleThree myDark={myDark} />
        </div>
      </Theme>
    </Fragment>
  );
};

export default CssGrid;

const ExampleOne = ({ myDark }) => {
  const codeString1 = `grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr`;
  const codeString2 = `grid-template-columns: repeat(7, 1fr)`;

  return (
    <>
      <p className="text-2xl pb-2 mt-4">Example 1</p>

      <SyntaxHighlighter language="css" style={myDark ? dark : github}>
        {codeString1}
      </SyntaxHighlighter>
      <p className="text-center">OR</p>
      <SyntaxHighlighter language="css" style={myDark ? dark : github}>
        {codeString2}
      </SyntaxHighlighter>

      <div className="grid1 mt-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

const ExampleTwo = ({ myDark }) => {
  const codeString1 = `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`;

  return (
    <>
      <p className="text-2xl pb-2 mt-8">Example 2</p>

      <SyntaxHighlighter language="css" style={myDark ? dark : github}>
        {codeString1}
      </SyntaxHighlighter>

      <div className="grid2 mt-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

const ExampleThree = ({ myDark }) => {
  const codeString1 = `  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 200px);`;

  const codeString2 = `grid-column: 1/3;
grid-row: 1/3;`;

  const codeString3 = `grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;`;

  const codeString4 = `grid-column: 3/6;`;

  const codeString5 = `grid-column: 1/3;
grid-row: 3/4;`;

  const codeString6 = `grid-column: 3/5;
grid-row: 2/4;`;

  return (
    <>
      <p className="text-2xl pb-2 mt-8">Example 3</p>

      <SyntaxHighlighter language="css" style={myDark ? dark : github}>
        {codeString1}
      </SyntaxHighlighter>

      <div className="grid3 mt-5">
        <div>
          {" "}
          <SyntaxHighlighter language="css" style={myDark ? dark : github}>
            {codeString2}
          </SyntaxHighlighter>
          <p className="text-center">OR</p>
          <SyntaxHighlighter language="css" style={myDark ? dark : github}>
            {codeString3}
          </SyntaxHighlighter>
        </div>
        <div>
          <SyntaxHighlighter language="css" style={myDark ? dark : github}>
            {codeString4}
          </SyntaxHighlighter>
        </div>
        <div>
          <SyntaxHighlighter language="css" style={myDark ? dark : github}>
            {codeString5}
          </SyntaxHighlighter>
        </div>
        <div>
          <SyntaxHighlighter language="css" style={myDark ? dark : github}>
            {codeString6}
          </SyntaxHighlighter>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
