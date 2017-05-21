/**
 * Created by dhales on 30/12/16.
 */

"USE STRICT"

var elixier = require('laravel-elixir');

// Pasta com as vendors
var vendor = './node_modules/';

// Array com os Scripts
var scripts = [
    vendor + 'jquery/dist/jquery.min.js',
    vendor + 'bootstrap/dist/js/bootstrap.min.js',
    vendor + 'angular/angular.min.js',
    vendor + 'angular-ui-router/release/angular-ui-router.min.js',
    vendor + 'angular-animate/angular-animate.min.js',
    vendor + 'angular-aria/angular-aria.min.js',
    vendor + 'angular-messages/angular-messages.min.js',
    vendor + 'angular-material/angular-material.min.js',
    vendor + 'particles.js/particles.js',
    './app/config/**',
    './app/controllers/**',
    './app/directives/**',


];

// Array com os Styles
var styles = [
    vendor + 'bootstrap/dist/css/bootstrap.min.css',
    vendor + 'bootstrap/dist/css/bootstrap-theme.min.css',
    vendor + 'angular-material/angular-material.min.css',
    vendor + 'animate.css/animate.min.css',
    vendor + 'font-awesome/css/font-awesome.min.css',
    './resources/assets/styles/app.css'
];

// Array com as Fonts
var fonts = [
    vendor + 'material-design-icons/iconfont/**',
    vendor + 'font-awesome/fonts/**',
    './resources/assets/fonts/**'
];

// Array com as Images
var images = [
    './resources/assets/images/**'
];

elixier(function (mix) {
    mix.less(
        './resources/assets/less/app.less', './resources/assets/styles/app.css'
    );

    mix.copy(fonts, './public/fonts/');
    mix.copy(images, './public/images/');

    mix.scripts(scripts);
    mix.styles(styles);

});