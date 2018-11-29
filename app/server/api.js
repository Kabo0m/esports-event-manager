var glob = require('glob');

module.exports = {
	$init: function (appConfig, server) {
		var api = {};

		api.models = {};
		api.controllers = {};

		// import models to api
		glob.sync(appConfig.assets.server.models)
			.forEach(function (file) {
				_class = require(file);
				api.models[_class.name] = _class.init(api);
			});

		// import controllers to api
		glob.sync(appConfig.assets.server.controllers)
			.forEach(function (file) {
				_class = require(file);
				api.controllers[_class.name] = _class.init(api);
			});

		// TODO: map api controller methods to endpoints

		// TESTS:
		api.controllers.bar.someMethod();
		api.controllers.foo.otherMethod('foo is cool!');

		return api;
	}	
};
