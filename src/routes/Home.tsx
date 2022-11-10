import React from "react";
import {Provider} from "react-redux";

import Page from "../components/Page";

import FlexDashboard from "../flex/FlexDashboard";
import {store} from "../flex/model/store";

const Home: React.FC = () => {
    return <Page>
        <Provider store={store}>
            <FlexDashboard dashboard="flex" />
        </Provider>
    </Page>;
};

export default Home;
