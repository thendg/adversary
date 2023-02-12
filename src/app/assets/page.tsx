"use client";
import { ImmutableX, Config } from '@imtbl/core-sdk';
import {useRef, useState} from 'react';

const config = Config.SANDBOX; // Or Config.PRODUCTION
const client = new ImmutableX(config);

export default function Assets() {
    const [user, setUser] = useState('');
    const [tokens, setTokens] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    //gets the data about tokens the user holds
     const getListBalances = async () => {
        if (!inputRef.current) return

        //console.log(inputRef.current.value);

        const owner = inputRef.current.value;
        await client.listBalances(
            {owner, }
        ).then(
            (response) => {
                var formatted = '';
                for(var i = 0; i < response.result.length; i++) {
                    formatted += 'symbol: ' + response.result[i].symbol + '\n';
                    formatted += 'balance: ' + response.result[i].balance + '\n';
                    formatted += 'withdrawable: ' + response.result[i].balance + '\n';
                    formatted += '\n';
                }
                setTokens(formatted);
            }
        ).catch((e) => setTokens(e.message));
        inputRef.current.value = '';

    }

    
    return(
        <div className="font-bungee w-full h-screen flex flex-col justify-center text-5xl text-bold bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
            <input
                    name="user"
                    id="user"
                    placeholder="Username"
                    ref={inputRef}
                    className="text-center ml-32 mr-32 text-2xl"
                />
            <button onClick={() => getListBalances()} className="text-2xl ml-32 mr-32">Submit</button>
            <div className="flex flex-col justify-center text-2xl text-bold text-center">
                <h1>Tokens:</h1>  
                <p className="whitespace-pre-line">{tokens}</p>
            </div>
        </div>
    );
}