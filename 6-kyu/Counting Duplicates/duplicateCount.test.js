const duplicateCount = require('./duplicateCount')

test('empty', () => {
	expect(duplicateCount('')).toStrictEqual(0)
})

test('non-empty', () => {
	expect(duplicateCount('abcde')).toStrictEqual(0)
	expect(duplicateCount('aabbcde')).toStrictEqual(2)
	expect(duplicateCount('aabBcde')).toStrictEqual(2)
	expect(duplicateCount('Indivisibility')).toStrictEqual(1)
	expect(duplicateCount('Indivisibilities')).toStrictEqual(2)
})
