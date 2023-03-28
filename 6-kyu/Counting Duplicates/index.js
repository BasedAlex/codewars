// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
	const arr = text.toLowerCase().split('')
	const newArr = []
	const sampleArr = []

	for (let i = 0; i < arr.length; i++) {
		if (sampleArr.includes(arr[i])) {
			newArr.push(arr[i])
		}
		sampleArr.push(arr[i])
	}

	const unique = [...new Set(newArr)]

	return unique.length
}
