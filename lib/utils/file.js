'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createPjson = exports.writeToFile = exports.createFiles = exports.createDirectory = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require('child_process');

var _style = require('../templates/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDirectory(component) {
	(0, _child_process.exec)('mkdir ' + component, function (err, stdout) {
		if (err) {
			throw err;
		};
	});
}

function createFiles(extensions, action, subDir, component, template, cb) {
	extensions.forEach(function (ext) {
		(0, _child_process.exec)(action + subDir + component + ext, function (err, stdout) {
			if (err) {
				throw err;
			};
			if (ext === '.js' || ext === '.jsx') {

				// Writing up markup to component (.js or jsx) file
				cb(subDir, component, ext, template);
				return;
			}

			var stylExt = ['.css', '.styl', '.scss', '.styl', '.css', '.styl', '.less'];
			if (stylExt.indexOf(ext) !== -1) {
				cb(subDir, component, ext, _style2.default);
			}
		});
	});
}
function writeToFile(subDir, component, ext, compTmpl) {
	_fs2.default.writeFile(subDir + component + ext, compTmpl, function (err) {
		if (err) {
			throw err;
		};
	});
}

function createPjson(action, subDir, template) {
	(0, _child_process.exec)(action + subDir + 'package.json', function () {
		_fs2.default.writeFile(subDir + 'package.json', template, function (err) {
			if (err) {
				throw err;
			};
		});
	});
}

exports.createDirectory = createDirectory;
exports.createFiles = createFiles;
exports.writeToFile = writeToFile;
exports.createPjson = createPjson;