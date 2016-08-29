//Business Logic

var Name = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

var Address = function(street, city, state){
  this.street = street;
  this.city = city;
  this.state = state;
}

var PizzaSize = function(name, cost) {
  this.category = category;
  this.cost = cost;
}

var Toppings = function(name, cost){
  this.category = category;
  this.cost = cost;
}

var Pizza = function(pizzaSize, allToppings){
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

Pizza.prototype.description = function(){
  if(this.toppings.length === 0) {
    return this.pizzaSize.name + " Pizza";
  }
  var toppingsDescription = "";
  for(var i = 0; i < this.toppings.length; i++) {
    var topping = this.toppings[i];
    toppingsDescription = toppingsDescription + " " + topping.name;
    if(i < this.toppings.length - 1) {
      toppingsDescription = toppingsDescription + " and";
    }
  }
  return this.pizzaSize.name + " " + toppingsDescription + " Pizza";
}

Pizza.prototype.cost = function(pizza){
  var cost = this.pizzaSize.cost;
  for(var i = 0; i < this.toppings.length; i++) {
    cost = cost + this.toppings[i].cost;
  }
  return cost;
}

//User Logic

$(document).ready(function(){
  $("form#delivery-info").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input.first-name").val();
    var inputtedLastName = $("input.last-name").val();
    var newName = new Name(inputtedFirstName, inputtedLastName);

    var inputtedStreet = $("input.street").val();
    var inputtedCity = $("input.city").val();
    var inputtedState = $("input.state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);

    $("#full-name").text(inputtedFirstName + " " + inputtedLastName);
    $("#print-street").text(inputtedStreet);
    $("#print-city").text(inputtedCity);
    $("#print-state").text(inputtedState);

  });

  $("form#pizzas").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("#pizza-size option:selected").text();
    var checkboxes = document.querySelectorAll('input[name="' + topping + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    return values;
    });

  });

});
