// https://www.codewars.com/kata/5a86073fb17101e453000258/train/javascript

function sortEmotions(arr, order) {
	const orderedArr = []
	let sortedArr = []
	const final = []

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case ':D':
				orderedArr.push(5)
				break
			case ':)':
				orderedArr.push(4)
				break
			case ':|':
				orderedArr.push(3)
				break
			case ':(':
				orderedArr.push(2)
				break
			case 'T_T':
				orderedArr.push(1)
				break
		}
	}

	function positive(a, b) {
		if (a > b) {
			return 1
		} else if (b > a) {
			return -1
		} else {
			return 0
		}
	}

	function negative(a, b) {
		if (a < b) {
			return 1
		} else if (b < a) {
			return -1
		} else {
			return 0
		}
	}

	if (order) {
		sortedArr = orderedArr.sort(negative)
	} else {
		sortedArr = orderedArr.sort(positive)
	}

	for (let i = 0; i < sortedArr.length; i++) {
		switch (sortedArr[i]) {
			case 5:
				final.push(':D')
				break
			case 4:
				final.push(':)')
				break
			case 3:
				final.push(':|')
				break
			case 2:
				final.push(':(')
				break
			case 1:
				final.push('T_T')
				break
		}
	}

	return final
}
