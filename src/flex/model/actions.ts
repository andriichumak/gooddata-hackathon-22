import {
    ADD_WIDGET,
    LOAD_DASHBOARD,
    LOADED_DASHBOARD,
    REDO,
    REMOVE_WIDGET,
    RENAME_DASHBOARD,
    SAVE_DASHBOARD_DONE,
    SAVE_DASHBOARD_ERROR,
    SAVE_DASHBOARD_START,
    SET_WIDGETS,
    UNDO,
    UNLOAD_DASHBOARD,
} from "./constants";
import { Dispatch } from "redux";
import { DashboardV3EditStackState, DashboardV3State, DashboardV3WidgetState } from "./model";

export const loadDashboard = (dashboardId: string) => async (dispatch: Dispatch) => {
    // Mark a loading state
    dispatch({
        type: LOAD_DASHBOARD,
        dashboardId,
    });

    const res = await fetch(`/api/v1/entities/workspaces/demo_ws/analyticalDashboards/${dashboardId}`);
    const { data } = await res.json();

    const dashboard: DashboardV3EditStackState = {
        title: data.attributes.title,
        description: data.attributes.description,
        rootWidget: data.attributes.content.layout.rootWidget,
        widgets: Object.fromEntries(
            data.attributes.content.layout.widgets.map((widget: any) => [widget.uuid, widget]),
        ),
    };

    dispatch({
        type: LOADED_DASHBOARD,
        dashboardId,
        dashboard,
    });
};

export const unloadDashboard = () => ({
    type: UNLOAD_DASHBOARD,
});

export const undo = () => ({
    type: UNDO,
});

export const redo = () => ({
    type: REDO,
});

export const saveDashboard = () => async (dispatch: Dispatch, getState: () => DashboardV3State) => {
    const state = getState();

    if (state.status !== "loaded" || state.saving || state.editStackIndex === state.savedStackIndex) return;

    const dashboardData = state.data[state.editStackIndex];

    dispatch({ type: SAVE_DASHBOARD_START });

    const res = await fetch(`/api/v1/entities/workspaces/demo_ws/analyticalDashboards/${state.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/vnd.gooddata.api+json",
        },
        body: JSON.stringify({
            data: {
                id: state.id,
                type: "analyticalDashboard",
                attributes: {
                    title: dashboardData.title,
                    description: dashboardData.description,
                    content: {
                        layout: {
                            rootWidget: dashboardData.rootWidget,
                            widgets: Object.entries(dashboardData.widgets).map(([_id, widget]) => widget),
                        },
                    },
                },
            },
        }),
    });

    if (!res.ok) {
        dispatch({ type: SAVE_DASHBOARD_ERROR });
        throw new Error(res.statusText);
    }

    dispatch({ type: SAVE_DASHBOARD_DONE });
};

export const renameDashboard = (newName: string, replace = false) => ({
    type: RENAME_DASHBOARD,
    title: newName,
    replaceHistoryStep: replace,
});

export const addWidget = (
    child: DashboardV3WidgetState,
    parent: DashboardV3WidgetState,
    index: number,
    replace = false,
) => ({
    type: ADD_WIDGET,
    child,
    parentId: parent.uuid,
    index,
    replaceHistoryStep: replace,
});

export const removeWidget = (widget: DashboardV3WidgetState, replace = false) => ({
    type: REMOVE_WIDGET,
    widgetId: widget.uuid,
    replaceHistoryStep: replace,
});

export const moveWidget =
    (child: DashboardV3WidgetState, newParent: DashboardV3WidgetState, newIndex: number, replace = false) =>
    (dispatch: Dispatch) => {
        dispatch(removeWidget(child, replace));
        dispatch(addWidget(child, newParent, newIndex, true));
    };

export const setWidgets = (widgets: { [id: string]: DashboardV3WidgetState }) => ({
    type: SET_WIDGETS,
    widgets,
});
