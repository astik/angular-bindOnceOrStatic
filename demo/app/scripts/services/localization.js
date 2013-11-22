'use strict';

angular.module('staticCompilationApp').factory('localization', function () {
	var dictionary = {
		foobar : "foobar from dictionary"
	};
	return dictionary;
});
