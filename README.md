#postmark

A Postmark plugin for Mixdown or any Broadway-compatible plugin pattern. Simple wrapper for [postmark.js](https://github.com/voodootikigod/postmark.js).

## Usage

### Config

The only required option is the API key, but you can provide any option accepted by `send()` and it will set it as a default.

```
"plugins": {
	"postmark": {
		"module": 'mixdown-postmark',
		"options": {
			"apikey": 'POSTMARK_API_TEST'
		}
	}
}
```

### Sending a message

```
app.plugins.postmark.send({
	"From" : "sender@example.com",
	"To" : "receiver@example.com",
	"Cc" : "copied@example.com",
	"Bcc": "blank-copied@example.com",
	"Subject" : "Test",
	"HtmlBody" : "<b>Hello</b>",
	"TextBody" : "Hello",
}, function (error, result) {
	// ok then
})
```