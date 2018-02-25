$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var customName = $("input:radio[name=customName]:checked").val();
    var yourNewName = yourNameInput.concat(customName)+"!";
    var favoriteColor = $("#color").val();
    var favoriteLocation = $("input:radio[name=location]:checked").val();

    $(".yourNewName").text(yourNewName);

    event.preventDefault();

    if (favoriteLocation === 'Dominican Republic') {
      $("#results2").hide()
      $("#results3").hide();
      $("#results1").show();
    } else if (favoriteLocation === 'Amalfi Coast') {
      $("#results1").hide();
      $("#results3").hide();
      $("#results2").show();
    } else {
      $("#results1").hide();
      $("#results2").hide();
      $("#results3").show();
    }
  });




});
