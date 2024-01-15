"use strict";
exports.__esModule = true;
// Importez les composants nécessaires
var react_1 = require("react");
var Player_1 = require("./Player");
var Result_1 = require("./Result");
var PlayerNameInput_1 = require("./PlayerNameInput");
var LoadingSpinner_1 = require("./LoadingSpinner");
var Game = function () {
    var _a = react_1.useState(null), playerName = _a[0], setPlayerName = _a[1];
    var _b = react_1.useState(null), computerName = _b[0], setComputerName = _b[1];
    var _c = react_1.useState(null), playerChoice = _c[0], setPlayerChoice = _c[1];
    var _d = react_1.useState(null), computerChoice = _d[0], setComputerChoice = _d[1];
    var _e = react_1.useState(null), result = _e[0], setResult = _e[1];
    var _f = react_1.useState(true), loading = _f[0], setLoading = _f[1];
    var handlePlayerNameSubmit = function (name) {
        setPlayerName(name);
    };
    var calculateResult = function () {
        if (playerChoice !== null && computerChoice !== null) {
            var player = playerChoice.toLowerCase();
            var computer = computerChoice.toLowerCase();
            if (player === computer) {
                setResult('Tie!');
            }
            else if ((player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')) {
                setResult(playerName + ' Wins!');
            }
            else if ((player === 'scissors' && computer === 'rock') ||
                (player === 'rock' && computer === 'paper') ||
                (player === 'paper' && computer === 'scissors')) {
                setResult(computerName + ' Wins!');
            }
        }
    };
    react_1.useEffect(function () {
        if (playerChoice !== null) {
            var choices = ['Rock', 'Paper', 'Scissors'];
            var randomIndex = Math.floor(Math.random() * choices.length);
            var computerChoice_1 = choices[randomIndex];
            setComputerChoice(computerChoice_1);
        }
    }, [playerChoice]);
    react_1.useEffect(function () {
        if (computerChoice !== null) {
            var timerId_1 = setTimeout(function () {
                calculateResult();
                setLoading(false);
            }, 3000);
            return function () { return clearTimeout(timerId_1); };
        }
    }, [computerChoice]);
    var handlePlayerChoice = function (choice) {
        setPlayerChoice(choice);
    };
    var resetGame = function () {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult(null);
    };
    return (react_1["default"].createElement("div", { className: "font-mono my-4 container mx-auto" }, playerName === null ? (react_1["default"].createElement(PlayerNameInput_1["default"], { onSubmit: handlePlayerNameSubmit })) : result ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Result_1["default"], { result: result }),
        react_1["default"].createElement("div", { className: "mx-auto" },
            react_1["default"].createElement("button", { className: "block mx-auto", onClick: resetGame }, "Play Again")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        !playerChoice && (react_1["default"].createElement(Player_1["default"], { player: playerName, onChoose: handlePlayerChoice, setComputerName: setComputerName })),
        playerChoice && (react_1["default"].createElement("div", { className: "mx-4 text-center" },
            react_1["default"].createElement("p", null,
                "You have chosen ",
                react_1["default"].createElement("span", { className: "text-teal-400" }, playerChoice)),
            computerChoice && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("p", null,
                    computerName,
                    " has chosen",
                    ' ',
                    react_1["default"].createElement("span", { className: "text-pink-400" }, computerChoice)),
                react_1["default"].createElement(LoadingSpinner_1["default"], { loading: loading })))))))));
};
exports["default"] = Game;
