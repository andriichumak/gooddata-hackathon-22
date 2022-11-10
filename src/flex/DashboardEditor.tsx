import * as React from "react";
import {connect} from "react-redux";
import styles from "./dashboard.module.css";
import {dashboardDataSelector} from "./model/selectors";
import {DashboardV3EditStackState} from "./model/model";

type DashboardEditorProps = {
    data?: DashboardV3EditStackState,
};

const DashboardEditor = (props: DashboardEditorProps) => {
    const [code, setCode] = React.useState<string | undefined>(JSON.stringify(props.data?.widgets, null, "  "));

    React.useEffect(() => {
        setCode(JSON.stringify(props.data?.widgets, null, "  "));
    }, [props.data?.widgets]);

    return <textarea className={styles.area} value={code} onChange={e => setCode(e.target.value)} />;
};

export default connect(dashboardDataSelector)(DashboardEditor);