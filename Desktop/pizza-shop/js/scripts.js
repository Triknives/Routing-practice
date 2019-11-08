function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
// Logic
Pizza.prototype.getPrice = function() {
  this.topping.forEach(function(topping, size, price){
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
    let toppingInput = $("input:checkbox[name=toppings]:checked");
    let toppingArray = [];
    let size = $("#size").val();
    $(toppingInput).each(function(){
      toppingArray.push($(this).val());
      $('#userOrder').append(toppingArray);
    });
  });
});
