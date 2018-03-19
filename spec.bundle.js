import angular from 'angular';
import mocks from 'angular-mocks';
import ngTouch from 'angular-touch';
import babelPolyfill from 'babel-polyfill';

let context = require.context('./src', true, /\.spec\.js/);
context.keys().forEach(context);
