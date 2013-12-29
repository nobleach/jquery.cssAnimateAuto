$('#btn-1').click(function() {
  $('#hidden-1').cssAnimateAuto();
  $('#hidden-download').cssAnimateAuto('close');
});

$('#btn-download').click(function() {
  $('#hidden-download').cssAnimateAuto();
  $('#hidden-1').cssAnimateAuto('close');
});