define(function(require, exports, module){
	var init=function(){
		require.async('./c').say();
	}
	exports.init=init;
})
