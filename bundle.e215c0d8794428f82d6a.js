/*! v1.0 Sun Aug 28 2016 12:36:44 GMT+0800 (CST) auth by tommyshao */
webpackJsonp([0],{0:function(n,o,e){e(1),e(2);e(3)(function(){avalon.define({$id:"App",ver:"1.0"}),e(4),avalon.scan()})},2:function(n,o,e){var t=e(1),a={login:"http://rap.taobao.org/mockjs/4074/api/login"},l=function(n){var o=t.Deferred();return a[n]?t.getJSON(a[n]):o.reject("can't find the router:"+n)};n.exports=l},3:function(n,o,e){var t;t=function(){"use strict";function n(n){var o;for(o=0;o<n.length;o+=1)n[o](d)}function o(){var o=u;c&&o.length&&(u=[],n(o))}function e(){c||(c=!0,i&&clearInterval(i),o())}function t(n){return c?n(d):u.push(n),t}var a,l,i,r="undefined"!=typeof window&&window.document,c=!r,d=r?document:null,u=[];if(r){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1);else if(window.attachEvent){window.attachEvent("onload",e),l=document.createElement("div");try{a=null===window.frameElement}catch(v){}l.doScroll&&a&&window.external&&(i=setInterval(function(){try{l.doScroll(),e()}catch(n){}},30))}"complete"===document.readyState&&e()}return t.version="2.0.1",t.load=function(n,o,e,a){a.isBuild?e(null):t(e)},t}.call(o,e,o,n),/**
	 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
	 * Available via the MIT or new BSD license.
	 * see: http://github.com/requirejs/domReady for details
	 */
!(void 0!==t&&(n.exports=t))},4:function(n,o,e){e(5),e(11),e(36),avalon.history.start(),avalon.router.when(["/"],"login"),avalon.router.getLastPath()&&"index.html"!=avalon.router.getLastPath()||avalon.router.go("login")},11:function(n,o,e){avalon.state("login",{url:"/login",views:{"":avalon.demandLoad(function(n){e.e(1,function(){n.resolve(e(12))})}),"footer@":avalon.demandLoad(function(n){e.e(2,function(){n.resolve(e(31))})})}}),avalon.state("logout",{url:"/logout",views:{"":avalon.demandLoad(function(n){e.e(3,function(){n.resolve(e(35))})})}})},36:function(n,o,e){avalon.state("home",{"abstract":!0,url:"/home",views:{"":avalon.demandLoad(function(n){console.log("xxxxx"),e.e(4,function(){n.resolve(e(37))})}),"footer@":avalon.demandLoad(function(n){e.e(2,function(){n.resolve(e(31))})})}}),avalon.state("home.index",{url:"/index",views:{content:avalon.demandLoad(function(n){e.e(5,function(){n.resolve(e(43))})})}}),avalon.state("home.workspace",{url:"/workspace",views:{content:avalon.demandLoad(function(n){e.e(6,function(){n.resolve(e(52))})})}}),avalon.state("home.common",{url:"/{path}",onEnter:function(n){var o=avalon.define({$id:"channel",channel:""});o.channel=n},views:{content:{template:'<div class="layer" ms-controller="channel">{{ channel }}</div>'}}})}});