import * as React from "react";
import styles from "./dashboard.module.css";
import { connect } from "react-redux";
import { dashboardDataSelector } from "./model/selectors";
import { DashboardV3EditStackState } from "./model/model";
import { renderWidget } from "./widgets";

type DashboardBodyProps = {
    data?: DashboardV3EditStackState;
};

const DashboardBody: React.FC<DashboardBodyProps> = ({ data }) => {
    if (!data) return <div>I am a loader</div>;

    return <section className={styles.root}>{renderWidget(data.widgets, data.rootWidget)}</section>;
};

export default connect(dashboardDataSelector)(DashboardBody);
