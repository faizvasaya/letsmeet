(function(){
    var app = angular.module('app');

    app.factory('signupService', signupService);
    signupService.$inject = ['$http'];

    function signupService($http){
        var signupService = {
            signup: signupUser
        };
        return signupService;

        function signupUser(data){
            return $http.post('api/signup', data);
        }
    }
})();