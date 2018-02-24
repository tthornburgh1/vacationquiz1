$(document).ready(function() {
  $("form#vacationquiz").submit(function(event) {

    var answer = "";
      if (terrain === 'mountains' && transporting === 'hiking' && development === 'remote' && language === 'comfortable' && food === 'notpriority');
      answer = "Kathmandu";

    var answer = "";
      else if (terrain === 'city' && transporting === 'car' && development === 'somewhat' && language === 'little' && food === 'bigpriority');
      answer = "Florence";

    var answer = "";
      else (terrain === 'beaches' && transporting === 'taxi' && development === 'developed' && language === 'uncomfortable' && food === 'western');
      answer = "Sydney";

      $("#answer").show();
      $("#meter").text(answer);

    event.preventDefault();
  });
});
