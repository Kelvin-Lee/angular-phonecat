'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      /*
          "Application routes in AngularJS are declared via the 
           $routeProvider, which is the provider of the $route service. 
           This service makes it easy to wire together controllers, 
           view templates, and the current URL location in the browser."

                                                       - Tutorial
      */

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
