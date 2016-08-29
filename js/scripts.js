//Business Logic

var Name = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

var Address = function(streetAddress, cityAddress, stateAddress){
  this.streetAddress = streetAddress;
  this.cityAddress = cityAddress;
  this.stateAddress = stateAddress;
}

var Pizza = function(pizzaSize, Toppings){
  this.pizzaSize = pizzaSize
  this.allToppings = []
}

var allToppings = function(){}

Pizza.prototype.fullPizza = function(){
  return this.Toppings
}


//User Logic

$(document).ready(function(){
  $("form#delivery-info").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input.first-name").val();
    var inputtedLastName = $("input.last-name").val();
    var newName = new Name(inputtedFirstName, inputtedLastName)

    var inputtedStreet = $("input.street").val();
    var inputtedCity = $("input.city").val();
    var inputtedState = $("input.state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);

    $(".full-name").append("<p>" + inputtedFirstName + " " + inputtedLastName + "</p>";
    $(".full-address").append("<li>" + inputtedStreet + "</li>" + "<li>" + inputtedCity + "</li>" + "<li>" + inputtedState + "</li>");

  });

  $("form#pizzas").submit(function(event){
    event.preventDefault();
    $("")

    var checkboxes = document.querySelectorAll('input[name="' + toppings + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    return values;
    }

  });

});
