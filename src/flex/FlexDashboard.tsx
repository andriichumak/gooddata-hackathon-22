import {connect} from "react-redux";
import {Dispatch} from "redux";
import React from "react";
import {loadDashboard, unloadDashboard} from "./model/actions";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import DashboardEditor from "./DashboardEditor";
import styles from "./dashboard.module.css";

type FlexDashboardProps = {
    dashboard: string,
    dispatch: Dispatch,
};

const FlexDashboard = (props: FlexDashboardProps) => {
    React.useEffect(() => {
        // @ts-ignore
        props.dispatch(loadDashboard(props.dashboard));

        return () => {props.dispatch(unloadDashboard())};
    }, [props.dispatch, props.dashboard]);

    return <div className={styles.dashboard}>
        <DashboardHeader />
        {/* TODO - filter bar goes here */}
        <DashboardBody />
        <DashboardEditor />
    </div>;
};

export default connect()(FlexDashboard);
