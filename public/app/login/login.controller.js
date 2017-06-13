(function () {
    var app = angular.module('app');

    app.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', 'authenticationService'];

    function LoginController($scope, $location, authenticationService) {
        var vm = this;

        vm.redirect = redirect;
        vm.authenticate = authenticate;
        vm.authenticateUsingGoogle = authenticateUsingGoogle;
        vm.authenticateUsingFacebook = authenticateUsingFacebook;

        function redirect() {
            $location.path('/homepage');
        }

        function authenticate(){
            var authPromise = authenticationService.authenticate(vm.data);
            authPromise.then(function(response) {
                 vm.message= response.data.message;
                 vm.status = response.data.success;
            }, function(error) {
                vm.message= response.data.message;
                vm.status = response.data.success;
            });
        }

        function authenticateUsingGoogle() {
            authenticationService.google();
        }
        function authenticateUsingFacebook() {
            authenticationService.facebook();
        }
    }
})();