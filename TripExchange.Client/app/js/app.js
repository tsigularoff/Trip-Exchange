'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/main-page-view.html',
                controller: 'MainPageController'
            })
            .when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/userInfo', {
                templateUrl: 'views/partials/user-info.html',
                controller: 'UserInfoController'
            })
            .when('/stats', {
                templateUrl: '../views/partials/statistic/statistic-view.html',
                controller: 'StatisticController'
            })
            .when('/cities', {
                templateUrl: '../views/partials/cities/list-cities-view.html',
                controller: 'CitiesController'
            })
            .when('/drivers', {
                templateUrl: '../views/partials/drivers/drivers-view.html',
                controller: 'DriversController'
            })
            .when('/trips', {
                templateUrl: '../views/partials/trips/trips-view.html',
                controller: 'TripsController'
            })
            .when('/trips/create', {
                templateUrl: '../views/partials/trips/create-trip-view.html',
                controller: 'TripsController'
            })
            .when('/trips/:id', {
                templateUrl: '../views/partials/trips/trip-details-view.html',
                controller: 'TripDetailsController'
            })
            .when('/drivers/:id', {
                templateUrl: '../views/partials/drivers/driver-details-view.html',
                controller: 'DriverDetailsController'
            });
//            .otherwise({ redirectTo: '/partial1' });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://spa2014.bgcoder.com/');