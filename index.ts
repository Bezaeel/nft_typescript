import {ThirdwebSDK} from "@3rdweb/sdk";
import {ethers} from "ethers";
import * as dotenv from "dotenv";

dotenv.config();


const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io/")
    )
);

const nft_address = "0xDFDa25C9805976F0846106DDC1DAD2778C24F5D0";
const nft = sdk.getNFTModule(nft_address);

async function mint(){
    console.log(
        await nft.mint({
            name: "Ask Talabi..",
            description: "first nft",
            image: "https://i.imgur.com/ryIM26I.png",
            properties: {},
        }),
    );
}

mint();