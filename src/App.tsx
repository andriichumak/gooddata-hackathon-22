import { BackendProvider } from "@gooddata/sdk-ui";
import { Provider as ReduxProvider } from "react-redux";

import AppRouter from "./routes/AppRouter";
import { useAuth } from "./contexts/Auth";
import { WorkspaceListProvider } from "./contexts/WorkspaceList";
import { store } from "./flex/model/store";

function App() {
    const { backend } = useAuth();

    return (
        <ReduxProvider store={store}>
            <BackendProvider backend={backend}>
                <WorkspaceListProvider>
                    <AppRouter />
                </WorkspaceListProvider>
            </BackendProvider>
        </ReduxProvider>
    );
}

export default App;
