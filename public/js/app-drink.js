(function() {
  var app = angular.module('drinkStore', []);

  app.controller('DrinkController', function() {
    this.choices = drinks;
  });
  
  app.controller("TabController", function(){
      this.tab = 1;
      this.setTab = function(setTab){
          this.tab = setTab;
      }
      this.isSet = function(checkTab){
          return this.tab === checkTab;
      }
  })

  var drinks = [{
    name: 'Mauby',
    description: "Delicous Carribean Drink",
    price: 2.50,
    color: '#CCC',
  }, {
    name: 'Root Beer',
    description: "Full body rooty flavor",
    price: 2.50,
    color: '#10C',
  }, {
    name: 'Dr Pepper',
    description: "For all your medical drink needs.",
    price: 2.50,
    color: '#ABC',
  }];
})();
