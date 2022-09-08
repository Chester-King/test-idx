import { PublicKey } from "@solana/web3.js";
import { loader } from "../serverSide/loadingFunction";
import { saver } from "../serverSide/savingFunction";
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
	"Uid":number;
	"svalue":string;
	"u8value":number;
	"keyvalue":string;

	static async load(Uid:number) : Promise<null | NormalEntity> {
		let temp = await loader("NormalEntity",Uid, "Uid")
		if (temp === null) {
			return null;
		}
		let temp2 = new NormalEntity();
			temp2.Uid = temp["Uid"];
			temp2.svalue = temp["svalue"];
			temp2.u8value = temp["u8value"];
			temp2.keyvalue = temp["keyvalue"];
		return temp2;
	}

	async save() : Promise<void> {
		if (this.Uid === null) {
			throw new Error("Uid is null");
		}
		let temp = {}
		temp["Uid"] = this.Uid;
		temp["svalue"] = this.svalue;
		temp["u8value"] = this.u8value;
		temp["keyvalue"] = this.keyvalue;

		await saver("NormalEntity", temp)
	}}
export class AdvanceEntity {
	"Uid":number;
	"svalue":string;
	"u8value":number;
	"keyvalue":string;

	static async load(Uid:number) : Promise<null | AdvanceEntity> {
		let temp = await loader("AdvanceEntity",Uid, "Uid")
		if (temp === null) {
			return null;
		}
		let temp2 = new AdvanceEntity();
			temp2.Uid = temp["Uid"];
			temp2.svalue = temp["svalue"];
			temp2.u8value = temp["u8value"];
			temp2.keyvalue = temp["keyvalue"];
		return temp2;
	}

	async save() : Promise<void> {
		if (this.Uid === null) {
			throw new Error("Uid is null");
		}
		let temp = {}
		temp["Uid"] = this.Uid;
		temp["svalue"] = this.svalue;
		temp["u8value"] = this.u8value;
		temp["keyvalue"] = this.keyvalue;

		await saver("AdvanceEntity", temp)
	}}
