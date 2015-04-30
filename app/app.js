'use strict';

/**
 * @ngdoc overview
 * @name cheztoneFrontendApp
 * @description
 * # cheztoneFrontendApp
 *
 * Main module of the application.
 */
angular
    .module('cheztoneFrontendApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'pascalprecht.translate',
        'ctCommons',
        'ctContact',
        'ctAbout'
    ])
    .config(function ($routeProvider,USER_ROLES) {
        $routeProvider
            .when('/', {
                templateUrl : 'home/home.html',
                access : {
                    authorizedRoles : USER_ROLES.all
                }
            })
            .when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutCtrl',
                access : {
                    authorizedRoles : USER_ROLES.all
                }
            })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'ContactCtrl',
                access : {
                    authorizedRoles : USER_ROLES.user
                }
            })
            .otherwise({
                redirectTo: '/',
                access : {
                    authorizedRoles : USER_ROLES.all
                }
            });
    }).config(function($translateProvider){
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('fr');
    });
