var express = require('express'), 
	server = express(),
	config = {
		port: '3030'
	};

module.exports = {
	start: function (appConfig, then) {
		// initialize api
		require('.api.js').$init(appConfig, server);

		// initialize server
		server.use(express.static(appConfig.dist.root));
		server.listen(config.port);

		if (typeof then === 'function')	{
			then({
				port: config.port
			});
		}		
	}
};
