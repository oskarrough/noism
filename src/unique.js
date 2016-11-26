// Give it an array and it'll return a unique version of it
function deduplicate(data) {
	if (data.length > 0) {
		var result = [];

		data.forEach(function (elem) {
			if (result.indexOf(elem) === -1) {
				result.push(elem);
			}
		});

		return result;
	}
}

