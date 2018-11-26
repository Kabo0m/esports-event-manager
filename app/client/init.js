var app = angular.module("Ycept", ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
	$stateProvider
		.state('foo', {
			name: 'foo',
			url: '/foo',
			templateUrl: 'views/foo.view.html',
			controller: 'FooController'
		})
		.state('bar', {
			name: 'bar',
			url: '/bar',
			templateUrl: 'views/bar.view.html',
			controller: 'BarController'
		});
}]);

app.run(function ($rootScope, $state) {	
	$state.go('foo');
});
