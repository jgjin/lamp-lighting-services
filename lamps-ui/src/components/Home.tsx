import React, { useEffect, useState } from "react"

import { type Lamp } from "../open-api"
import lampApi from "./lampApi"
import LampCard from "./LampCard"

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
        <LampCard key={lamp.id} {...lamp} />
    ))

    return (
        <div className="flex justify-center my-12">
            <div className="flex flex-col space-y-4 w-fit">{lampCards}</div>
        </div>
    )
}

export default Home
