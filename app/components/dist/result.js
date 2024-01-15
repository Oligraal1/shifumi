"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Result = function (_a) {
    var result = _a.result;
    return (react_1["default"].createElement("div", { className: "text-center mx-auto" },
        react_1["default"].createElement("h2", { className: "text-teal-300 mx-4" }, "Result"),
        result &&
            react_1["default"].createElement("p", { className: "mx-8 my-4 text-lg font-bold" }, result)));
};
exports["default"] = Result;
