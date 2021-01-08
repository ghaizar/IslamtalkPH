 $(document).ready(function(){
    });


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}




function copyContent () {
    document.getElementById("hiddenTextarea").value =  
        document.getElementById("myContentEditable").innerText;
    return true;
}





// add pa tayo isang value... for remark..using checkbox so pag na check na sa baba ng remarks... mag auutomatic ano ilalagay sa database table na remarks?

function CB_confirm() {
  // Get the checkbox
  var checkBox = document.getElementById("surecheck");
  // Get the output text var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
   document.getElementById("remark").value = "1"; 
  } else {
    document.getElementById("remark").value = "0"; 
  }
}

function back(){
  window.location.href="{{ url()->previous() }}" ;
}


