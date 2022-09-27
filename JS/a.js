count = false

$(document).ready(function(){
    $('#dropDown').click(function(){
      $('.drop-down').toggleClass('drop-down--active');
      if (count) {
        document.getElementById("Capa_1").style = "rotate: -90deg; fill: white;"
        count = false
      } else {
        document.getElementById("Capa_1").style = "rotate: 0deg; fill: white;"
        count = true
      }
      
    });
  });

function changeText(text) {
    document.getElementById("textSelect").innerHTML = text
}