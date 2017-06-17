//Controller to for /login route
(function () {
    var app = angular.module('app');

    app.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', 'authenticationService'];

    function LoginController($scope, $location, authenticationService) {
        var vm = this;

        vm.authenticate = authenticate;
        vm.authenticateUsingGoogle = authenticateUsingGoogle;
        vm.authenticateUsingFacebook = authenticateUsingFacebook;

        /**
         * @desc Authenticates a user by invoking authenticationService's authenticate method. It also
         *       handles the success and error of the request by using correspoding callbacks.
         */
        function authenticate() {
            var authPromise = authenticationService.authenticate(vm.data);
            authPromise.then(function (response) {
                vm.message = response.data.message;
                vm.status = response.data.success;
            }, function (error) {
                vm.message = response.data.message;
                vm.status = response.data.success;
            });
        }

        //********To be implemented********
        function authenticateUsingGoogle() {
            authenticationService.google();
        }
        //********To be implemented********
        function authenticateUsingFacebook() {
            authenticationService.facebook();
        }
    }
})();