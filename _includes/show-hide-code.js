function toggleCode ($clicked, action) {
  var codeTransition = 'height 0.3s linear',
      whichCode = $clicked.data('code'),
      oppositeAction = (action === 'open') ? 'close' : 'open';
  $('#code-' + whichCode).cssAnimateAuto(action, codeTransition, function() {
    $('#' + oppositeAction + '-code-' + whichCode).prop('disabled', false);
    $clicked.prop('disabled', true);
  });
}

$('.open-code').click(function() {
  toggleCode($(this), 'open');
});

$('.close-code').click(function() {
   toggleCode($(this), 'close');
});