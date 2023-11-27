import React, { useEffect, useState } from "react"

import { type Lamp } from "../open-api"
import { useParams } from "react-router-dom"
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
