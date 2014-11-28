/*
 * Copyright 2014 Nicholas Daley
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var stripLog = require('strip-ng-log');

module.exports = function() {
    return through.obj(function(file, encoding, done) {
        if(file.isNull()) {
            done(null, file);
            return;
        } else if( file.isStream() ) {
            done(new gutil.PluginError('gulp-strip-ng-log', 'Streaming not supported'));
            return;
        } else {
            try {
                file.contents = new Buffer(stripLog(file.contents.toString()).toString());
		this.push(file);
            } catch(err) {
                this.emit('error', new gutil.PluginError('gulp-strip-ng-log', err, {fileName : file.path}));
            }
        }
	done();
    });
};
