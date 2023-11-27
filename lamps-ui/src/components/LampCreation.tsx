import React, { useState } from "react"

import { type Lamp } from "../open-api"
import lampApi from "./lampApi"

function LampCreation() {
    const [lamp, setLamp] = useState<Lamp>({})

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name
        const value = event.target.value

        setLamp(lamp => ({ ...lamp, [name]: value }))
    }

    // TODO(jgjin): Check misused Promise?
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        await lampApi.createLamp(lamp)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    name="name"
                    value={lamp.name ?? ""}
                    onChange={handleChange}
                />
            </label>
            <label>Image URL:
                <input
                    type="text"
                    name="imageUrl"
                    value={lamp.imageUrl ?? ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default LampCreation
