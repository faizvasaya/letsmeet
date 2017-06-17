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

        /**
         * @desc Issues a post request to the route /api/auth/ to complete user login
         * @param {*} data - The data to be sent as a req object to the server. Contains emailid and password.
         * @returns a thenable promise object.
         */
        function authenticate(data) {
            return $http.post('/api/auth', data);
        }
        //********To be implemented********
        function googleAuthentication() {

        }
        //********To be implemented********
        function facebookAuthentication() {

        }
    }
})();