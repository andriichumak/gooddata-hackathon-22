import * as React from "react";
import { Widget, WidgetProps } from "./registry";
import classNames from "classnames";
import css from "../dashboard.module.css";

const Row: React.FC<WidgetProps> = ({ className, style, children }) => {
    return (
        <div className={classNames(css.row, className)} style={style}>
            {children}
        </div>
    );
};

export const rowWidget: Widget = {
    type: "row",
    acceptChildren: true,
    minWidth: 3,
    minHeight: 200,
    Component: Row,
};
