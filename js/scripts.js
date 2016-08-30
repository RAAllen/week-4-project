// Business Logic

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
  this.name = name;
  this.cost = cost;
}

var Toppings = function(name, cost){
  this.name = name;
  this.cost = cost;
}

var Pizza = function(pizzaSize, toppings, cost){
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.cost = 0;
}

var Order = function() {
  this.pizzas = [];
}

Pizza.prototype.description = function(){
  if(this.toppings.length == 0) {
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

Order.prototype.cost = function(pizza){
  cost = 0;
  for(var i = 0; i < this.pizzas.length; i++) {
    var pizza = this.pizzas[i];
    cost = cost + pizza.cost();
  }
  return cost;
}

var order = new Order();

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

    var pizzaSizeOption = $("#pizza-size option:selected");
    var pizzaSizeName = pizzaSizeOption.text();
    var pizzaSizeCost = pizzaSizeOption.val();
    if(pizzaSizeCost === "") {
      alert("You must select a pizza size.");
      return;
    }

    var pizzaSize = new PizzaSize(pizzaSizeName, parseInt(pizzaSizeCost));

    var toppings = [];
    var toppingCheckboxes = $("input[type='checkbox']:checked");
    toppingCheckboxes.each(function(){
      var toppingName = $(this.name);
      var toppingCost = $(this.value);
      toppings.push(new Topping(toppingName, toppingCost));
    });

    var pizza = new Pizza(pizzaSize, toppings);
    order.pizzas.push(pizza);
    $("#pizzas").empty();

    for(var i = 0; i < order.pizzas.length; i++) {
      var pizza = order.pizzas[i];
      $("#pizzas").append("<li>" + pizza.description() + "</li>");
    }

    $("#pizza-cost").text("$" + order.cost().toFixed(2));
  });
});
