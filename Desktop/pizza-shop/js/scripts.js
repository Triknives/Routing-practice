function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
Pizza.prototype.getPrice = function(topping) {
  for(var i = 0; i < this.topping.length; i++){
    this.price += 1;
  }
  if(this.size === "BigBoi"){
    this.price += 20;
  }
  if(this.size === "SmallBoi"){
    this.price += 10;
  }
  else
    return this.price;
};
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    let toppingInput = $("input:checkbox[name=topping]:checked");
    let toppingArray = [];
    let size = $("#size").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      let userToppings = $(this).val();
      $("#userOrder").append(userToppings + "<br>");
    })
    toppingInput.each(function(){
      toppingArray.push($(this).val());
    })

    let myPizza = new Pizza (toppingArray, size);
    let price = myPizza.getPrice();

    $("#pizzaSize").append(size);
    $("#orderTotal").text(price);
    $("#toppingsForm").hide();
    $("#specials").hide();
    $("#intro").hide();
    $("#orderReveal").show();
    $("#thankYou").show();
  })
});
