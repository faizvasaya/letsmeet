/**
 * @author Faizal Vasaya
 * @date 6/8/2017
 * @desc Configuring application wide routes using ngroute.
 */
(function () {
    var app = angular.module('app');

    app.config(routeConfigurator);

    function routeConfigurator($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/homepage/homepage.html'
        }).when('/login', {
            templateUrl: 'app/login/login.html'
        }).when('/signup', {
            templateUrl: 'app/signup/signup.html'
        });
    }
})();