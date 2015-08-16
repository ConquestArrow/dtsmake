var mylib = {
	
	/**
	 * function prop test doc
	 * @example not supported doc tag sample.
	 * @param a param 1. may be number.
	 * @param b param 2. may be number.
	 * @return may be number.
	 */
	func: function(a, b){
		return a * b;
	},
	
	/**
	 * string prop test doc
	 */
	str: "string",
	/**
	 * number prop test doc
	 */
	num: 1,
	/**
	 * boolean prop test doc
	 */
	bool: false,
	/**
	 * array[string] prop test doc
	 */
	arr: [
		"a",
		"b",
		"c"
	]
	
	
	
};

/**
 * added prop doc
 */
mylib.addedProp = function(a, b, c){
	if(!a) a = "hoge";
	if(!c) c = 0;
	
	return a + (b * c);
};