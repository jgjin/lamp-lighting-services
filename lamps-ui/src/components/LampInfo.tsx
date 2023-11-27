import React, { useState } from "react"

import { type Lamp } from "../open-api"
import { useParams } from "react-router-dom"

function LampInfo() {
    const { lampId } = useParams()
    const [lamp] = useState<Lamp>({
        id: parseInt(lampId ?? "-420"),
        name: "ceiling",
    })

    return (
        <div>
            <h1>{lamp.id}</h1>
            <p>{lamp.name}</p>
        </div>
    )
}

export default LampInfo
