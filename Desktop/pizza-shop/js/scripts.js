function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
// Logic
Pizza.prototype.getPrice = function() {
  this.topping.forEach(function(topping){
    this.price += 1;
    if(this.size === "BigBoi"){
      this.price += 20;
    }
    else if(this.size === "SmallBoi"){
      this.price += 10;
    }
    return this.price;
  });
};



//User Interface Logic
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    let toppingInput = $("input:checkbox[name=topping]:checked")
    let toppingArray = [];
    let sizeInput = $("input:checkbox[name=size]:checked")

    toppingInput.each(function(){
      toppingArray.push($(this).val());
      console.log(toppingArray);
      $('#userOrder').append(toppingArray + "<br>");
    });

    let myPizza = new Pizza (sizeInput, toppingArray);
    let price = myPizza.getPrice();
    console.log(myPizza);
  });
});
