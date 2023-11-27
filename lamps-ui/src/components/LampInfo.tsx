import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { type Lamp } from "../open-api"
import lampApi from "./lampApi"

function LampInfo() {
    const { lampId } = useParams()
    const [lamp, setLamp] = useState<Lamp>({})

    useEffect(() => {
        async function getLamp() {
            if (lampId !== undefined) {
                setLamp(await lampApi.getLamp(parseInt(lampId)))
            }
        }

        void getLamp()
    }, [lampId, setLamp])

    return (
        <div>
            <h1>{lamp.id}</h1>
            <p>{lamp.name}</p>
        </div>
    )
}

export default LampInfo
