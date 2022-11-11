import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Simple from "./Simple";
import Fancy from "./Fancy";
import styles from "./AppRouter.module.scss";

const AppRouter: React.FC = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/" component={Simple} />
                    <Route exact path="/fancy" component={Fancy} />
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
