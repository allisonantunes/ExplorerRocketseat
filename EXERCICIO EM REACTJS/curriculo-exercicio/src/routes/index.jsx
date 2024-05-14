import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./app.routes";

export function Routes() {
    return(
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}