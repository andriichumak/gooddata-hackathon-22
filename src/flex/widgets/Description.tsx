import * as React from "react";
import { Widget, WidgetProps } from "./registry";
import classNames from "classnames";
import css from "../dashboard.module.css";

const Description: React.FC<WidgetProps> = ({ className, style, config }) => {
    return (
        <div className={classNames(css.description, className)} style={style}>
            <h3>{config?.title}</h3>
            <p>{config?.description}</p>
        </div>
    );
};

export const descriptionWidget: Widget = {
    type: "description",
    acceptChildren: false,
    minWidth: 3,
    minHeight: 200,
    Component: Description,
};
