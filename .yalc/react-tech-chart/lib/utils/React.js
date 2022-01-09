var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import isDeepEqual from "lodash/isEqual";
import { isNullish } from "./Basics";
var modifyStateProp = function (src, path, newValue, mode) {
    if (typeof src !== "object")
        return null;
    var target = Array.isArray(src) ? __spreadArray([], src, true) : __assign({}, src); //_.cloneDeep(src);
    var srcPointer = src;
    var targetPointer = target;
    try {
        path.forEach(function (pathStep, pathStepIdx) {
            if (!(pathStep in srcPointer) || (typeof pathStep !== "number" && typeof pathStep !== "string")) {
                target = null;
                throw new Error("path at position ".concat(pathStepIdx, " '").concat(pathStep, "' not found in src object/array -1"));
            }
            if (pathStepIdx < path.length - 1) {
                if ((typeof pathStep === "number" && /*!Array.isArray(targetPointer) ||*/ !Array.isArray(srcPointer)) ||
                    (typeof pathStep === "string" && typeof srcPointer !== "object") /*|| typeof targetPointer !== "object")*/) {
                    target = null;
                    throw new Error("path at position ".concat(pathStepIdx, " '").concat(pathStep, "' not found in src object/array -2"));
                }
                if (Array.isArray(srcPointer) && typeof pathStep === "number") {
                    targetPointer[pathStep] = Array.isArray(srcPointer[pathStep])
                        ? __spreadArray([], srcPointer[pathStep], true) : __assign({}, srcPointer[pathStep]);
                }
                else
                    targetPointer[pathStep] = Array.isArray(srcPointer[pathStep])
                        ? __spreadArray([], srcPointer[pathStep], true) : __assign({}, srcPointer[pathStep]);
                if (mode === "remove" && pathStepIdx === path.length - 2) {
                    var lastPath = path[path.length - 1];
                    if (typeof lastPath === "number" && Array.isArray(srcPointer[pathStep])) {
                        targetPointer[pathStep] = __spreadArray(__spreadArray([], srcPointer[pathStep].slice(0, path[path.length - 1]), true), srcPointer[pathStep].slice(lastPath + 1), true);
                    }
                    else if (typeof lastPath === "string" && typeof srcPointer[pathStep]) {
                        var _a = srcPointer[pathStep], _b = lastPath, out = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                        targetPointer[pathStep] = __assign({}, rest);
                    }
                }
                else
                    targetPointer = targetPointer[pathStep];
                srcPointer = srcPointer[pathStep];
            }
            else {
                if (mode !== "remove") {
                    if (!(pathStep in srcPointer) && mode !== "add") {
                        target = null;
                        throw new Error("path at position ".concat(pathStepIdx, " '").concat(pathStep, "' not found in src object/array -3"));
                    }
                    if (mode === "add" && Array.isArray(srcPointer[pathStep]))
                        targetPointer[pathStep] = __spreadArray(__spreadArray([], srcPointer[pathStep], true), [newValue], false);
                    else
                        targetPointer[pathStep] = newValue;
                    // else delete targetPointer[pathStep];
                }
            }
        });
    }
    catch (err) {
        console.error("Error at setStateProp(): ", err);
        return null;
    }
    return target;
};
export var setStateProp = function (src, path, newValue) {
    return modifyStateProp(src, path, newValue, "edit");
};
export var addStateProp = function (src, path, newValue) {
    return modifyStateProp(src, path, newValue, "add");
};
export var removeStateProp = function (src, path) { return modifyStateProp(src, path, null, "remove"); };
export var getStateProp = function (src, path) {
    if (typeof src !== "object")
        return null;
    var pointer = src;
    try {
        path.forEach(function (pathStep, pathStepIdx) {
            if (!(pathStep in pointer) || (typeof pathStep !== "number" && typeof pathStep !== "string")) {
                throw new Error("path at position ".concat(pathStepIdx, " '").concat(pathStep, "' not found in src object/array -1"));
            }
            pointer = pointer[pathStep];
        });
        return pointer;
    }
    catch (err) {
        console.error("Error at getStateProp(): ", err);
    }
};
export function mergeRefs(refs) {
    return function (value) {
        refs.forEach(function (ref) {
            if (typeof ref === "function") {
                ref(value);
            }
            else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
export var useReactiveInfo2 = function (dependencies) {
    var prevDepsRef = React.useRef(dependencies);
    var prevDeps = prevDepsRef.current;
    // const prevDeps = cloneDeep(prevDepsRef.current);
    var getSubelementsInfo = function (dep, prevDep) {
        var changedSubelements = Array.isArray(dep) && Array.isArray(prevDep) && dep.length > 0 && prevDep.length > 0
            ? dep.map(function (depSub, dsIdx) {
                return {
                    idx: dsIdx,
                    // value: depSub,
                    // prevValue: prevDep[dsIdx],
                    type: Array.isArray(depSub) ? "array" : typeof depSub,
                    hasChanged: depSub !== prevDep[dsIdx],
                    hasDeepChanged: !isDeepEqual(depSub, prevDep[dsIdx]),
                    changedSubelements: typeof depSub === "object" &&
                        typeof prevDep[dsIdx] === "object" &&
                        !isNullish(depSub) &&
                        !isNullish(prevDep[dsIdx])
                        ? getSubelementsInfo(depSub, prevDep[dsIdx])
                        : null,
                };
            })
            : typeof dep === "object" && typeof prevDep === "object" && !isNullish(dep) && !isNullish(prevDep)
                ? __assign({}, Object.entries(dep).map(function (_a) {
                    var key = _a[0], val = _a[1];
                    return {
                        key: key,
                        value: val,
                        prevValue: prevDep === null || prevDep === void 0 ? void 0 : prevDep[key],
                        type: Array.isArray(val) ? "array" : typeof val,
                        hasChanged: val !== prevDep[key],
                        hasDeepChanged: !isDeepEqual(val, prevDep[key]),
                        changedSubelements: typeof dep[key] === "object" &&
                            typeof prevDep[key] === "object" &&
                            !isNullish(dep[key]) &&
                            !isNullish(prevDep[key])
                            ? getSubelementsInfo(dep[key], prevDep[key])
                            : null,
                    };
                })) : null;
        return changedSubelements;
    };
    var delta = dependencies.map(function (dep, dIdx) {
        var prevDep = prevDeps[dIdx];
        var hasChanged = dep !== prevDep;
        var hasDeepChanged = !isDeepEqual(dep, prevDep);
        var changedSubelements = getSubelementsInfo(dep, prevDep);
        return {
            hasChanged: hasChanged,
            hasDeepChanged: hasDeepChanged,
            changedSubelements: changedSubelements,
            value: dependencies,
            prevValue: prevDeps,
        };
    });
    React.useEffect(function () {
        prevDepsRef.current = dependencies;
    }, [dependencies]);
    return delta;
};
//# sourceMappingURL=React.js.map