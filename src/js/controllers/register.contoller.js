angular
.module('GeekTastic')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'PostService', '$state', '$http'];
function RegisterCtrl(User, PostService, $state, $http){
  const vm = this;

  vm.register = () => {
    User.register(vm.user)
    .$promise
    .then(() => {
      $('#registerModal').modal('close');
      PostService.getPost();
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  };
}
