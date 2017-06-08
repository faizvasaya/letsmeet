(function () {
    var app = angular.module('app');

    app.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', 'authenticationService'];

    function LoginController($scope, $location, authenticationService) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.redirect = redirect;
        vm.authenticateUsingGoogle = authenticateUsingGoogle;
        vm.authenticateUsingFacebook = authenticateUsingFacebook;

        function redirect() {
            $location.path('/homepage');
        }

        function authenticateUsingGoogle() {
            authenticationService.google();
        }
        function authenticateUsingFacebook() {
            authenticationService.facebook();
        }
    }
})();