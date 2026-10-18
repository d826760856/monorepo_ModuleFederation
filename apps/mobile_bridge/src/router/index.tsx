import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Mobile_project2App } from '../remotes/mp2';

const router = createBrowserRouter([
    { path: '/', element: <App></App> },
    { path: '/remote1/*', element: <Mobile_project2App basename="/remote1" /> }
])
export default router