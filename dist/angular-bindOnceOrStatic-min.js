"use strict";angular.module("bindOnceOrStatic",[]),angular.module("bindOnceOrStatic").provider("boosDictionary",function(){var a={},b=[];this.add=function(c,d){void 0===d?b.push(c):a[c]=d},this.$get=["$injector",function(c){var d,e;for(d in b)e=b[d],a[e]=c.get(e);return a}]}),function(){function a(a){return"undefined"==typeof a}var b=angular.$$minErr("$interpolateMinErr bindOnceOrStatic"),c=function(){var c="{{",d="}}";this.startSymbol=function(a){return a?(c=a,this):c},this.endSymbol=function(a){return a?(d=a,this):d},this.$get=["$parse","$exceptionHandler","$sce",function(e,f,g){function h(h,k,l){for(var m,n,o,p,q=0,r=[],s=h.length,t=!1,u=[];s>q;)-1!=(m=h.indexOf(c,q))&&-1!=(n=h.indexOf(d,m+i))?(q!=m&&r.push(h.substring(q,m)),r.push(o=e(p=h.substring(m+i,n))),o.exp=p,q=n+j,t=!0):(q!=s&&r.push(h.substring(q)),q=s);if((s=r.length)||(r.push(""),s=1),l&&r.length>1)throw b("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",h);return!k||t?(u.length=s,o=function(c){try{for(var d,e=0,i=s;i>e;e++)"function"==typeof(d=r[e])&&(d=d(c),d=l?g.getTrusted(l,d):g.valueOf(d),null===d||a(d)?d="":"string"!=typeof d&&(d=toJson(d))),u[e]=d;return u.join("")}catch(j){var k=b("interr","Can't interpolate: {0}\n{1}",h,j.toString());f(k)}},o.exp=h,o.parts=r,o):void 0}var i=c.length,j=d.length;return h.startSymbol=function(){return c},h.endSymbol=function(){return d},h}]};angular.module("bindOnceOrStatic").provider("boosInterpolateBindStatic",c),angular.module("bindOnceOrStatic").provider("boosInterpolateBindOnce",c)}(),function(){var a,b=["span"],c=["title","placeholder"],d=function(a,b){return["boosInterpolateBindOnce","boosInterpolateBindStatic","boosDictionary",function(c,d,e){var f=function(a,b,c,d){b.$set(c,a(b[c])(d))};return{priority:-1e3,restrict:a,compile:function(a,c){var g;if(b)f(d,c,b,e);else for(g in c.$attr)f(d,c,g,e);return this.link},link:function(a,d,e){var g;if(b)f(c,e,b,a);else for(g in e.$attr)f(c,e,g,a)}}}]},e={};for(a in b)e[b[a]]=d("E");for(a in c)e[c[a]]=d("A",c[a]);angular.module("bindOnceOrStatic").directive(e)}(),angular.module("bindOnceOrStatic").config(["boosInterpolateBindStaticProvider",function(a){a.startSymbol("[[["),a.endSymbol("]]]")}]),angular.module("bindOnceOrStatic").config(["boosInterpolateBindOnceProvider",function(a){a.startSymbol("[["),a.endSymbol("]]")}]);