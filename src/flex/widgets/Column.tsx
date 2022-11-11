import * as React from "react";
import { Widget, WidgetProps } from "./registry";
import classNames from "classnames";
import css from "../dashboard.module.css";

const Column: React.FC<WidgetProps> = ({ className, style, children }) => {
    return (
        <div className={classNames(css.column, className)} style={style}>
            {children}
        </div>
    );
};

export const columnWidget: Widget = {
    type: "column",
    acceptChildren: true,
    minWidth: 3,
    minHeight: 200,
    Component: Column,
};
