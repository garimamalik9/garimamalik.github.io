var artType = 'Art Type : Sketch';
var budget = 'Budget : 500 INR';
var customMessage = 'Empty';
var arttypeError = "True";
var budgetError = "True";

var header = document.getElementById("inputCheck_container");
var btns = header.getElementsByClassName("contactBtn_check");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    var elements = document.getElementsByClassName('active');
    for(var i=0; i<elements.length; i++) { 
      artType = "Art Type : " + elements[i].dataset.order; 
    }
    superChange();
  });
};
function getBudget(){
  var budgetElement = document.getElementById('rangeInput');
  budget = "Budget : " + budgetElement.value + " INR";
  superChange();
}
function getCustomMessage(){
  customMessage = document.getElementById('customMessage').value;
  superChange();
}
function superChange(){
  var realMessage = document.getElementById('realMessage');
  realMessage.innerHTML = artType + '\n' + budget + '\n' + customMessage;
}


function putmodalImage(imgSrc) {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modalImg');
  var fullresBtn = document.getElementById('fullresBtn');
  fullresBtn.href = imgSrc.src;
  modalImg.src = imgSrc.src;
  modal.style.display = 'block';
}

function modalClose() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}