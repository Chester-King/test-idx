import { PublicKey } from "@solana/web3.js";
import { BN } from "@project-serum/anchor";


export interface U64Event {
	"data":BN;
	"label":string;
}

export interface StringEvent {
	"id":BN;
	"data":string;
	"label":string;
}

export interface PubkeyEvent {
	"id":BN;
	"data":PublicKey;
	"label":string;
}

export interface U8Event {
	"id":BN;
	"data":number;
	"label":string;
}

export class NormalEntity {
	"Uid":BN;
	"svalue":string;
	"u8value":number;
	"keyvalue":PublicKey;

	static async load(Uid:BN) : Promise<null | NormalEntity> {
		return null;
	}

	async save() : Promise<void> {
	}
}
export class AdvanceEntity {
	"Uid":BN;
	"svalue":string;
	"u8value":number;
	"keyvalue":PublicKey;

	static async load(Uid:BN) : Promise<null | AdvanceEntity> {
		return null;
	}

	async save() : Promise<void> {
	}
}
