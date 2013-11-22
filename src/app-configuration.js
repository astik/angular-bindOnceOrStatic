'use strict';

angular.module('bindOnceOrStatic').config(['boosInterpolateBindStaticProvider', function (boosInterpolateBindStaticProvider) {
	boosInterpolateBindStaticProvider.startSymbol('[[[');
	boosInterpolateBindStaticProvider.endSymbol(']]]');
}]);

angular.module('bindOnceOrStatic').config(['boosInterpolateBindOnceProvider', function (boosInterpolateBindOnceProvider) {
	boosInterpolateBindOnceProvider.startSymbol('[[');
	boosInterpolateBindOnceProvider.endSymbol(']]');
}]);
