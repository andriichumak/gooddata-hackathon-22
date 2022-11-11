import React from "react";
import Page from "../components/Page";
import FlexDashboard from "../flex/FlexDashboard";

const Simple: React.FC = () => {
    return (
        <Page>
            <FlexDashboard dashboard="simple" />
        </Page>
    );
};

export default Simple;
