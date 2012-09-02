define("test/1.0.2/a-debug", [], function(require, exports, module){
	var init=function(){
		require.async('./c').say();
	}
	exports.init=init;
})
