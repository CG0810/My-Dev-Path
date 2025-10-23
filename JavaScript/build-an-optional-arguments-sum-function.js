

function addTogether(a, b) {
    const isNum = num => typeof num === 'number' ? num : undefined;
    if (arguments.length === 2) {
        const a = isNum(arguments[0]);
        const b = isNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }

    } else if (arguments.length === 1) {
        const firstArg = isNum(arguments[0]);
        if (firstArg === undefined) {
            return undefined;
        } else {
            return function (secondArg) {
                return addTogether(firstArg, secondArg);
            };
        }
    }
}
    console.log(addTogether(2, 3));
    console.log(addTogether(2)(3));
    console.log(addTogether("http://bit.ly/IqT6zt"));
    console.log(addTogether(2, "3"));
    console.log(addTogether(2)([3]));
    console.log(addTogether(2, undefined)); 

