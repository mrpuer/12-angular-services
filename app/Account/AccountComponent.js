angular.module('myApp').component('accountComponent', {
  templateUrl: 'Account/AccountComponent.html',
  controller: function(AccountService) {
    const ctrl = this;
    ctrl.getStatus = AccountService.getStateStatus();
    ctrl.userInfo = AccountService.getData();
    ctrl.removeUser = AccountService.removeUser();
    this.addUser = function(newUser) {
      ctrl.newUserForm.$setPristine();
      AccountService.addUser(newUser);
    };
  }
});