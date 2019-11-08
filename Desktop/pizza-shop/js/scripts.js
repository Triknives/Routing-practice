function Pizza(topping, price) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
// Logic
Pizza.prototype.getPrice = function() {
  this.topping.forEach(function(topping, size){
    this.price += 1;

    if(size === "BigBoi"){
      this.price += 20;
    }
    else if(size === "SmallBoi"){
      this.price += 10;
    }
    return this.price;
  })
};



//User Interface Logic
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingsInput = $(this).val();
      $('#userOrder').append(toppingsInput + "<br>");
    });
  });
});
