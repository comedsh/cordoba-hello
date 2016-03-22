cordova.define("org.kane.plugin.hello.HelloWorld", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getExtra = function(success, error) {
	
	// cordova.exec(successCallback, failureCallback, service, action, [args]);
	// HelloWorld -> Service name
	// action -> 调用的方法
    exec(success, error, "HelloWorld", "getExtra", []); 
    
};
});
