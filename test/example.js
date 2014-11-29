'use strict';
/* global angular:false, $log:false, doNothing: false */
doNothing();
$log.log('outside');
angular.module('example-strip-ng-log', [])
    .run(function($log) {
        $log.log('hello there');
        $log.log(
             'message split',
             'over multiple',
             'lines'
             );
        $log.log('bye');
    });
