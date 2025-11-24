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
import ParcelForm from "../pages/Parcel/ParcelForm";
import PriceCalculator from "../pages/price/PriceCalculator";
import About from "../pages/about/About";
import Story from "../pages/about/Story";
import Mission from "../pages/about/Mission";
import Success from "../pages/about/Success";
import TeamsOthers from "../pages/about/TeamsOthers";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MyParcels from "../pages/dashboard/my-parcels/MyParcels";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentSuccess from "../pages/dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/dashboard/Payment/PaymentCancelled";


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
                loader: () => fetch('/branches.json').then(res => res.json()),
                element: <RiderForm></RiderForm>
            },
            {
                path: 'send-parcel',
                loader: () => fetch('/branches.json').then(res => res.json()),
                element: <ParcelForm></ParcelForm>
            },
            {
                path: 'price-calculator',
                element: <PriceCalculator></PriceCalculator>
            },
            {
                path: 'about',
                Component: About,
                children: [
                    {
                        index: true,
                        Component: Story
                    },
                    {
                        path: 'mission',
                        Component: Mission
                    },
                    {
                        path: 'success',
                        Component: Success
                    },
                    {
                        path: 'teams-others',
                        Component: TeamsOthers
                    }
                ]
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
    },
    {
        path: '/dashboard',
        Component: DashboardLayouts,
        children: [
            {
                path: 'my-parcels',
                element: <PrivateRoutes> <MyParcels></MyParcels> </PrivateRoutes>
            },
            {
                path: 'payment/:id',
                loader: ({params}) => fetch(`http://localhost:3000/parcels/${params.id}`),
                element: <PrivateRoutes><Payment></Payment> </PrivateRoutes>
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled
            }
        ]
    }
])