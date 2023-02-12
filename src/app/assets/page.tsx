"use client";
import TokenSelector from '@/components/TokenSelector';
import { ImmutableX, Config, IMXError} from '@imtbl/core-sdk';
import {useRef, useState} from 'react';

const config = Config.SANDBOX; // Or Config.PRODUCTION
const client = new ImmutableX(config);

type TokenInfo = {
    address: string, 
    id: string,
    name: string
}

export default function Assets() {
    const [user, setUser] = useState('');
    //const [tokens, setTokens] = useState();
    
    //for the addresses where the user has tokens
    const [tokenArr, setTokenArr] = useState<TokenInfo[]>([]); 
    
    const inputRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState<{[fieldName: string]: boolean}>({});

    //gets the data about tokens the user holds
    const getListBalances = async () => {
        if (!inputRef.current) return

        console.log(inputRef.current.value);

        const owner = inputRef.current.value;
        try {
            const response = await client.listBalances({owner, })
            var arr: TokenInfo[] = [];
            response.result.forEach(async (item) => {
                try {
                    const response = await client.listAssets({
                        collection: item.token_address, 
                        orderBy: 'name',
                    })
                    const assetInformationList = response.result
                    .filter((asset) => {
                        if (!inputRef.current) return false;
                        return asset.user == inputRef.current.value
                    })
                    .map((asset) =>{
                       let NFTName = asset.name !== null ? asset.name : '';
                       let token: TokenInfo = ({
                        address : asset.token_address, 
                        id: asset.token_id,
                        name : NFTName
                        })
                        return token;
                    })
                    assetInformationList.forEach((item) => arr.push(item));
                } catch(e: unknown) {
                    console.log(e);
                }
            });
            setTokenArr(arr);
        } catch(e: unknown) {
            console.log(e);
        }
    }

    const handleCheck = (key: string) => {
        const newValue = !checked.key;
        setChecked({...checked, [key]:newValue});

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
            <button onClick={() => {getListBalances();}} className="text-2xl ml-32 mr-32">Submit</button>
            <div className="flex flex-col justify-center text-2xl text-bold text-center">
                <h1 id="tokens">Tokens:</h1>  
                {tokenArr.map((item) => <div>
                        <div className="flex flex-row justify-center mr-64 ml-64">
                        <input onChange={() => handleCheck(item.address + item.id)} className="" type="checkbox"/>
                        <label>
                            <h1 className="text-2xl">{item.name}</h1>
                            <h2 className="text-1xl">{item.address}</h2>
                        </label>
                        </div>
                    </div>)
                }
                <button>Choose</button>
            </div>
        </div>
    );
}