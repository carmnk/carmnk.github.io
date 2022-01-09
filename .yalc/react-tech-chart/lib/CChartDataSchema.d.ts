export declare const singleChartDataSchema: {
    type: string;
    properties: {
        data: {
            type: string;
            nullable: boolean;
            minItems: number;
            items: {
                type: string;
                nullable: boolean;
                properties: {
                    date: {
                        type: string;
                        nullable: boolean;
                    };
                    open: {
                        type: string;
                        nullable: boolean;
                    };
                    high: {
                        type: string;
                        nullable: boolean;
                    };
                    low: {
                        type: string;
                        nullable: boolean;
                    };
                    close: {
                        type: string;
                        nullable: boolean;
                    };
                };
                required: string[];
            };
        };
        name: {
            type: string;
            nullable: boolean;
        };
    };
    required: string[];
};
export declare const chartDataSchema: {
    type: string;
    minItems: number;
    items: {
        type: string;
        properties: {
            data: {
                type: string;
                nullable: boolean;
                minItems: number;
                items: {
                    type: string;
                    nullable: boolean;
                    properties: {
                        date: {
                            type: string;
                            nullable: boolean;
                        };
                        open: {
                            type: string;
                            nullable: boolean;
                        };
                        high: {
                            type: string;
                            nullable: boolean;
                        };
                        low: {
                            type: string;
                            nullable: boolean;
                        };
                        close: {
                            type: string;
                            nullable: boolean;
                        };
                    };
                    required: string[];
                };
            };
            name: {
                type: string;
                nullable: boolean;
            };
        };
        required: string[];
    };
};
