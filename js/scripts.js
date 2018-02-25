$(document).ready(function() {
  $("form#vacationquiz").submit(function(event) {

    var answer = "";
      if (terrain === 'mountains' && transporting === 'hiking' && development === 'remote' && language === 'comfortable' && food === 'notpriority') {
      answer = "Kathmandu, Nepal";
    } else if (terrain === 'city' && transporting === 'car' && development === 'somewhat' && language === 'little' && food === 'bigpriority') {
      answer = "Florence, Italy";
    } else if (terrain === 'beaches' && transporting === 'taxi' && development === 'developed' && language === 'uncomfortable' && food === 'western') {
      answer = "Sydney, Australia";
    }
      $("#answer").show();
      $("#meter").text(answer);

    event.preventDefault();
  });
});
