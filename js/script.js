var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elSelect = document.querySelector(".select");

var elOutput = document.querySelector(".output");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elInputValue = Number(elInput.value);
  var elSelectValue = Number(elSelect.value);
  var convertResult = (elInputValue / elSelectValue).toFixed(2);

  elOutput.textContent = convertResult;

  if(elInputValue < 0){
    elOutput.textContent = "Iltimos musbat son kiriting";
    elOutput.style.backgroundColor = "orange";
  }
  else if (elInputValue >= 10800){
    elOutput.textContent = "Tabriklaymiz pulingiz sayohatga yetarli";
    elOutput.style.backgroundColor = "#04a704";
  }
  else if(isNaN(elSelectValue)){
    elOutput.textContent = "Iltimos valyutalardan birini kiriting"
    elOutput.style.backgroundColor = "rgb(140, 18, 226)";
  }
  else{
    elOutput.textContent = "Afsuski sayohatga pulingiz yetmas ekan";
    elOutput.style.backgroundColor = "red";
  }
});