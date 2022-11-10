export type DashboardV3State = {
    status: null | "loading"
} | {
    status: "error",
    error: string,
} | {
    status: "loaded",
    saving: boolean,
    id: string,
    editStackIndex: number,
    savedStackIndex: number,
    data: DashboardV3EditStackState[],
};

export type DashboardV3EditStackState = {
    rootWidget: string,
    widgets: {[widgetId: string]: DashboardV3WidgetState},
    title: string,
    description?: string,
};

export type DashboardV3WidgetState = ColumnWidget | RowWidget | InsightWidget;

export type ColumnWidget = {
    uuid: string,
    type: "column",
    children: string[],
};

export type RowWidget = {
    uuid: string,
    type: "row",
    children: string[],
};

export type InsightWidget = {
    uuid: string,
    type: "insight",
    children?: string[],
};

export const getDefaultState = (): DashboardV3State => ({
    status: null,
});
