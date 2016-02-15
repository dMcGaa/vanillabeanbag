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
  });
  
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var drinks = [{
    name: 'Mauby',
    description: "Delicous Carribean Drink",
    price: 2.50,
    color: '#CCC',
    reviews: [{
        stars: 5,
        body: "I love this drink!",
        author: "awesomedude@example.org",
        createdOn: 1397490000000
      }, {
        stars: 1,
        body: "mauby sucks.",
        author: "meany@example.org",
        createdOn: 1397490000000
      }]
  }, {
    name: 'Root Beer',
    description: "Full body rooty flavor",
    price: 2.50,
    color: '#10C',
    reviews: []
  }, {
    name: 'Dr Pepper',
    description: "For all your medical drink needs.",
    price: 2.50,
    color: '#ABC',
    reviews: []
  }];
})();
