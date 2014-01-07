$('.accordion-trigger').click(function() {
  $(this)
    // Spin the triangle.
    .toggleClass('is-active')
    // Open the body.
    .next('.accordion-body').cssAnimateAuto();
});
$('#basic-height-btn').click(function() {
  $('#basic-height-content').cssAnimateAuto();
});
$('#basic-width-btn').click(function() {
  $('#basic-width-content').cssAnimateAuto('width 0.3s');
});
var ddActiveClass = 'is-active',
    // Some custom plugin settings.
    settings = {
      transition: 'height 0.5s cubic-bezier(.31, .48, .28, .95)',
      openClass: ddActiveClass
    };
// Toggle when a trigger is clicked.
$('.dropdown-menu > li > a').click(function() {
  var trigger = this,
      $otherOpenTriggers = $('.dropdown-menu > li > a')
        .not(trigger)
        .filter('.' + ddActiveClass);
  function toggleSelf () {
    $(trigger).toggleClass(ddActiveClass)
      .siblings('ul').cssAnimateAuto(settings);
  }
  // If other items are open, close them before toggling.
  if ($otherOpenTriggers.length > 0) {
    $otherOpenTriggers.removeClass(ddActiveClass)
      .siblings('ul').cssAnimateAuto('close', settings);
  }
  // Do the toggling.
  toggleSelf();
});
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