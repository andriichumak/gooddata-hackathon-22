import * as React from 'react';
import {connect} from "react-redux";
import styles from "./dashboard.module.css";
import {DashboardV3State} from "./model/model";
import {Dispatch} from "redux";
import {redo, renameDashboard, saveDashboard, undo} from "./model/actions";

type DashboardHeaderProps = {
    title: string,
    canEdit: boolean,
    canUndo: boolean,
    canRedo: boolean,
    canSave: boolean,
    dispatch: Dispatch,
}

const DashboardHeader = ({
    title, canEdit, canSave, canUndo, canRedo, dispatch,
}: DashboardHeaderProps) => {
    const rename = React.useCallback(() => {
        const newName = window.prompt("Enter new name for the dashboard", title);

        if (newName) {
            dispatch(renameDashboard(newName));
        }
    }, [dispatch, title]);

    return <section className={styles.header}>
        <h1>{title}</h1>
        <button type="button" disabled={!canEdit} onClick={rename}>Rename</button>
        <button type="button" disabled={!canUndo} onClick={() => dispatch(undo())}>undo</button>
        <button type="button" disabled={!canRedo} onClick={() => dispatch(redo())}>redo</button>
        {/* @ts-ignore */}
        <button type="button" disabled={!canSave} onClick={() => dispatch(saveDashboard())}>Save</button>
    </section>
};

export default connect((state: DashboardV3State) => {
    if (state.status !== "loaded")
        return {
            title: "",
            canEdit: false,
            canUndo: false,
            canRedo: false,
            canSave: false,
        };

    return {
        title: state.data[state.editStackIndex].title,
        canEdit: !state.saving,
        canUndo: state.data.length - 1 > state.editStackIndex,
        canRedo: state.editStackIndex > 0,
        canSave: !state.saving && state.editStackIndex !== state.savedStackIndex,
    };
})(DashboardHeader);
