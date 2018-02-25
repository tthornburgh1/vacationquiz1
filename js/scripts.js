$(document).ready(function() {
  $("form#vacationquiz").submit(function(event) {

    var terrain = $("input:radio[name=terrain]:checked").val();
    var transporting = $("input:radio[name=transporting]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var language = $("input:radio[name=language]:checked").val();
    var food = $("input:radio[name=food]:checked").val();

    var answer = "";
      if (terrain === 'mountains' && transporting === 'hiking' && development === 'remote' && language === 'comfortable' && food === 'notpriority') {
      answer = "A. Kathmandu, Nepal";
    } else if (terrain === 'city' && transporting === 'car' && development === 'somewhat' && language === 'little' && food === 'bigpriority') {
      answer = "B. Florence, Italy";
    } else if (terrain === 'beaches' && transporting === 'taxi' && development === 'developed' && language === 'uncomfortable' && food === 'western') {
      answer = "C. Sydney, Australia";
    }

    $("#answer").show();
    $("#meter").text(answer);

    event.preventDefault();
  });
});
