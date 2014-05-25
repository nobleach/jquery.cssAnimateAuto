$('.accordion-trigger').click(function() {
  $(this)
    // Spin the triangle.
    .toggleClass('is-active')
    // Open or close the body.
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
      transition: 'height 0.2s cubic-bezier(.31, .48, .28, .95)',
      openClass: ddActiveClass
    };

function openDropdown(trigger) {
  var $otherOpenTriggers = $('.dropdown-menu > li > a')
        .not(trigger)
        .filter('.' + ddActiveClass);
  // If other items are open, close them before opening.
  if ($otherOpenTriggers.length > 0) {
    $otherOpenTriggers.removeClass(ddActiveClass)
      .siblings('ul').cssAnimateAuto('close', settings);
  }
  // Open the clicked item.
  $(trigger).addClass(ddActiveClass)
    .siblings('ul').cssAnimateAuto('open', settings);
  // Clicking outside the menu should close the open dropdown.
  $(document).on('click.dropdown', function() {
    if (!$(event.target).parents('.dropdown-menu').length) {
      closeDropdown(trigger);
    }
  });
}

function closeDropdown(trigger) {
  $(trigger).removeClass(ddActiveClass)
    .siblings('ul').cssAnimateAuto('close', settings);
  $(document).off('.dropdown');
}

function toggleDropdown() {
  if ($(this).hasClass(ddActiveClass)) {
    closeDropdown(this);
  } else {
    openDropdown(this);
  }
}

// Toggle when a trigger is clicked.
$('.dropdown-menu > li > a').click(toggleDropdown);
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