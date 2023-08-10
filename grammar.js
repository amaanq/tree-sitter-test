module.exports = grammar({
		name: 'test',

		rules: {
				source_file: $ => seq('hello', eof()),
		}
});
