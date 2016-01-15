'use strict';
const got = require('got');

module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	return str + ' & ' + (opts.postfix || 'rainbows');
};


function postGist(username, password, file) {
	got.post('https://api.github.com/gists', {
		json: true,
		headers: {
			'user-agent': 'https://github.com/asnelzin/gist',
			'authorization': 'basic ' + new Buffer(username + ':' + password).toString('base64')
		},
		body: {
			"description": "the description for this gist",
			"files": {
				"file1.txt": {
					"content": "String file contents"
				}
			},
			"public": true
		}
	}).then(res => {
		console.log(res.body);
	});
}

postGist('asnelzin', 'test', '');

// http POST https://api.github.com/gists -va 'asnelzin:/(L))Yn}G&Z#\xQIW5S@8J' < ~/gist.json
// Authorization: Basic YXNuZWx6aW46LyhMKSlZbn1HJlojXHhRSVc1U0A4Sg==
