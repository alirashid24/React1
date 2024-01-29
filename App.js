// const heading = React.createElement(
//     "h1",
//     { id: "heading" }, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom";
// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" },
//         [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")]),

//     React.createElement("div", { id: "child1" },
//         [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")])])

// console.log(parent);

const jsxheading = (
<h1>
    Hello world by jsx
</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);