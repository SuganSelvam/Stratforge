export function stringCaseConvert(string, splitItem) {

	const stringArray = string.split(splitItem);
	for (let i = 0; i < stringArray.length; i++) {
		stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
	}
	return stringArray.join(" ");

}


export function objectParser(data) {

	let resultObject = {};
	for (let i in data) {
		if (!data.hasOwnProperty(i)) continue;
		if ((typeof data[i]) == 'object' && data[i] !== null) {
			let tempObject = objectParser(data[i]);
			for (let x in tempObject) {
				if (!tempObject.hasOwnProperty(x)) continue;
				resultObject[i + '.' + x] = tempObject[x];
			}
		} else {
			resultObject[i] = data[i];
		}
	}
	return resultObject;
}


export function arrayParser(data,keyName){
	var tempObject = {}
	data.forEach((value, idx) => {
		if(value){
			if(typeof value === 'object' ){
				tempObject = objectParser(value);
			} else {
				tempObject[keyName + "_" + idx] = value;
			}
		}
	})
	return tempObject;
}

