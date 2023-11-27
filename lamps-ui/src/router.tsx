import React from "react"
import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import LampCreation from "./components/LampCreation"
import LampInfo from "./components/LampInfo"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "lamps/:lampId",
        element: <LampInfo />,
    },
    {
        path: "lamps/create",
        element: <LampCreation />,
    },
])

export default router
