const operators = [
	{ symbol: "+", name: "Sum", fn: function (a, b) {
		return a + b;
	}},
	{ symbol: "-", name: "Difference", fn: function (a, b) {
		return a - b;
	}},
	{ symbol: "%", name: "Modulo", fn: function (a, b) {
		return a % b;
	}},
	{ symbol: "foo", name: "Foo", fn: function (a, b) {
		return a + b;
	}}
];

export default operators;