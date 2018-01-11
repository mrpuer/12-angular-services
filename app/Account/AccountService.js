'use strict';

angular
  .module('myApp')
  .factory('AccountService', function() {
    const state = {
      status: false,
      user: {}
    };

    return {
      getData()  {
          return state.user;
      },
      addUser(newUser) {
          state.user = {
              name: newUser.name,
              email: newUser.email,
              phone: newUser.phone,
          };
          state.status = true;
      },
      removeUser() {
          state.user = {};
      },
      getStateStatus() {
        return state.status;
      }
    };
  });