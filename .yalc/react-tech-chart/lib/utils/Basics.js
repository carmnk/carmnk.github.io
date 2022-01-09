/** Null/Undefined  */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var isNullish = function (val) {
    if (val === undefined || val === null)
        return true;
    if (typeof val === "number")
        if (isNaN(val))
            return true;
    return false;
};
/** Number utils */
export var getDecimals = function (val) {
    if (Math.floor(val) === val)
        return 0;
    return val.toString().split(".")[1].length || 0;
};
// Object / Array utils
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var includesOne = function (array) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var res = false;
    params.forEach(function (param) {
        if (array.includes(param))
            res = true;
    });
    return res;
};
//# sourceMappingURL=Basics.js.map