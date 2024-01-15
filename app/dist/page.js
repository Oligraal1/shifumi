"use client";
"use strict";
exports.__esModule = true;
var Rules_1 = require("./components/Rules");
var Game_1 = require("./components/Game");
var Header_1 = require("./components/Header");
var Footer_1 = require("./components/Footer");
function Home() {
    return (React.createElement("div", { className: "flex flex-col h-screen overflow-auto mb-12 pb-6" },
        React.createElement(Header_1["default"], null),
        React.createElement("h2", { className: "my-6 mx-auto text-center" }, "Welcome to Shifumi. Let's play together"),
        React.createElement("main", { className: "flex-grow flex flex-col md:flex-row p-4 md:p-8 w-4/5 mx-auto" },
            React.createElement("div", { className: "w-full md:w-2/3 mb-4" },
                React.createElement(Game_1["default"], null)),
            React.createElement("div", { className: "w-full md:w-1/3" },
                React.createElement(Rules_1["default"], null))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
