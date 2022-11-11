import * as React from "react";

export type WidgetProps = {
    style: React.CSSProperties;
    className: string;
    config?: {
        [key: string]: string | number | boolean;
    };
};

export type Widget = {
    type: string;
    acceptChildren: boolean;
    minWidth: number;
    minHeight: number;
    Component: React.FC<WidgetProps>;
    config?: {
        [key: string]: "string" | "number" | "boolean";
    };
};

const map: { [widgetType: string]: Widget } = {};

export const registerWidget = (widget: Widget) => {
    map[widget.type] = widget;
};

export const getWidget = (widgetType: string): Widget | undefined => {
    return map[widgetType];
};
