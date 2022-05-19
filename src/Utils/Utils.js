export function stringCaseConvert(string, splitItem) {
	const stringArray = string.split(splitItem);

	for (let i = 0; i < stringArray.length; i++) {
		stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
	}

	return stringArray.join(" ");

}