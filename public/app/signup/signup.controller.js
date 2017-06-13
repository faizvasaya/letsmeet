(function () {
    var app = angular.module('app');

    app.controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', '$location','signupService'];

    function SignupController($scope, $location, signupService) {
        var vm = this;
        vm.data = {};
        vm.redirect = redirect;
        vm.signup = signup;

        function redirect() {
            $location.path('/homepage');
        }
        function signup(){
            var signupPromise = signupService.signup(vm.data);
            signupPromise.then(successCB, failureCB);
        }
        
        function successCB(response){
            vm.message= response.data.message;
            vm.status = response.data.success;
        }

        function failureCB(data){
            vm.message= response.data.message;
            vm.status = response.data.success;
        }
    }
})();