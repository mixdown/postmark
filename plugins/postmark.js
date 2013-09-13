var _ = require('lodash');
var Postmark = require('postmark');

var PostmarkPlugin = function () {};

PostmarkPlugin.prototype.attach = function (options) {
	var app = options.app;

	if (!options.apikey) {
		throw new Error('apikey is required');
	}


	var postmark = Postmark(options.apikey);

	this.postmark = this.postmark || {};

	this.postmark.send = function (params, callback) {
		_.defaults(params, _.omit(options, 'app', 'apikey'));

		postmark.send(params, callback);
	}
};

module.exports = PostmarkPlugin;