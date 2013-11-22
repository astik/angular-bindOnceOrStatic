'use strict';

(function () {
	var elements = [ 'span', 'div', 'a', 'form', 'input', 'legend', 'textarea', 'button', 'ul', 'ol', 'li' ];
	var attributes = [];

	var i18nDirectiveClosure = function (restrict, attribute2process) {
		return ['boosInterpolateBindOnce', 'boosInterpolateBindStatic', 'boosDictionary', function (boosInterpolateBindOnce, boosInterpolateBindStatic, boosDictionary) {
			var interpolate = function(interpolateService, attrsWrapper, attr, scope){
				attrsWrapper.$set(attr, interpolateService(attrsWrapper[attr])(scope));
			};
			return {
				priority : -1000,
				restrict : restrict,
				compile : function (element, attrsWrapper) {
					var attr;
					if (!attribute2process) {
						for (attr in attrsWrapper.$attr) {
							interpolate(boosInterpolateBindStatic, attrsWrapper, attr, boosDictionary);
						}
					} else {
						interpolate(boosInterpolateBindStatic, attrsWrapper, attribute2process, boosDictionary);
					}
					return this.link;
				},
				link : function (scope, element, attrsWrapper) {
					var attr;
					if (!attribute2process) {
						for (attr in attrsWrapper.$attr) {
							interpolate(boosInterpolateBindOnce, attrsWrapper, attr, scope);
						}
					} else {
						interpolate(boosInterpolateBindOnce, attrsWrapper, attribute2process, scope);
					}
				}
			};
		}];
	};

	var directives = {}, idx;
	for (idx in elements) {
		directives[elements[idx]] = i18nDirectiveClosure('E');
	}
	for (idx in attributes) {
		directives[attributes[idx]] = i18nDirectiveClosure('A', attributes[idx]);
	}
	angular.module('bindOnceOrStatic').directive(directives);
}());
