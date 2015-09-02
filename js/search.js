var redditApp = angular.module('redditApp', []);

redditApp.controller('redditSearchCtrl', function($scope, $http) {

  $scope.doSearch = function() {

    var wordSearch = $scope.wordSearch;
    if (wordSearch == undefined) {
      wordSearch = "happy";
    }
    var url = "http://api.reddit.com/search.json?q=" + wordSearch + "&limit=5&jsonp=JSON_CALLBACK";
    $http.jsonp(url).success(function(response, data) {
      $scope.posts = response.data.children;
      console.log(response);
      console.log(data);
    }).error(function(data, status) {
      console.log('ERROR [%s]', data);
    });
  }

});
