'use strict';

angular.module('staticCompilationApp', ["ngRoute", "bindOnceOrStatic"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('staticCompilationApp').config(function (boosDictionaryProvider) {
	console.log('init boosDictionaryProvider');
	boosDictionaryProvider.add('localization');
});
