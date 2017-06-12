(function () {
    var app = angular.module('app');

    app.factory('authenticationService', authenticationService);

    function authenticationService() {
        var authenticationService = {
            google: googleAuthentication,
            facebook: facebookAuthentication
        };
        return authenticationService;

        function googleAuthentication() {
            
        }
        function facebookAuthentication() {
            
        }
    }
})();