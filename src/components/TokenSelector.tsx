import React from "react"

export default function TokenSelector({address, symbol}: {address: string, symbol: string}) {
    return <div>
            <div className="flex flex-row justify-center mr-64 ml-64">
                <input className= "" type="checkbox"/>
                <label>
                    <h1 className="text-2xl">{symbol}</h1>
                    <h2 className="text-1xl">{address}</h2>
                </label>
            </div>
        </div>
}