(function () {
    var app = angular.module('app');

    app.controller('LoginController', LoginController);

    LoginController.$inject = ['$scope'];

    function LoginController($scope) {
        var vm = this;
        vm.username = '';
        vm.password = '';
    }
})();