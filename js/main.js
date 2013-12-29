$('#btn-1').click(function() {
  $('#hidden-1').cssAnimateAuto();
  $('#hidden-download').cssAnimateAuto('close');
});

$('#btn-download').click(function() {
  $('#hidden-download').cssAnimateAuto();
  $('#hidden-1').cssAnimateAuto('close');
});

$('#see-code-accordion').click(function() {
  $('#code-accordion').cssAnimateAuto();
});

$('#see-code-dd').click(function() {
  $('#code-dd').cssAnimateAuto();
});