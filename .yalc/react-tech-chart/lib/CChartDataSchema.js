export var singleChartDataSchema = {
    type: "object",
    properties: {
        data: {
            type: "array",
            nullable: false,
            minItems: 2,
            items: {
                type: "object",
                nullable: false,
                properties: {
                    date: {
                        type: "object",
                        nullable: false,
                        // format: "date-time",
                    },
                    open: { type: "number", nullable: false },
                    high: { type: "number", nullable: false },
                    low: { type: "number", nullable: false },
                    close: { type: "number", nullable: false },
                },
                required: ["date", "close"],
            },
        },
        name: { type: "string", nullable: false },
    },
    required: ["data", "name"],
};
export var chartDataSchema = {
    type: "array",
    minItems: 1,
    // additionalItems: true,
    items: singleChartDataSchema,
};
//# sourceMappingURL=CChartDataSchema.js.map