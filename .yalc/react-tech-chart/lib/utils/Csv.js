var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { parse } from "csv-parse/lib/sync";
export function parseCsvFileObj(data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, data.text().then(function (dataString) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                        var rowDelimiter = [
                            { chars: "\r\n", amt: (_b = (_a = dataString.match(/\r\n/gm)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0 },
                            { chars: "\n", amt: (_d = (_c = dataString.match(/\n/gm)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 },
                            { chars: "\r", amt: (_f = (_e = dataString.match(/\r/gm)) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0 },
                        ];
                        var rowDelimiterAmts = rowDelimiter.map(function (val) { return val.amt; });
                        var maxAmtRowDelimiterIdx = rowDelimiterAmts.indexOf(Math.max.apply(Math, rowDelimiterAmts));
                        var guessedRowDelimiter = rowDelimiter[maxAmtRowDelimiterIdx].chars;
                        var rows = dataString.split(guessedRowDelimiter);
                        // only first line is checked for delimiter
                        var delimiter = [
                            { chars: ",", amt: (_h = (_g = rows[0].match(/,/gm)) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : 0 },
                            { chars: ";", amt: (_k = (_j = rows[0].match(/;/gm)) === null || _j === void 0 ? void 0 : _j.length) !== null && _k !== void 0 ? _k : 0 },
                        ];
                        var delimiterAmts = delimiter.map(function (del) { return del.amt; });
                        var maxAmtDelimiterIdx = delimiterAmts.indexOf(Math.max.apply(Math, delimiterAmts));
                        var guessedDelimiter = delimiter[maxAmtDelimiterIdx].chars;
                        // last delimiter is likely decimal delimiter
                        var amtDecDel = { dots: 0, commas: 0 };
                        rows.forEach(function (row) {
                            row.split(guessedDelimiter).forEach(function (cell) {
                                var lastDot = cell.lastIndexOf(".");
                                var lastComma = cell.lastIndexOf(",");
                                if (lastDot !== -1 && lastComma !== -1) {
                                    if (lastDot > lastComma)
                                        amtDecDel.dots++;
                                    else
                                        amtDecDel.commas++;
                                }
                                else if (lastDot !== -1 && lastComma === -1)
                                    amtDecDel.dots++;
                                else if (lastDot === -1 && lastComma !== -1)
                                    amtDecDel.commas++;
                            });
                        });
                        var isCommaDecDel = amtDecDel.dots < amtDecDel.commas;
                        var isCommaDigitSeparator = amtDecDel.dots > amtDecDel.commas && amtDecDel.commas > 0;
                        var newDataString = isCommaDecDel
                            ? dataString.replaceAll(".", "").replaceAll(",", ".")
                            : isCommaDigitSeparator
                                ? dataString.replaceAll(",", "")
                                : dataString;
                        var parseRes = parse(newDataString.trim(), {
                            delimiter: guessedDelimiter,
                            record_delimiter: guessedRowDelimiter,
                            cast: true,
                            trim: true,
                            cast_date: true,
                        }).map(function (dataset) { return ({
                            date: dataset[0],
                            open: dataset[1],
                            high: dataset[2],
                            low: dataset[3],
                            close: dataset[4],
                            volume: dataset[5],
                        }); });
                        parseRes.shift();
                        return parseRes;
                    })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
//# sourceMappingURL=Csv.js.map