
function beepboop(userInput){
inputArray = [];
inputString = [];
for (i = 0; i < userInput+1; i++) {
    inputArray.push(i);
    inputString[i] = inputArray[i].toString();

    if(inputString[i].includes("3")){
      inputString[i] = "Sorry";
    } else if (inputString[i].includes("2")){
      inputString[i] = "beep";
    } else if (inputString[i].includes("1")){;
      inputString[i] = "boop";
  };
    $(".resultsbox").hide();
};
};

// User Interface logic
$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = beepboop(userInput);
    $("#userResults").text(inputString);
    $(".resultsbox").show();
  });
});
