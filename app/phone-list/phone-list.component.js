'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http',  
    /*
        ^ I think this string needs to be an exact match of the service's name:

        "Note that the names of arguments are significant, because the injector uses these to look up the dependencies."

                                                                                                           - Tutorial

    */
          function PhoneListController($http) 
    {
      var self = this; // Seems like "best practice" type of thing? In order to reference the controller properly.
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function(response) { // phones/phone.json is relative to index.html
        self.phones = response.data;
        /* 
            Based on what the tutorial said, it's attached to a `data` field, as part of AngularJS design:

                "Notice that AngularJS detected the JSON response and parsed it for us into the data 
                property of the response object passed to our callback!" 
                                                                                          - Tutorial
        */
      });

      $http.get('fruits/fruits.json').then(function(response) { // fruits/fruit.json is relative to index.html
        self.fruits = response.data;
      });

    }] 
    /*
        There seems to also be a way to define the `controller:` not as an array, but as a single constructor function.
        Call the "single-constructor function" method SCF. When utilizing SCF, the code may not/cannot be minified
        without breaking the dependency injection, since the params passed to the constructor function will get
        minified.

        See this example, in the tuorial:

            angular.
              module('phoneList').
              component('phoneList', {
                templateUrl: 'phone-list/phone-list.template.html',
                controller: function PhoneListController($http) { // $http would get minified to something like 'a'
                  var self = this;
                  self.orderProp = 'age';
            
                  $http.get('phones/phones.json').then(function(response) { // ... But then 'a.get' would not work
                    self.phones = response.data;
                  });
                }
              });

        Instead, as this file shows, we declare the controller as an array of strings and a single function at the end.
        The strings are not minified, so we can identify the services we need without the fear that minification will
        break our application.

        Basically, the _I N J E C T O R_ is the most magical part of Angular.

    */
  });
