export default function cutLastName(name: string): string {
	const regex = /^(\S+\s)(\S+)\b/
	const shortenedName = name.replace(regex, (_, first, last) => {
		return `${first}${last.charAt(0)}.`
	})
	return shortenedName
}
