//Controller for /signup route
(function () {
    var app = angular.module('app');

    app.controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', '$location', 'signupService'];

    function SignupController($scope, $location, signupService) {
        var vm = this;
        vm.data = {};
        vm.signup = signup;

        function signup() {
            //Invokes signup method in signupService with the data object.
            var signupPromise = signupService.signup(vm.data);
            //Promise thened here with a success and a failure callback.
            signupPromise.then(successCB, failureCB);
        }

        function successCB(response) {
            vm.message = response.data.message;
            vm.status = response.data.success;
        }

        function failureCB(data) {
            vm.message = response.data.message;
            vm.status = response.data.success;
        }
    }
})();