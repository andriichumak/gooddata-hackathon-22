import * as React from "react";
import { Widget, WidgetProps } from "./registry";
import classNames from "classnames";
import css from "../dashboard.module.css";
import { InsightView } from "@gooddata/sdk-ui-ext";

const Insight: React.FC<WidgetProps> = ({ className, style, config }) => {
    if (!config?.insightId) {
        return <div>Missing insight ID in the widget config</div>;
    }

    return (
        <div className={classNames(css.insight, className)} style={style}>
            <InsightView insight={config.insightId as string} showTitle={true} />
        </div>
    );
};

export const insightWidget: Widget = {
    type: "insight",
    acceptChildren: false,
    minWidth: 3,
    minHeight: 200,
    Component: Insight,
};
