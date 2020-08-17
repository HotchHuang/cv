/* Toggle between adding and removing the "responsive" class to myNav when the user clicks on the icon*/ 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "myNav"){
    x.className += " responsive";
  } else {
    x.className = "myNav";
  }
}
