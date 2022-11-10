import {DashboardV3State} from "./model";

export const dashboardDataSelector = (state: DashboardV3State) => {
    if (state.status !== "loaded")
        return {};

    return {
        id: state.id,
        data: state.data[state.editStackIndex],
    }
};