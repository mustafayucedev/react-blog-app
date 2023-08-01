import { useRoutes } from "react-router-dom";

import Home from "pages/Home";
import CreatePost from "pages/CreatePost";
import Login from "pages/Login";
import ErrorPage from "pages/ErrorPage";


export default function Routes() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/createpost",
            element: <CreatePost />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ])
    return routes
}



