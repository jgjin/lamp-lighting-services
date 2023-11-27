import React from "react"

import { type Lamp } from "../open-api"

function LampCard({ id, name, imageUrl }: Lamp) {
    // TODO(jgjin): Collect span classes into single class and re-use
    return (
        <a className="max-w-sm hover:bg-gray-100 overflow-hidden rounded shadow" href={`/lamps/${id}`}>
            {Boolean(imageUrl) && <img className="w-full" src={imageUrl} alt={name} />}
            <div className="px-6 py-2">
                <div className="font-bold text-xl">Lamp {id}: {name}</div>
            </div>
            <div className="px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#lamp</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#lighting</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#services</span>
            </div>
        </a>

    )
}

export default LampCard
