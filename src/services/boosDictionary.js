'use strict';

angular.module('bindOnceOrStatic').provider('boosDictionary', function () {
	var dictionary = {};
	var dictionaryService2initialized = [];
	this.add = function(key, value){
		if (value === undefined) {
			dictionaryService2initialized.push(key);
		} else {
			dictionary[key] = value;
		}
	};
	this.$get = ['$injector', function ($injector) {
		var keyIdx, key;
		for (keyIdx in dictionaryService2initialized){
			key = dictionaryService2initialized[keyIdx];
			dictionary[key] = $injector.get(key);
		}
		return dictionary;
	}];
});
