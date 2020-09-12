$(document).ready(function() {


  //// ON PAGE LOAD

  var elems = $(".l-img");
if (elems.length) {
  var keep = Math.floor(Math.random() * elems.length);
  for (var i = 0; i < elems.length; ++i) {
    if (i !== keep) {
      $(elems[i]).hide();
    }
  }
}

var elems = $(".r-img");
if (elems.length) {
var keep = Math.floor(Math.random() * elems.length);
for (var i = 0; i < elems.length; ++i) {
  if (i !== keep) {
    $(elems[i]).hide();
  }
}
}








  });
