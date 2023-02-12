import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { generateStarkPrivateKey, createStarkSigner } from '@imtbl/core-sdk';
import { ImmutableX, Config } from '@imtbl/core-sdk';
import { UnsignedTransferRequest } from '@imtbl/core-sdk';
import {TokenAmount} from '@imtbl/core-sdk';


const config = Config.SANDBOX; // Or Config.PRODUCTION
const client = new ImmutableX(config);

const ethNetwork ='goerli';
const provider = new AlchemyProvider(ethNetwork, 'qYXHid1nWNj9OCFmBemjGpPsYiSAZUoA');
const ethSigner = new Wallet('852298674e60c20da80d52810bd76f1f6e1f103803c161e380575fbc808c3bda').connect(provider);

const starkPrivateKey = generateStarkPrivateKey(); // Or retrieve previously generated key
const starkSigner = createStarkSigner(starkPrivateKey);
const walletConnection = { ethSigner, starkSigner }

const IMXMiddleman = async (tokenid:string, tokenaddress:string, receiveraddress:string) => {
    // Transfers the asset
    const transferRequest:UnsignedTransferRequest  = {
        
        tokenId: tokenid,
        tokenAddress: tokenaddress,
        type: "ERC721",
    
        receiver: receiveraddress,

    };
    const response = await client.transfer(
    walletConnection,
     transferRequest,
    );

    // Print out the response
    console.log(response);
}

export default {IMXMiddleman}