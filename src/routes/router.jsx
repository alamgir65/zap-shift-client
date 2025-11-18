import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";

export const router = createBrowserRouter([
    {
        path : '/',
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/coverage',
                loader: ()=> fetch('/branches.json').then(res => res.json()),
                Component: Coverage
            }
        ]
    }
])