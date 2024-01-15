"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PlayerNameInput = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = react_1.useState(""), name = _b[0], setName = _b[1];
    var handleInputChange = function (event) {
        setName(event.target.value);
    };
    var handleSubmit = function () {
        if (name.trim() !== "") {
            onSubmit(name);
        }
        else {
            alert("Please enter a valid name.");
        }
    };
    var handleKeyPress = function (event) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };
    return (react_1["default"].createElement("div", { className: "w-4/5 my-4 sm:flex-col sm:items-stretch" },
        react_1["default"].createElement("div", { className: "sm:mr-4" },
            react_1["default"].createElement("label", { htmlFor: "playerName", className: "block text-sm font-medium" }, "Please, let's meet! Enter your name:"),
            react_1["default"].createElement("input", { type: "text", id: "playerName", value: name, onChange: handleInputChange, onKeyPress: handleKeyPress, placeholder: "Your Name", className: "my-4 p-2 block w-1/2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700" })),
        react_1["default"].createElement("div", { className: "mt-2 sm:mt-4" },
            react_1["default"].createElement("button", { onClick: handleSubmit, className: "block" }, "Start Game"))));
};
exports["default"] = PlayerNameInput;
