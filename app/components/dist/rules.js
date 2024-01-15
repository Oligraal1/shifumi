"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Rules = function () {
    var _a = react_1.useState(false), showRules = _a[0], setShowRules = _a[1];
    return (react_1["default"].createElement("div", { className: "font-mono" },
        react_1["default"].createElement("h2", { className: "text-teal-400 my-4 font-bold text-center" }, "Rules"),
        react_1["default"].createElement("p", { className: "text-center" },
            "Would you like to see the rules?",
            react_1["default"].createElement("span", { className: "cursor-pointer text-teal-300 ml-2", onClick: function () { return setShowRules(!showRules); } },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEye }))),
        showRules && (react_1["default"].createElement("div", { className: "border border-teal-200 rounded my-4 mx-auto max-w-full" },
            react_1["default"].createElement("div", { className: "mx-4 my-4 text-sm" },
                react_1["default"].createElement("p", null, "There are three weapons to choose from: rock, paper, or scissors."),
                react_1["default"].createElement("h3", { className: "my-2" }, "How to win?"),
                react_1["default"].createElement("ul", { className: "pl-2 mb-4" },
                    react_1["default"].createElement("li", null, "Rock crushes scissors."),
                    react_1["default"].createElement("li", null, "Scissors cuts paper."),
                    react_1["default"].createElement("li", null, "Paper covers rock.")),
                react_1["default"].createElement("p", null,
                    "Easy, isn't it ",
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "text-teal-300 ml-2", icon: free_solid_svg_icons_1.faSmileBeam }),
                    "?"))))));
};
exports["default"] = Rules;
