import React from "react"
import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return <p>😂</p>
}

export default ErrorPage
