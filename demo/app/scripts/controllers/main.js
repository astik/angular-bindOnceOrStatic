'use strict';

// a simple controller that expose our localization service
// this exposition is only donc to see dynamic data binindg
angular.module('staticCompilationApp').controller("MainCtrl", function ($scope, localization) {
	$scope.localizationFromCtrl = localization;
});
