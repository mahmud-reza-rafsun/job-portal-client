import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register";
import SignIn from "../Authentication/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplication/ViewApplication";

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
                loader: ({ params }) => fetch(`https://job-portal-server-de.vercel.app/jobs/${params.id}`)
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
            },
            {
                path: '/add-job',
                element: <PrivetRoute>
                    <AddJob />
                </PrivetRoute>
            },
            {
                path: '/my-posted-job',
                element: <PrivetRoute>
                    <MyPostedJobs />
                </PrivetRoute>
            },
            {
                path: '/view-applications/:job_id',
                element: <PrivetRoute>
                    <ViewApplication />,
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-de.vercel.app/job-applications/jobs/${params.job_id}`)
            }
        ]
    }
])

export default router;