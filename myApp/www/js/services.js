var module = angular.module('movies.service', []);

module.factory('moviesServie', function($http){

  var moviesAPI = {};

  moviesAPI.getMovies = function(){
    return $http({
      url:''
    })
  }
})

