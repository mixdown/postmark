var assert = require('assert');
var _ = require('lodash');
var App = require('mixdown-server').App;

var config = {
	plugins: {
		postmark: {
			module: '/',
			options: {
				apikey: 'POSTMARK_API_TEST'
			}
		}
	}
}

suite('postmark plugin', function () {
	var app = new App(config);

	test('should initialize', function (done) {
		app.init(function (e) {
			assert.ifError(e);
			done();
		})
	});

	test('should attach', function () {
		assert.ok(!_.isEmpty(app.plugins.postmark), 'should have something at plugin namespace');
	});

	test('should send a message', function (done) {
		app.plugins.postmark.send({
			"From" : "sender@example.com",
			"To" : "receiver@example.com",
			"Cc" : "copied@example.com",
			"Bcc": "blank-copied@example.com",
			"Subject" : "Test",
			"HtmlBody" : "<b>Hello</b>",
			"TextBody" : "Hello",
		}, function (error, result) {
			assert.ifError(error);

			done();
		})
	});
});
