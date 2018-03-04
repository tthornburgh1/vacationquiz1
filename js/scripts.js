$(document).ready(function() {
  $("form#vacationquiz").submit(function(event) {

    var terrain = $("input:radio[name=terrain]:checked").val();
    var transporting = $("input:radio[name=transporting]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var language = $("input:radio[name=language]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var person1Input = $("input#person1").val();

    if (terrain === 'mountains' && transporting === 'hiking' && development === 'remote' && language === 'comfortable' && food === 'notpriority') {
      $("#answer2").hide()
      $("#answer3").hide();
      $("#answer4").hide();
      $("#answer5").hide();
      $("#answer6").hide();
      $("#answer1").fadeIn();
    } else if (terrain === 'city' && transporting === 'car' && development === 'somewhat' && language === 'little' && food === 'bigpriority') {
      $("#answer1").hide()
      $("#answer3").hide();
      $("#answer4").hide();
      $("#answer5").hide();
      $("#answer6").hide();
      $("#answer2").fadeIn();
    } else if (terrain === 'beaches' && transporting === 'taxi' && development === 'developed' && language === 'uncomfortable' && food === 'western') {
      $("#answer1").hide()
      $("#answer2").hide();
      $("#answer4").hide();
      $("#answer5").hide();
      $("#answer6").hide();
      $("#answer3").fadeIn();
    } else if (terrain === 'mountains' && transporting === 'hiking' && development === 'developed' && language === 'comfortable' && food === 'western') {
      $("#answer1").hide()
      $("#answer2").hide();
      $("#answer3").hide();
      $("#answer5").hide();
      $("#answer6").hide();
      $("#answer4").fadeIn();
    } else if (terrain === 'city' && transporting === 'taxi' && development === 'developed' && language === 'comfortable' && food === 'bigpriority') {
      $("#answer1").hide()
      $("#answer2").hide();
      $("#answer3").hide();
      $("#answer4").hide();
      $("#answer6").hide();
      $("#answer5").fadeIn();
    } else {
      $("#answer1").hide()
      $("#answer2").hide();
      $("#answer3").hide();
      $("#answer4").hide();
      $("#answer5").hide();
      $("#answer6").fadeIn();
    }

    $("#answer").show();
    $(".person1").text(person1Input);

    event.preventDefault();
  });
});
