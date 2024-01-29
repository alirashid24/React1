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

// // // using JSX, react element--->
// const jsxheading = (
// <h1>
//     Hello world by jsx
// </h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// // // using react component-->
const Title=()=>(
    <h1>how r u</h1>
);
const num=100;
const HeadingComponent=()=>{
    return (
    <div>
        {jsxheading}         {/*using rect element inside react component */}
        <Title/>            {/*componet composition- component inside component */}
        {Title()}
        {num};
        <h1>Hello world by react componet</h1>
    </div>);
};
const root=ReactDOM.createRoot(document.getElementById( "root"));
root.render(<HeadingComponent/>)
