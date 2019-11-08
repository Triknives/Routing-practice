function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}
// Logic
Pizza.prototype.getPrice = function(topping) {
  for(var i = 0; i <= this.topping.length; i++){
    this.price += 1;
  }
  if(this.size === "big"){
    this.price += 20;
  }
  if(this.size === "small"){
    this.price += 10;
  }
  else
  console.log(this.price);
    return this.price;
};


//User Interface Logic
$(document).ready(function(){
  $("#toppingsForm").submit(function(event){
    event.preventDefault();
    let toppingInput = $("input:checkbox[name=topping]:checked");
    let toppingArray = [];
    let size = $("#size").val();

    toppingInput.each(function(){
      toppingArray.push($(this).val());
    })
      let myPizza = new Pizza (toppingArray, size);
      let price = myPizza.getPrice();
      console.log(price);
      $('#userOrder').append(toppingArray + "</br>");



    $('#toppingsForm').hide();

  })
});
