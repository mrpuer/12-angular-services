'use strict';

angular
  .module('myApp')
  .controller('AccountCtrl', function(AccountService) {
    var vm = this;

    vm.addUser = function(myUser) {
      vm.newUserForm.$setPristine();
      AccountService.addUser(myUser);
    };

  });