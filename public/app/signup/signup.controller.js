(function () {
    var app = angular.module('app');

    app.controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', '$location'];

    function SignupController($scope, $location) {
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.email = '';

        vm.redirect = redirect;

        function redirect() {
            $location.path('/homepage');
        }
    }
})();