/**
 * @author Faizal Vasaya
 * @date 6/8/2017
 * @desc Configuring application wide routes using ngroute.
 */
(function () {
    var app = angular.module('app');

    app.config(routeConfigurator);

    function routeConfigurator($routeProvider) {
        $routeProvider.when('/contactus', {
            templateUrl: 'contactus.html'
        });
    }
})();