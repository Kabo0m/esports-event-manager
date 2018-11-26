// functions
function isTaskFinished(writers, done) {
	var finished; 

    finished = writers.reduce(function (result, item) {
        return result && item._ended;
    });

    if (finished && typeof done === 'function') {
    	done();
    }
}

// exports
module.exports = {
	task: function (init) {
		var writers = init();

		return function (done) {
			writers.forEach(function (writer) {
				var ended = false;

				Object.defineProperty(writer, '_ended', {
					configurable: false,
					enumerable: true,
					get: function () { return ended; },
					set: function (value) {
						if (ended = value && typeof done === 'function') {
							isTaskFinished(writers, done);
						}
					}
				});
			});
		};
	}
};
