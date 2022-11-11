import * as React from "react";
import { connect } from "react-redux";
import styles from "./dashboard.module.css";
import { dashboardDataSelector } from "./model/selectors";
import { DashboardV3EditStackState } from "./model/model";
import { Dispatch } from "redux";
import { setWidgets } from "./model/actions";

type DashboardEditorProps = {
    data?: DashboardV3EditStackState;
    dispatch: Dispatch;
};

const DashboardEditor = (props: DashboardEditorProps) => {
    const [code, setCode] = React.useState<string | undefined>(
        JSON.stringify(props.data?.widgets, null, "  "),
    );

    React.useEffect(() => {
        setCode(JSON.stringify(props.data?.widgets, null, "  "));
    }, [props.data?.widgets]);

    const applyChanges = () => {
        if (!code) return;

        props.dispatch(setWidgets(JSON.parse(code)));
    };

    return (
        <>
            <textarea className={styles.area} value={code} onChange={(e) => setCode(e.target.value)} />
            <button type="button" onClick={applyChanges}>
                Apply
            </button>
        </>
    );
};

export default connect(dashboardDataSelector)(DashboardEditor);
