const sortEmotions = require('./sortEmotions')

test('empty array', () => {
	expect(sortEmotions([], true)).toStrictEqual([])
	expect(sortEmotions([], false)).toStrictEqual([])
})

test('Descending', () => {
	expect(sortEmotions([':D', 'T_T', ':D', ':('], true)).toStrictEqual([
		':D',
		':D',
		':(',
		'T_T',
	])

	expect(sortEmotions(['T_T', ':D', ':(', ':('], true)).toStrictEqual([
		':D',
		':(',
		':(',
		'T_T',
	])
	expect(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], true)).toStrictEqual([
		':D',
		':D',
		':)',
		':)',
		'T_T',
	])
})

test('Ascending', () => {
	expect(sortEmotions([':D', 'T_T', ':D', ':('], false)).toStrictEqual([
		'T_T',
		':(',
		':D',
		':D',
	])

	expect(sortEmotions(['T_T', ':D', ':(', ':('], false)).toStrictEqual([
		'T_T',
		':(',
		':(',
		':D',
	])
	expect(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], false)).toStrictEqual([
		'T_T',
		':)',
		':)',
		':D',
		':D',
	])
})

test('Random', () => {
	expect(sortEmotions([':D', 'T_T', ':D', ':('], false)).toStrictEqual([
		'T_T',
		':(',
		':D',
		':D',
	])
})
