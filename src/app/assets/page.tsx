"use client";
import TokenSelector from '@/components/TokenSelector';
import { ImmutableX, Config } from '@imtbl/core-sdk';
import {useRef, useState} from 'react';

const config = Config.SANDBOX; // Or Config.PRODUCTION
const client = new ImmutableX(config);

export default function Assets() {
    const [user, setUser] = useState('');
    const [tokens, setTokens] = useState<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [tokenVisibility, setTokenVisibility] = useState(true);

    //gets the data about tokens the user holds
     const getListBalances = async () => {
        if (!inputRef.current) return

        //console.log(inputRef.current.value);

        const owner = inputRef.current.value;
        await client.listBalances(
            {owner, }
        ).then((response) => {
            let arr:any[] = [];
            response.result.forEach((entry) => arr.push(entry));
            setTokens(arr);
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
            <button onClick={() => {getListBalances(); setTokenVisibility(true);}} className="text-2xl ml-32 mr-32">Submit</button>
            <div id="tokens" className="flex flex-col justify-center text-2xl text-bold text-center">
                <h1>Tokens:</h1>  
                {tokenVisibility ? tokens.map((token) => <TokenSelector address={token.token_address} symbol={token.symbol}/>) : null}
            </div>
            <button className="text-2xl ml-32 mr-32" onClick= {() => setTokenVisibility(false)}>Choose</button>
        </div>
    );
}