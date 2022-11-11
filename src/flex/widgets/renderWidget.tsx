import { DashboardV3EditStackState } from "../model/model";
import { getWidget } from "./registry";
import css from "../dashboard.module.css";

export const renderWidget = (widgets: DashboardV3EditStackState["widgets"], widgetId: string) => {
    const widget = widgets[widgetId];

    if (!widget) return <div>No such widget {widgetId}</div>;

    const widgetDefinition = getWidget(widget.type);

    if (!widgetDefinition) return <div>Unknown widget type {widget.type}</div>;

    const { Component } = widgetDefinition;
    const height = widget.size?.height ? Math.max(widget.size?.height, widgetDefinition.minHeight) : "auto";
    const width = widget.size?.width ? Math.max(widget.size?.width, widgetDefinition.minWidth) : 12;

    return (
        <Component style={{ height }} className={css[`width-${width}`]} key={widgetId} config={widget.config}>
            {widgetDefinition.acceptChildren
                ? widget.children?.map((childId) => renderWidget(widgets, childId))
                : null}
        </Component>
    );
};
