import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { generateStarkPrivateKey, createStarkSigner } from '@imtbl/core-sdk';
const ethNetwork ='goerli';
const provider = new AlchemyProvider(ethNetWork, )
const walletConnection = { ethSigner, starkSigner }

function IMXMiddleman() {
    // Transfers the asset
    const response = await client.transfer(
    walletConnection,
    unsignedTransferRequest,
    );

    // Print out the response
    console.log(response);
}

export default {IMXMiddleman}