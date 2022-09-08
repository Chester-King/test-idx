import {
	handleU64Event,
	handleStringEvent,
	handlePubkeyEvent,
	handleU8Event,
} from '../src/mapping';

import {
	U64Event,
	StringEvent,
	PubkeyEvent,
	U8Event,
} from './Interfaces';

import * as anchor from "@project-serum/anchor";
import {
    Program,
    EventParser
} from "@project-serum/anchor";
import {
    Connection,
    PublicKey,
    clusterApiUrl
} from "@solana/web3.js";
const axios = require('axios');
import { IDL } from "../idls/event_js_ts";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";

let connection = new Connection("https://solana-devnet.g.alchemy.com/v2/my5oNvC2QPydN0jxJFKOoYld67MP9liC","finalized");
let keyPair = anchor.web3.Keypair.generate();
let nodeWallet = new NodeWallet(keyPair);

let provider = new anchor.AnchorProvider(connection, nodeWallet, {commitment: "finalized"});
let program = new Program( IDL , "9XRQ3Wwv1Bawt1WPbp8yX8k4r6eM2ZZQyukFxJxAFtsq", provider);
let eventParser = new EventParser( new PublicKey("9XRQ3Wwv1Bawt1WPbp8yX8k4r6eM2ZZQyukFxJxAFtsq"), program.coder);

async function getSlotDetails(_commitment: string, _slot: number): Promise<string[]> {
    var data = JSON.stringify({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getBlock",
        "params": [
            _slot,
          {
            "encoding": "jsonParsed",
            "transactionDetails": "full",
            "rewards": false,
            "commitment": _commitment
          }
        ]
    });
    var config = {
        method: 'post',
        url: "https://solana-devnet.g.alchemy.com/v2/my5oNvC2QPydN0jxJFKOoYld67MP9liC",
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    return axios(config)
    .then(function (response: any) {
        // console.log(response);
        let logs: string[] = [];
        response?.data?.result?.transactions.map( async(transaction: any) => {
            logs.push(transaction?.meta?.logMessages);
        });
        logs = logs.join(",").split(",");
        return logs;
    })
    .catch(function (error: any) {
        console.log(error);
    });
}



const getEventObject = async(slot: number) => {
    let flag = true;
    while(flag){
        console.log("Slot",slot);
        // let logs = await getBlockDetails(slot);
        let logs = await getSlotDetails("finalized",slot);
        for (const _event of eventParser.parseLogs(logs)){
            console.log("Event",_event);
            let eventObj = {
                 name : _event.name,
                 params : _event.data
            }
            handleEvents(eventObj)
        }
        slot += 1;
    }
}

getEventObject(160272135);


function handleEvents(event : {name : string , params : object}) : void {
	switch (event.name) {
		case "U64Event":
			handleU64Event(event["params"] as U64Event);
			break;
		case "StringEvent":
			handleStringEvent(event["params"] as StringEvent);
			break;
		case "PubkeyEvent":
			handlePubkeyEvent(event["params"] as PubkeyEvent);
			break;
		case "U8Event":
			handleU8Event(event["params"] as U8Event);
			break;
	}
}