
var advice = function(number) {
    if (number >= 10) {
      $("#severe").show();
    } else if ((number >= 5 ) && (number <= 9)) {
      $("#moderate").show();
    } else if (number <= 4) {
      $("#noStress").show();
    };
  };

$(document).ready(function() {

  var warningTotal;
  var symptomTotal;
  var copingTotal;

  $('#survey').submit(function(event) {
    event.preventDefault();



    var warningSum = [];
    $("input:checkbox[name=warnings]:checked").each(function() {
      var warningValue = $(this).val();
      warningSum.push(warningValue);
      warningTotal = warningSum.length;
    });
    console.log(warningTotal);


    var symptomSum = [];
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptomValue = $(this).val();
      symptomSum.push(symptomValue);
      symptomTotal = symptomSum.length;
    });
    console.log(symptomTotal);


    var copingSum = [];
    $("input:checkbox[name=coping]:checked").each(function() {
      var copingValue = $(this).val();
      copingSum.push(copingValue);
      copingTotal = copingSum.length;
    });
    console.log(copingTotal);

    var stressValue = warningTotal + symptomTotal - copingTotal;
    console.log(stressValue);
    advice(stressValue);

    $('#survey').hide();
  });
});
