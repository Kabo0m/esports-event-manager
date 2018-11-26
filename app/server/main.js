var express = require('express'), 
	server = express(),
	config = {
		port: '3030'
	};

module.exports = {
	start: function (appConfig, then) {
		server.use(express.static(appConfig.dist.root));
		server.listen(config.port);

		if (typeof then === 'function')	{
			then({
				port: config.port
			});
		}		
	}
};
