// FOR CHILD PAGES NAVIGATION
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// FOR Costumes PAGE

function openGroup(evt, raceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(raceName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// For FAQs PAGE

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
function validateForm(){
  var newLine="\r\n";
  if(document.forms[0].userName.value==""){
    alert("You don't enter your name yet!");
    
  }
  else if(document.forms[0].email.value==""){
    alert("You don't enter your email yet!");
    
  }
  else if(document.forms[0].question.value==""){
    alert("You don't enter your question yet!");
    
  }
  
  else{
    alert("Your question has been received."+newLine+"Name:"+userName.value+newLine+"Email:"+email.value+newLine+"We will reply you as soon as possible via email!");
  }
}
