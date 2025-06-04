import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import About from "../Pages/About";
import PrivetRoute from "./PrivetRoute";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/about',
                element: <PrivetRoute><About /></PrivetRoute>
            },
            {
                path: '/jobs/:id',
                element: <PrivetRoute><JobDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/job-apply/:id',
                element: <PrivetRoute><JobApply /></PrivetRoute>
            },
            {
                path: '/my-applications',
                element: <PrivetRoute><MyApplications /></PrivetRoute>
            },
            {
                path: '/add-job',
                element: <PrivetRoute><AddJob /></PrivetRoute>
            }
        ]
    }
])

export default router;