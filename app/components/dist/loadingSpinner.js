"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_spinners_1 = require("react-spinners");
var LoadingSpinner = function (_a) {
    var loading = _a.loading;
    return (react_1["default"].createElement("div", { className: "my-4 mx-auto text-center" },
        react_1["default"].createElement(react_spinners_1.PacmanLoader, { color: "#00cdcd", className: "block mx-auto" })));
};
exports["default"] = LoadingSpinner;
