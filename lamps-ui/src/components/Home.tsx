import React, { useEffect, useState } from "react"

import { type Lamp } from "../open-api"
import lampApi from "./lampApi"

function Home() {
    const [lamps, setLamps] = useState<Lamp[]>([])

    useEffect(() => {
        async function getAllLamps() {
            const allLamps = await lampApi.listAllLamps()

            setLamps(allLamps)
        }

        void getAllLamps()
    }, [setLamps])

    const lampCards = lamps.map((lamp) => (
        <div key={lamp.id}>
            <h1>{lamp.id}</h1>
            <p>{lamp.name}</p>
        </div>
    ))

    return <div>{lampCards}</div>
}

export default Home
