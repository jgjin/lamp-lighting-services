import React from "react"
import { createBrowserRouter } from "react-router-dom"

import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage"
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
])

export default router
