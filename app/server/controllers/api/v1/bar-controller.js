module.exports.name = 'bar';
module.exports.init = function (api) {
	return {
		someMethod: function () {
			console.log('someValue');
		}
	};
};
