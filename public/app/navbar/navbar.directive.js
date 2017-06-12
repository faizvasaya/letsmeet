/**
 * @author Faizal Vasaya
 * @date 8/6/2017
 * @lastModified 8/6/2017
 * @desc A directive to display navbar. It loads navbar.html from the current
 *            folder. The node server points to public hence the path should be 
 *            from the same folder.
 * @example <navbar>
 */
//Wrapped inside an IIFE to avoid global namespace pollution.
(function () {

    var app = angular.module('app');

    app.directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/navbar/navbar.html'
        }
    });
})();