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