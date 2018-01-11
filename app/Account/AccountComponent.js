angular.module('myApp').component('accountComponent', {
  templateUrl: 'Account/AccountComponent.html',
  controller: function(AccountService) {
    this.getStatus = AccountService.getStateStatus();
    this.userInfo = AccountService.getData();
    this.removeUser = AccountService.removeUser();
  }
});