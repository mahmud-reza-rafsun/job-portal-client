import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register";
import SignIn from "../Authentication/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApplications from "../Pages/JobApplications/JobApplications";

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
                element: <JobDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/job-applications',
                element: <JobApplications />
            }
        ]
    }
])

export default router;