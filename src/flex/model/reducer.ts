import {DashboardV3EditStackState, DashboardV3State, getDefaultState} from "./model";
import {Reducer} from "redux";
import { v4 as uuidv4 } from 'uuid';
import {
    ADD_WIDGET,
    LOAD_DASHBOARD,
    LOADED_DASHBOARD,
    REDO, REMOVE_WIDGET, RENAME_DASHBOARD,
    SAVE_DASHBOARD_DONE,
    SAVE_DASHBOARD_ERROR,
    SAVE_DASHBOARD_START,
    UNDO, UNLOAD_DASHBOARD,
} from "./constants";

const pushStackItem = (state: DashboardV3State, editFn: (stackItem: DashboardV3EditStackState) => DashboardV3EditStackState | undefined, replaceHistoryStep = false): DashboardV3State => {
    if (state.status !== "loaded" || state.saving)
        return state;

    const newItem = editFn(state.data[state.editStackIndex]);

    if (!newItem)
        return state;

    return {
        ...state,
        savedStackIndex: state.savedStackIndex + 1, // TODO - fix this
        editStackIndex: 0,
        data: [
            newItem,
            // Slice the items based on current stack index, override
            // Any newer entries
            ...state.data.slice(Math.max(0, state.editStackIndex - (replaceHistoryStep ? 1 : 0))), // TODO test this logic
        ].slice(0, 29), // Limit the stack to 30 items
    };
};

export const reducer: Reducer<DashboardV3State, any> = (state = getDefaultState(), action) => {
    switch (action.type) {
        case LOAD_DASHBOARD:
            return {
                status: "loading",
            };
        case LOADED_DASHBOARD:
            return {
                status: "loaded",
                saving: false,
                id: action.dashboardId,
                editStackIndex: 0,
                savedStackIndex: 0,
                data: [
                    action.dashboard,
                ],
            };
        case UNLOAD_DASHBOARD:
            return {
                status: null,
            };
        case SAVE_DASHBOARD_START:
            return {
                ...state,
                saving: true,
            };
        case SAVE_DASHBOARD_DONE:
            if (state.status !== "loaded")
                return state;

            return {
                ...state,
                saving: false,
                savedStackIndex: state.editStackIndex,
            };
        case SAVE_DASHBOARD_ERROR:
            return {
                ...state,
                saving: false,
            };
        case UNDO:
            if (state.status !== "loaded")
                return state;

            return {
                ...state,
                editStackIndex: Math.min(state.editStackIndex + 1, state.data.length - 1),
            };
        case REDO:
            if (state.status !== "loaded")
                return state;

            return {
                ...state,
                editStackIndex: Math.max(state.editStackIndex - 1, 0),
            };
        case RENAME_DASHBOARD:
            return pushStackItem(state, prevItem => {
                if (action.title === prevItem.title)
                    return;

                return {
                    ...prevItem,
                    title: action.title,
                };
            }, action.replaceHistoryStep);
        case ADD_WIDGET:
            return pushStackItem(state, prevItem => {
                const newId = uuidv4();

                return {
                    ...prevItem,
                    widgets: {
                        ...prevItem.widgets,
                        [action.parentId]: {
                            ...prevItem.widgets[action.parentId],
                            children: [...(prevItem.widgets[action.parentId].children ?? []).splice(action.index, 0, newId)],
                        },
                        [newId]: {
                            ...action.child,
                            uuid: newId,
                        },
                    },
                };
            }, action.replaceHistoryStep);
        case REMOVE_WIDGET:
            return pushStackItem(state, prevItem => {
                if (action.widgetId === prevItem.rootWidget)
                    return;

                return {
                    ...prevItem,
                    widgets: Object.fromEntries(Object.entries(prevItem.widgets).filter(([widgetId]) => {
                        // Remove the widget from this object
                        return widgetId !== action.widgetId;
                    }).map(([widgetId, widget]) => {
                        // Remove the widget from parent's children
                        if (widget.children?.includes(action.widgetId)) {
                            return [widgetId, {
                                ...widget,
                                children: widget.children.filter(id => id !== action.widgetId),
                            }];
                        }
                        return [widgetId, widget];
                    })),
                };
            }, action.replaceHistoryStep);
        default:
            return state;
    }
};
