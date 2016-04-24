function isSupportHTML5() {
  return (typeof(Worker) !== "undefined");
}

// initialise
$(document).ready(function() {
  if (!isSupportHTML5()) {
    alert("Please change to a browser that support HTML5");
  } else {
    $("#main").show();
  }

});
