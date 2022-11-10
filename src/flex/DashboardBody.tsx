import * as React from "react";
import styles from "./dashboard.module.css";
import {connect} from "react-redux";
import {dashboardDataSelector} from "./model/selectors";
import {DashboardV3EditStackState} from "./model/model";
import {InsightView} from "@gooddata/sdk-ui-ext";

type DashboardBodyProps = {
    data?: DashboardV3EditStackState,
};

type WidgetProps = {
    details: any,
    renderChild: (id: string) => React.ReactElement,
};

const DashboardBody: React.FC<DashboardBodyProps> = ({data}) => {
    if (!data)
        return <div>I am a loader</div>;

    return <section className={styles.root}>
        {renderWidget(data.widgets, data.rootWidget)}
    </section>;
};

const renderWidget = (widgets: DashboardV3EditStackState["widgets"], widgetId: string) => {
    const widget = widgets[widgetId];

    if (!widget)
        return <div>No such widget {widgetId}</div>;

    const Component = widgetTypeMap[widget.type];

    if (!Component)
        return <div>Unknown widget type {widget.type}</div>;

    return <Component
        key={widgetId}
        details={widget}
        renderChild={renderWidget.bind(renderWidget, widgets)}
    />;
}

const Column: React.FC<WidgetProps> = ({details, renderChild}) => {
    console.log("Column", details);

    return <div className={styles.column}>
        {details.children.map(renderChild)}
    </div>;
};

const Row: React.FC<WidgetProps> = ({details, renderChild}) => {
    console.log("Row", details);

    return <div className={styles.row}>{details.children.map(renderChild)}</div>;
}

const Insight: React.FC<WidgetProps> = ({details}) => {
    console.log("Insight", details);

    return <div className={styles.insight}>
        <InsightView insight={details.insightId} />
    </div>;
};

const widgetTypeMap = {
    row: Row,
    column: Column,
    insight: Insight,
};

export default connect(dashboardDataSelector)(DashboardBody);
