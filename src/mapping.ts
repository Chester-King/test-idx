import {
	U64Event,
	StringEvent,
	PubkeyEvent,
	U8Event,
	NormalEntity,
	AdvanceEntity
} from '../generated/Interfaces';

export async function handleU64Event(params : U64Event) {
	//TODO: Implement
	let norment =  await NormalEntity.load(params.data);
	if (norment == null) {
		norment = new NormalEntity();
		norment.Uid = params.data;
	}

	let advment =  await AdvanceEntity.load(params.data);
	if (advment == null) {
		advment = new AdvanceEntity();
		advment.Uid = params.data;
	}
	await norment.save();
	await advment.save();
}

export async function handleStringEvent(params : StringEvent) {
	//TODO: Implement
	let norment =  await NormalEntity.load(params.id);
	if (norment == null) {
		norment = new NormalEntity();
		norment.Uid = params.id;
	}
	norment.svalue = params.data;

	let advment =  await AdvanceEntity.load(params.id);
	if (advment == null) {
		advment = new AdvanceEntity();
		advment.Uid = params.id;
	}
	if (advment.svalue == null) {
		advment.svalue = params.data;
	} else {
		advment.svalue += params.data;
	}
	await norment.save();
	await advment.save();
}

export async function handlePubkeyEvent(params : PubkeyEvent) {
	//TODO: Implement
	let norment =  await NormalEntity.load(params.id);
	if (norment == null) {
		norment = new NormalEntity();
		norment.Uid = params.id;
	}
	norment.keyvalue = params.data;

	let advment =  await AdvanceEntity.load(params.id);
	if (advment == null) {
		advment = new AdvanceEntity();
		advment.Uid = params.id;
	}
	advment.keyvalue = params.data;
	await norment.save();
	await advment.save();
}

export async function handleU8Event(params : U8Event) {
	//TODO: Implement
	let norment =  await NormalEntity.load(params.id);
	if (norment == null) {
		norment = new NormalEntity();
		norment.Uid = params.id;
	}
	norment.u8value = params.data;

	let advment =  await AdvanceEntity.load(params.id);
	if (advment == null) {
		advment = new AdvanceEntity();
		advment.Uid = params.id;
	}
	if (advment.u8value == null) {
		advment.u8value = params.data;
	} else {
		advment.u8value += params.data;
	}
	await norment.save();
	await advment.save();
}

