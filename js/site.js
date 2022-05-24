let calc = getCalcTool();

if (calc(3, "+", 2) === 5) console.log("√");
if (calc(3, "-", 2) === 1) console.log("√");
if (calc(3, "*", 2) === 6) console.log("√");
if (calc(3, "/", 2) === 1.5) console.log("√");

function getCalcTool() {
    let local_math = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
    };

    return function (a, operator, b) {
        return local_math[operator](a, b);
    }
}
