function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
// Logic
Pizza.prototype.getPrice = function(topping) {

  for(var i = 0; i < this.topping.length; i++){
    this.price += 1;
    console.log(this.price);

  if(this.size === "big"){
    this.price += 20;
  }
  if(this.size === "small"){
    this.price += 10;
  }
    return this.price;
};


//User Interface Logic
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    let toppingInput = $("input:checkbox[name=topping]:checked");
    let toppingArray = [];
    let size = $("#size").val();


    toppingsInput.each(function(){
      toppingsArray.push($(this).val());
    })

    let myPizza = new Pizza (toppingArray, size);
    let price = myPizza.getPrice();

    $('#userOrder').append(toppingInput + "<br>");
    $('#toppingsForm').hide();

  })
});
}
