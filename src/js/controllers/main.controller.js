angular
.module('GeekTastic')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$http', 'API'];
function MainCtrl($rootScope, $state, $http, API){
  const vm = this;

  vm.getPost = () => {
    return $http({
      url: `${API}/posts`,
      method: 'GET'
    }).then(data => {
      //console.log(data.data);
      vm.data = data.data;
    })
  };

  vm.getPost();

  vm.getUsers = () => {
    return $http({
      url: `${API}/users`,
      method: 'GET'
    }).then(data => {
      vm.users = data.data;
    })
  };

  vm.getUserById = (id) => {

    let result = $.grep(vm.users, function(e){
      return e.id == id;

    });
    return result[0];
  };

  vm.getUsers();
}
