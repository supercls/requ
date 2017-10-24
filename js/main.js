
/*require(['jquery', 'vue'], function ($,vue){
　　　// some code here
	console.log($(window).height())
});*/
　// main.js

//
require.config({
	baseUrl:"js",
	urlArgs: '_t=' + (new Date()).getTime(),
	shim:{
		"dilog":{
			deps:["jquery","vue","xo"]
			//exports:"libs"
		}
	},
	paths:{
		"jquery":"jquery.min",
		"vue":"vue.min",
		"math":"math",
		"xo":"a",
		"dilog":"dilog"
	}
	
})
/*require(['dilog'],function(lib){
	lib.message()
})*/