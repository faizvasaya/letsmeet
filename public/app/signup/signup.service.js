//Utilities for signup module.
(function(){
    var app = angular.module('app');

    app.factory('signupService', signupService);
    signupService.$inject = ['$http'];

    function signupService($http){
        var signupService = {
            signup: signupUser
        };
        return signupService;

        /**
         * @desc Issues a post request to the route /api/signup/ to complete user signup
         * @param {*} data - The data to be sent as a req object to the server. Contains emailid, name and password.
         * @returns a thenable promise object.
         */
        function signupUser(data){
            return $http.post('api/signup', data);
        }
    }
})();