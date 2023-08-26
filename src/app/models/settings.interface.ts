export interface Settings {
	header: {
		adresseClient: string,
		datumAntrag: string,
		datumBescheid: string,
		datumGutachtenMD: string,
		datumWiderspruchsbescheid: string,
		datumWiederspruch: string,
		gDB: string,
		gegner: string,
		inSachen: string,
		klaeger: string,
		pflegegradAlt: string,
		pflegegradNeu: string,
	},
	modules: Modul[],
}

export type ControlObject = {
	label: string,
	value: string
}

export type SettingsHead  = {
	adresseClient: string,
	datumAntrag: string,
	datumBescheid: string,
	datumGutachtenMD: string,
	datumWiderspruchsbescheid: string,
	datumWiederspruch: string,
	gDB: string,
	gegner: string,
	inSachen: string,
	kläger: Text,
	pflegegradAlt: string,
	pflegegradNeu: string,
}

export type Option = {
	id: string;
	text: string;
}

export type Modul = {
	Name: string;
	Moduloptionen: Option[],
	Moduleintraege: string
}

export type Moduleintraege = {
	name: string,
	text: string,
	optionen: Option[],
	display: boolean,
}




