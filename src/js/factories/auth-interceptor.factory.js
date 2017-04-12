angular
.module('GeekTastic')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API'];
function AuthInterceptor(API) {
  return {
    request(config) {
      return config;
    },
    response(res) {
      return res;
    }
  };
}
