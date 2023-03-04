export interface GetCallListResponse {
	total_rows: string
	results: Call[]
}

export interface Call {
	id: number
	partnership_id: string
	partner_data: PartnerData
	date: string
	date_notime: string
	time: number
	from_number: string
	from_extension: string
	to_number: string
	to_extension: string
	is_skilla: number
	status: Status
	record: string
	line_number: string
	in_out: number
	from_site: number
	source: string
	errors: Error[]
	disconnect_reason: string
	results: Result[]
	stages: Stage[]
	abuse: Abuse[]
	contact_name: string
	contact_company: string
	person_id: number
	person_name: string
	person_surname: string
	person_avatar: string
}

export type Status = 'Не дозвонился' | 'Дозвонился'

export interface PartnerData {
	id: string
	name: string
	phone: string
}

export interface Error {
	title: string
}

export interface Result {
	type: string
	title: string
	tooltip: string
}

export interface Stage {
	person_name: string
	person_surname: string
	person_mango_phone: string
	duration: string
	disconnect_reason: string
}

export interface Abuse {
	date: string
	person_name: string
	message: string
	support_read_status: number
	support_answer_status: number
	answers: Answer[]
}

export interface Answer {
	message: string
	from_support: number
	support_read_status: number
	person_read_status: number
}
