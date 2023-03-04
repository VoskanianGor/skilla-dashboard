export default function formatPhoneNumber(phoneNumber: string): string {
	return `+7 (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(
		4,
		7
	)}-${phoneNumber.substring(7, 9)}-${phoneNumber.substring(9)}`
}
