define(function(require, exports, module){
	var init=function(){
		require('./b').say("from a");
		require('./c').say();
	}
	exports.init=init;
})
