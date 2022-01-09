import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Shape } from "react-konva";
export var CTextComponent = function (props) {
    var valign = props.valign, halign = props.halign, text = props.text, x = props.x, y = props.y, fontColor = props.fontColor, fontSize = props.fontSize, fontName = props.fontName, name = props.name;
    var drawText = React.useCallback(function (context, shape) {
        var ctx = context._context;
        ctx.font = (fontSize !== null && fontSize !== void 0 ? fontSize : 12) + "px " + (fontName !== null && fontName !== void 0 ? fontName : "Arial");
        ctx.fillStyle = fontColor !== null && fontColor !== void 0 ? fontColor : "black";
        ctx.textAlign = halign !== null && halign !== void 0 ? halign : "left";
        ctx.textBaseline = valign !== null && valign !== void 0 ? valign : "middle";
        ctx.fillText(text, x, //- widthYAxis + widthTickmarkLines + 5 +
        y // additional 5px distance to end of tickmark
        );
        // (!) Konva specific method, it is very important
        context.fillStrokeShape(shape);
    }, [fontName, fontColor, fontSize, halign, valign, x, y, text]);
    return _jsx(Shape, { name: name, listening: false, sceneFunc: drawText }, void 0);
};
export var CText = React.memo(CTextComponent);
//# sourceMappingURL=CText.js.map