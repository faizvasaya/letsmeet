(function () {
    var app = angular.module('app');

    app.factory('authenticationService', authenticationService);
    authenticationService.$inject = ['$http'];

    function authenticationService($http) {
        var authenticationService = {
            authenticate: authenticate,
            google: googleAuthentication,
            facebook: facebookAuthentication
        };
        return authenticationService;

        function authenticate(data) {
            return $http.post('/api/auth', data);
        }
        function googleAuthentication() {
            
        }
        function facebookAuthentication() {
            
        }
    }
})();