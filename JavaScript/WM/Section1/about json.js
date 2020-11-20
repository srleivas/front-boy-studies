const jsonObject = {
	a: 'first',
	b: 'second',
	c: 'third'
}

console.log(JSON.stringify(jsonObject));

console.log(JSON.parse('{"a": "a", "b": "b", "c": "c"}'));
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'));