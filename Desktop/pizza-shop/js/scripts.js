function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
// Logic
Pizza.prototype.getPrice = function() {
    topping.forEach(function(topping){
    this.price += 1;
    console.log(this.price);
    if(this.size === "24"){
      this.price += 20;
    }
    else if(this.size === "12"){
      this.price += 10;
    }
    return this.price;
    console.log(price);
  });
};



//User Interface Logic
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    let toppingInput = $("input:checkbox[name=topping]:checked");
    let toppingArray = [];
    let sizeInput = $("#size").val();
    console.log(sizeInput);

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
