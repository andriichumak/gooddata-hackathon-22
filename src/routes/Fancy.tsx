import React from "react";
import Page from "../components/Page";
import FlexDashboard from "../flex/FlexDashboard";

const Fancy: React.FC = () => {
    return (
        <Page>
            <FlexDashboard dashboard="fancy" />
        </Page>
    );
};

export default Fancy;
