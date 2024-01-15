"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var RandomNameGenerator_1 = require("./RandomNameGenerator");
var Player = function (_a) {
    var player = _a.player, choice = _a.choice, onChoose = _a.onChoose, setComputerName = _a.setComputerName;
    return (react_1["default"].createElement("div", { className: "sm:flex sm:flex-col sm:items-center" },
        react_1["default"].createElement("h2", { className: "mb-4 text-center" },
            "Hello ",
            player),
        react_1["default"].createElement(RandomNameGenerator_1["default"], { setComputerName: setComputerName }),
        react_1["default"].createElement("p", { className: "block mb-2 text-center sm:w-full" }, "Make your choice:"),
        react_1["default"].createElement("div", { className: "flex flex-col sm:flex-row sm:justify-center sm:space-x-4" },
            react_1["default"].createElement("button", { onClick: function () { return onChoose && onChoose("rock"); }, className: "flex items-center justify-center mb-2 sm:mb-0" },
                react_1["default"].createElement(image_1["default"], { src: "/images/pierre.png", alt: "rock", width: 50, height: 50, className: "mx-auto" // Ajout de cette classe pour centrer les images
                 }),
                " ",
                "Rock"),
            react_1["default"].createElement("button", { onClick: function () { return onChoose && onChoose("paper"); }, className: "flex items-center justify-center mb-2 sm:mb-0" },
                react_1["default"].createElement(image_1["default"], { src: "/images/feuille.png", alt: "paper", width: 50, height: 50, className: "mx-auto" // Ajout de cette classe pour centrer les images
                 }),
                " ",
                "Paper"),
            react_1["default"].createElement("button", { onClick: function () { return onChoose && onChoose("scissors"); }, className: "flex items-center justify-center mb-2 sm:mb-0" },
                react_1["default"].createElement(image_1["default"], { src: "/images/ciseaux.png", alt: "scissors", width: 50, height: 50, className: "mx-auto" // Ajout de cette classe pour centrer les images
                 }),
                " ",
                "Scissors"))));
};
exports["default"] = Player;
