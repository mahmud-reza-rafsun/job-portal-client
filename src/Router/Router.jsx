import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register";
import SignIn from "../Authentication/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h2>Error pages</h2>,
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
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/jobs/:id',
                element: <PrivetRoute><JobDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/job-apply/:id',
                element: <PrivetRoute>
                    <JobApply />
                </PrivetRoute>
            },
            {
                path: '/my-applications',
                element: <PrivetRoute>
                    <MyApplications />
                </PrivetRoute>
            }
        ]
    }
])

export default router;