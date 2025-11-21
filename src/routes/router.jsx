import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/home/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Forget from "../pages/auth/forget/Forget";
import PrivateRoutes from "./PrivateRoutes";
import RiderForm from "../pages/rider/RiderForm";

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
            },
            {
                path: 'be-a-rider',
                element: <RiderForm></RiderForm>
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayouts,
        children:[
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'forget',
                Component: Forget
            }
        ]
    }
])