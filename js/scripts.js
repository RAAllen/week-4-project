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

 Name.prototype.fullName = function(){
   return "<p>" + this.firstName + " " + this.lastName + "</p>"
 }

Address.prototype.fullAddress = function(){
  return "<ul>" + "<li>" + this.streetAddress + "</li>" + "<li>" + this.cityAddress + "</li>" + "<li>" + this.stateAddress + "</li>" + "</ul>"
}

var Pizza = function(pizzaSize, Toppings){
  this.pizzaSize = pizzaSize
  this.Toppings = []
}

var Toppings = function(){}

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

    $(".full-name").text(newName.fullName());
    $(".full-address").text(newAddress.fullAddress());

  });

  // $("form#pizzas").submit(function(event){
  //   event.preventDefault();
  //   $("")
  //
  //
  // });
});
