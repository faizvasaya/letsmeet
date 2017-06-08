/**
 * @author Faizal Vasaya
 * @date 6/8/2017
 * @desc A controller to dynamically change menu items of the navbar. Controller As
 *       syntax has been used to initialize the controller in the HTML.
 */
(function () {
    var app = angular.module('app');

    app.controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope'];

    function NavbarController($scope) {
        var vm = this;
        vm.menu = [
            {
                link: '#',
                name: 'Home'
            },
            {
                link: '#',
                name: 'Browse Meetups'
            },
            {
                link: '#',
                name: 'Blogs'
            },
            {
                link: '#!login',
                name: 'Login'
            },
            {
                link: '#!contactus',
                name: 'Contactus'
            }
        ];
    }
})();