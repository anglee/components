var _enum = function(entries) {
	return entries.reduce(function(ret, val) {
		ret[val] = val;
		return ret;
	}, {});
};

export default _enum;