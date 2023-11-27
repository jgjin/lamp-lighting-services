import React from "react"

import { type Lamp } from "../open-api"

function Home() {
    const lamps: Lamp[] = [
        {
            id: 1,
            name: "desk",
        },
        {
            id: 2,
            name: "floor",
        },
    ]

    const lampCards = lamps.map((lamp) => (
        <div key={lamp.id}>
            <h1>{lamp.id}</h1>
            <p>{lamp.name}</p>
        </div>
    ))

    return <div>{lampCards}</div>
}

export default Home
