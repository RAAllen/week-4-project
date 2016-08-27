//Business Logic

var User = function(firstName, lastName, streetAddress, cityAddress, stateAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.streetAddress = streetAddress;
  this.cityAddress = cityAddress;
  this.stateAddress = stateAddress;
}

var Pizza = function(pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize
  this.pizzaTopping = pizzaTopping
}

 Name.prototype.fullName = function() {
   return this.firstName + " " + this.lastName
 }

Address.prototype.fullAddress = function() {
  return "<ul><li>" + this.streetAddress + "</li><li>" + this.cityAddress + "</li><li>" + this.stateAddress + "</li></ul>"
}






//User Logic

$(document).ready(function(){
  $("form#delivery-info").submit(function(event){
    event.preventDefault();



});

  $("form#pizzas").submit(function(event){
    event.preventDefault();

  $("")


  });
});
